(() => {
  document.body.classList.remove('no-js');
  document.body.classList.add('js');
  const menuButton = document.querySelector('[data-menu-button]');
  const menu = document.querySelector('[data-menu]');

  const closeMenu = () => {
    if (!menu || !menuButton) return;
    menu.classList.remove('is-open');
    menuButton.setAttribute('aria-expanded', 'false');
  };

  menuButton?.addEventListener('click', () => {
    const isOpen = menu.classList.toggle('is-open');
    menuButton.setAttribute('aria-expanded', String(isOpen));
  });

  menu?.querySelectorAll('a').forEach((link) => link.addEventListener('click', closeMenu));
  document.addEventListener('keydown', (event) => {
    if (event.key === 'Escape' && menu?.classList.contains('is-open')) {
      closeMenu();
      menuButton?.focus();
    }
  });

  const year = document.querySelector('[data-year]');
  if (year) year.textContent = new Date().getFullYear();

  const form = document.querySelector('[data-contact-form]');
  const status = document.querySelector('[data-form-status]');
  const contactPattern = /(^[^\s@]+@[^\s@]+\.[^\s@]+$)|(^\+?[0-9\s().-]{10,}$)/;

  const setFieldError = (field, message = '') => {
    const error = document.getElementById(`erro-${field.id}`);
    field.setAttribute('aria-invalid', message ? 'true' : 'false');
    if (error) error.textContent = message;
  };

  const validateField = (field) => {
    const value = field.value.trim();
    if (!value) return 'Preencha este campo para continuar.';
    if (field.id === 'canal' && !contactPattern.test(value)) return 'Informe um e-mail válido ou um número de WhatsApp válido.';
    return '';
  };

  form?.querySelectorAll('input, textarea, select').forEach((field) => {
    field.addEventListener('input', () => setFieldError(field, ''));
    field.addEventListener('change', () => setFieldError(field, ''));
  });

  form?.addEventListener('submit', (event) => {
    event.preventDefault();
    const fields = [...form.querySelectorAll('input, textarea, select')];
    const invalidField = fields.find((field) => {
      const message = validateField(field);
      setFieldError(field, message);
      return Boolean(message);
    });

    if (invalidField) {
      if (status) {
        status.textContent = 'Revise os campos indicados antes de enviar.';
        status.classList.add('is-error');
        status.focus();
      }
      invalidField.focus();
      return;
    }

    if (status) {
      status.textContent = 'Tudo certo. Seu aplicativo de e-mail será aberto para enviar a mensagem.';
      status.classList.remove('is-error');
    }

    const data = new FormData(form);
    const body = [
      `Nome: ${data.get('nome')}`,
      `E-mail ou WhatsApp: ${data.get('canal')}`,
      `Perfil: ${data.get('perfil')}`,
      '',
      'Contexto:', data.get('contexto'),
      '',
      'Principal desafio:', data.get('desafio'),
      '',
      `Preferência de contato: ${data.get('preferencia')}`
    ].join('\n');
    window.location.href = `mailto:macielsttefanie@gmail.com?subject=${encodeURIComponent('Solicitação de diagnóstico pelo site')}&body=${encodeURIComponent(body)}`;
  });
})();
