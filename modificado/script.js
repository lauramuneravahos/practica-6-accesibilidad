// MARCAS DE TRABAJO · cada «I-xx · PENDIENTE» señala dónde va una corrección (apartado 6 de memoria.md); al terminar, borrar todas las marcas
document.addEventListener('DOMContentLoaded', () => {

  // I-08 · PENDIENTE: abrir y cerrar los desplegables con Enter, Espacio y Escape, manteniendo aria-expanded
  // I-15 · PENDIENTE: borrar este alert(): el portal ya es un <a href>
  const btnPortal = document.getElementById('btn-portal');
  if (btnPortal) {
    btnPortal.addEventListener('click', () => {
      alert('Acceso al Portal de Estudiantes de la USAL');
    });
  }

  // I-16 · PENDIENTE: escuchar el evento submit del formulario, no el click del <div>
  const btnSubmit = document.getElementById('btn-submit-form');
  const newsletterForm = document.getElementById('newsletter-form');
  
  if (btnSubmit && newsletterForm) {
    btnSubmit.addEventListener('click', () => {
      alert('¡Solicitud enviada correctamente!');
    });
  }

  // I-15 · PENDIENTE: borrar este bloque: los enlaces ya llevan href en el HTML
  const fakeLinks = [
    { id: 'link-ai', hash: '#tfg' },
    { id: 'link-energy', hash: '#practicas' },
    { id: 'link-biotech', hash: '#erasmus' }
  ];

  fakeLinks.forEach(item => {
    const elem = document.getElementById(item.id);
    if (elem) {
      elem.addEventListener('click', () => {
        location.href = item.hash;
      });
    }
  });

  // I-21 · PENDIENTE: cerrar el aviso de cookies desde los botones Aceptar y Rechazar
});