(() => {
  document.body.classList.remove('no-js');
  const menuButton = document.querySelector('[data-menu-button]');
  const menu = document.querySelector('[data-menu]');
  const closeMenu = () => { menu?.classList.remove('is-open'); menuButton?.setAttribute('aria-expanded', 'false'); };
  menuButton?.addEventListener('click', () => { const isOpen = menu?.classList.toggle('is-open'); menuButton.setAttribute('aria-expanded', String(Boolean(isOpen))); });
  menu?.querySelectorAll('a').forEach((link) => link.addEventListener('click', closeMenu));
  document.addEventListener('keydown', (event) => {
    if (event.key === 'Escape' && menu?.classList.contains('is-open')) {
      closeMenu();
      menuButton?.focus();
    }
  });
  const year = document.querySelector('[data-year]');
  if (year) year.textContent = new Date().getFullYear();
})();