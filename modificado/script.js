document.addEventListener('DOMContentLoaded', () => {

  const btnPortal = document.getElementById('btn-portal');
  if (btnPortal) {
    btnPortal.addEventListener('click', () => {
      alert('Acceso al Portal de Estudiantes de la USAL');
    });
  }

  const btnSubmit = document.getElementById('btn-submit-form');
  const newsletterForm = document.getElementById('newsletter-form');
  
  if (btnSubmit && newsletterForm) {
    btnSubmit.addEventListener('click', () => {
      alert('¡Solicitud enviada correctamente!');
    });
  }

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