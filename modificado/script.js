// MARCAS DE TRABAJO · las marcas «I-xx · APLICADO» señalan dónde está cada corrección (apartado 6 de memoria.md)
document.addEventListener('DOMContentLoaded', () => {

  // I-08 · APLICADO: menú desplegable accesible con ratón y con teclado
  const dropdowns = document.querySelectorAll('.dropdown');

  const closeDropdown = (dropdown, devolverFoco) => {
    dropdown.classList.remove('is-open');
    const button = dropdown.querySelector('.dropbtn');
    if (button) {
      button.setAttribute('aria-expanded', 'false');
      if (devolverFoco) button.focus();
    }
  };

  const closeAllDropdowns = (excepto) => {
    dropdowns.forEach((dropdown) => {
      if (dropdown !== excepto) closeDropdown(dropdown, false);
    });
  };

  dropdowns.forEach((dropdown) => {
    const button = dropdown.querySelector('.dropbtn');
    if (!button) return;

    // Enter y Espacio llegan aquí como click, porque el disparador es un <button> de verdad
    button.addEventListener('click', () => {
      const abierto = dropdown.classList.toggle('is-open');
      button.setAttribute('aria-expanded', String(abierto));
      if (abierto) closeAllDropdowns(dropdown);
    });

    // Escape cierra el panel y devuelve el foco al botón
    dropdown.addEventListener('keydown', (event) => {
      if (event.key === 'Escape') closeDropdown(dropdown, true);
    });

    // Si el foco sale del menú (al tabular), el panel se cierra
    dropdown.addEventListener('focusout', () => {
      requestAnimationFrame(() => {
        if (!dropdown.contains(document.activeElement)) closeDropdown(dropdown, false);
      });
    });

    // Al elegir una opción, el panel se cierra
    dropdown.querySelectorAll('.dropdown-content a').forEach((link) => {
      link.addEventListener('click', () => closeDropdown(dropdown, false));
    });
  });

  // Un clic fuera del menú cierra los paneles que estén abiertos
  document.addEventListener('click', (event) => {
    if (!event.target.closest('.dropdown')) closeAllDropdowns(null);
  });

  const newsletterForm = document.getElementById('newsletter-form');
  if (newsletterForm) {
    newsletterForm.addEventListener('submit', (e) => {
      e.preventDefault();
      alert('¡Solicitud enviada correctamente!');
    });
  }

  // I-21 · APLICADO: los botones Aceptar y Rechazar cierran el aviso de cookies
  const cookieBanner = document.getElementById('cookie-banner');
  if (cookieBanner) {
    document.body.classList.add('has-cookie');
    cookieBanner.querySelectorAll('button').forEach((boton) => {
      boton.addEventListener('click', () => {
        cookieBanner.classList.add('hidden');
        document.body.classList.remove('has-cookie');
      });
    });
  }
});