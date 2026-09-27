/* Accessible enhancement: navigation and all page content also work without JavaScript. */
(() => {
  const key = 'lingqing-site-theme';
  const root = document.documentElement;
  const toggle = document.querySelector('.theme-toggle');
  let saved;
  try { saved = localStorage.getItem(key); } catch (_) {}
  const preference = window.matchMedia('(prefers-color-scheme: dark)');
  function apply(theme) {
    root.dataset.theme = theme;
    if (!toggle) return;
    toggle.setAttribute('aria-pressed', String(theme === 'dark'));
    toggle.setAttribute('aria-label', theme === 'dark' ? 'Switch to light theme' : 'Switch to dark theme');
  }
  apply(saved === 'dark' || saved === 'light' ? saved : preference.matches ? 'dark' : 'light');
  if (toggle) {
    toggle.hidden = false;
    toggle.addEventListener('click', () => {
      saved = root.dataset.theme === 'dark' ? 'light' : 'dark';
      apply(saved);
      try { localStorage.setItem(key, saved); } catch (_) {}
    });
  }
  preference.addEventListener('change', () => { if (!saved) apply(preference.matches ? 'dark' : 'light'); });
  const printButton = document.querySelector('.print-button');
  if (printButton) { printButton.hidden = false; printButton.addEventListener('click', () => window.print()); }
})();
