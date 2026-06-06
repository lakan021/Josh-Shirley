const toggleNav = document.querySelector('.nav-toggle');
const nav = document.querySelector('nav');

toggleNav.addEventListener('click', () => {
  nav.classList.toggle('visible');
});
