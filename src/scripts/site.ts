// Site behaviour added in site-5-01: theme toggle, cursor spotlight on the dot grid, entrance motion.
// No dependencies. The first paint theme is set earlier by the inline script in BaseLayout.

type Theme = 'light' | 'dark';

const root = document.documentElement;
const STORAGE_KEY = 'theme';
const systemDark = window.matchMedia('(prefers-color-scheme: dark)');
const reducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)');
const finePointer = window.matchMedia('(hover: hover) and (pointer: fine)');

const readStoredTheme = (): Theme | null => {
  try {
    const value = localStorage.getItem(STORAGE_KEY);
    return value === 'light' || value === 'dark' ? value : null;
  } catch {
    return null;
  }
};

const storeTheme = (theme: Theme): void => {
  try {
    localStorage.setItem(STORAGE_KEY, theme);
  } catch {
    // Storage blocked (private mode). The choice still applies to this page.
  }
};

const currentTheme = (): Theme => (root.dataset.theme === 'dark' ? 'dark' : 'light');

const toggles = (): HTMLButtonElement[] =>
  Array.from(document.querySelectorAll<HTMLButtonElement>('[data-theme-toggle]'));

const applyTheme = (theme: Theme): void => {
  root.dataset.theme = theme;
  toggles().forEach((button) => button.setAttribute('aria-pressed', String(theme === 'dark')));
};

const initThemeToggle = (): void => {
  applyTheme(currentTheme());
  toggles().forEach((button) => {
    button.addEventListener('click', () => {
      const next: Theme = currentTheme() === 'dark' ? 'light' : 'dark';
      applyTheme(next);
      storeTheme(next);
    });
  });
  // Follow the OS setting live until the visitor picks a theme themselves.
  systemDark.addEventListener('change', (event) => {
    if (readStoredTheme() === null) applyTheme(event.matches ? 'dark' : 'light');
  });
};

const initGlow = (): void => {
  const glow = document.querySelector<HTMLElement>('.canvas-glow');
  if (!glow) return;

  let frame = 0;
  let x = -999;
  let y = -999;

  const paint = (): void => {
    frame = 0;
    glow.style.setProperty('--mx', `${x}px`);
    glow.style.setProperty('--my', `${y}px`);
    glow.style.setProperty('--sy', `${window.scrollY}px`);
  };

  const schedule = (): void => {
    if (frame === 0) frame = window.requestAnimationFrame(paint);
  };

  window.addEventListener(
    'pointermove',
    (event) => {
      if (event.pointerType === 'touch' || !finePointer.matches || reducedMotion.matches) return;
      x = event.clientX;
      y = event.clientY;
      glow.classList.add('is-on');
      schedule();
    },
    { passive: true },
  );
  window.addEventListener('scroll', schedule, { passive: true });
  root.addEventListener('mouseleave', () => glow.classList.remove('is-on'));
};

const initReveal = (): void => {
  const items = Array.from(document.querySelectorAll<HTMLElement>('.reveal'));
  if (items.length === 0 || reducedMotion.matches || !('IntersectionObserver' in window)) return;

  // Anything already on screen shows at once, so nothing visible ever blinks out.
  const fold = window.innerHeight;
  items.forEach((item) => {
    if (item.getBoundingClientRect().top < fold) item.classList.add('is-in');
  });
  root.classList.add('reveal-on');

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (!entry.isIntersecting) return;
        entry.target.classList.add('is-in');
        observer.unobserve(entry.target);
      });
    },
    { rootMargin: '0px 0px -10% 0px' },
  );
  items.filter((item) => !item.classList.contains('is-in')).forEach((item) => observer.observe(item));
};

initThemeToggle();
initGlow();
initReveal();
