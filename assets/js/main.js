(() => {
  document.body.classList.remove('no-js');
  const menuButton = document.querySelector('[data-menu-button]');
  const menu = document.querySelector('[data-menu]');
  const closeMenu = () => { menu?.classList.remove('is-open'); menuButton?.setAttribute('aria-expanded', 'false'); };
  menuButton?.addEventListener('click', () => { const isOpen = menu?.classList.toggle('is-open'); menuButton.setAttribute('aria-expanded', String(Boolean(isOpen))); });
  menu?.querySelectorAll('a').forEach((link) => link.addEventListener('click', closeMenu));
  document.addEventListener('keydown', (event) => { if (event.key === 'Escape') { closeMenu(); menuButton?.focus(); } });
  const year = document.querySelector('[data-year]');
  if (year) year.textContent = new Date().getFullYear();
  const form = document.querySelector('[data-contact-form]');
  const status = document.querySelector('[data-form-status]');
  form?.addEventListener('submit', (event) => {
    event.preventDefault();
    if (!form.reportValidity()) return;
    const data = new FormData(form);
    const body = `Nome: ${data.get('nome')}\nE-mail ou WhatsApp: ${data.get('canal')}\n\n${data.get('mensagem')}`;
    if (status) status.textContent = 'Abrindo seu aplicativo de e-mail...';
    window.location.href = `mailto:macielsttefanie@gmail.com?subject=${encodeURIComponent('Contato pelo site')}&body=${encodeURIComponent(body)}`;
  });
})();