
const hamburger = document.querySelector('.hamburger-menu');
const navMenu = document.querySelector('.nav-menu');
 
// hamburger.addEventListener('click', (e) => {
//   navMenu.classList.toggle('open');
//   e.stopImmediatePropagation();
// });


hamburger.addEventListener('click', () => {
    navMenu.classList.toggle('hide');
  });