"use strict";
////////////////////////////////////////////////////////////////
/// Elements
const menu = document.querySelector(".menu");
const aside = document.querySelector(".section-aside");

/////////////////////////////////////////////////////////////////
/// Functions

// Function to open/close the menu
const openMenu = function () {
  menu.classList.toggle("fa-times");
  aside.classList.toggle("toggle");
};

// Function to close the menu on scroll
const closeMenu = function () {
  menu.classList.remove("fa-times");
  aside.classList.remove("toggle");
};

//////////////////////////////////////////////////////////////
// Event Listeners
menu.addEventListener("click", openMenu);
window.addEventListener("scroll", closeMenu);
