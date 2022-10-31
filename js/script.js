"user strict";

const menu = document.querySelector(".menu");
const aside = document.querySelector(".section-aside");

const openMenu = function () {
  menu.classList.toggle("fa-times");
  aside.classList.toggle("toggle");
};

const closeMenu = function () {
  menu.classList.remove("fa-times");
  aside.classList.remove("toggle");
};

menu.addEventListener("click", openMenu);
window.addEventListener("scroll", closeMenu);
