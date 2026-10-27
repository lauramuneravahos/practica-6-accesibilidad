// I-08 · Aquí no hay nada para el menú: los desplegables se abren solo con CSS (:hover).
document.addEventListener('DOMContentLoaded', () => {

  // I-15 · En el HTML esto es un <span>, no un enlace: el click va con JavaScript y con teclado no llegas.
  const btnPortal = document.getElementById('btn-portal');
  if (btnPortal) {
    btnPortal.addEventListener('click', () => {
      alert('Acceso al Portal de Estudiantes de la USAL');
    });
  }

  // I-16 · El botón es un <div>, así que solo funciona el click de ratón.
  const btnSubmit = document.getElementById('btn-submit-form');
  const newsletterForm = document.getElementById('newsletter-form');
  
  if (btnSubmit && newsletterForm) {
    btnSubmit.addEventListener('click', () => {
      alert('¡Solicitud enviada correctamente!');
    });
  }

  // I-15 · A estos elementos sin href les ponemos un click: con Tab no se puede llegar a ellos.
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

});