document.addEventListener('DOMContentLoaded', () => {
  const navbarBurgers = Array.prototype.slice.call(document.querySelectorAll('.navbar-burger'), 0);
  const nav = document.querySelector('nav');
  if (navbarBurgers.length < 1) return;

  navbarBurgers.forEach((navbarBurger) => {
    navbarBurger.addEventListener('click', () => {
      const isExpanded = navbarBurger.getAttribute('aria-expanded') === 'true';
      navbarBurger.setAttribute('aria-expanded', !isExpanded);
      navbarBurger.classList.toggle('nav--active');
      nav.classList.toggle('nav--active');
    });
  });

  document.addEventListener('keydown', (event) => {
    if (event.key === 'Escape') {
      navbarBurgers.forEach((navbarBurger) => {
        if (navbarBurger.getAttribute('aria-expanded') === 'true') {
          navbarBurger.setAttribute('aria-expanded', 'false');
          navbarBurger.classList.remove('nav--active');
          nav.classList.remove('nav--active');
          navbarBurger.focus();
        }
      });
    }
  });
});
