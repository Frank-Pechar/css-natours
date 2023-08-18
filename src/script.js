'use strict';

const menuLinks = document.querySelectorAll('.navigation__link');

menuLinks.forEach((link) => {
  link.addEventListener('click', closeMenu);
});

function closeMenu() {
  document.getElementById('navi-toggle').checked = false;
}
