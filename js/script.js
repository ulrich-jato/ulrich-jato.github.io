"use strict";
////////////////////////////////////////////////////////////////
/// Elements
const menu = document.querySelector(".menu");
const aside = document.querySelector(".section-aside");
const formButton = document.querySelector(".form-btn");
const contactName = document.querySelector("#name");
const contactEmail = document.querySelector("#email");
const contactSubject = document.querySelector("#subject");
const contactMessage = document.querySelector("#message");
const form = document.querySelector(".form");

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

// Function to display error and warning messages on the form
const showErrorMessage = function (input, message, color = "#ffd43b") {
  let errorMessage = input.parentElement.querySelector(".error-message");
  if (!errorMessage) {
    errorMessage = document.createElement("span");
    errorMessage.classList.add("error-message");
    input.parentElement.appendChild(errorMessage);
  }
  errorMessage.textContent = message;
  errorMessage.style.color = color;
  errorMessage.style.fontSize = "16px";
  input.style.border = "2px solid #ffd43b";
};

// Function to clear worning or error message on a specific form field
const clearErrorMessage = function (input) {
  let errorMessage = input.parentElement.querySelector(".error-message");
  if (errorMessage) {
    errorMessage.remove();
    input.style.border = "";
  }
};

// Function to validate email
const isValidEmail = function (email) {
  const emailPattern = /\S+@\S+\.\S+/;
  return emailPattern.test(email);
};

// Function to validate name
const isValidName = function (name) {
  const usernamePattern = /^[A-Za-z\s]{1,100}$/;
  return usernamePattern.test(name);
};

// Function to validate text message
const isValidMessage = function (message) {
  const usernamePattern = /^[\s\S]{1,5000}$/;
  return usernamePattern.test(message);
};

// Function to validate the entire form
const validate = function (e) {
  e.preventDefault();
  let isValid = true;
  const name = contactName.value.trim();
  const email = contactEmail.value.trim();
  const subject = contactSubject.value.trim();
  const message = contactMessage.value.trim();

  if (!isValidEmail(email)) {
    showErrorMessage(contactEmail, "* Email address should be non-empty with format xyz@xyz.xyz");
    isValid = false;
  } else {
    clearErrorMessage(contactEmail);
  }

  if (!isValidName(name)) {
    showErrorMessage(contactName, "* Name should be non-empty and should contain no digits.");
    isValid = false;
  } else {
    clearErrorMessage(contactName);
  }

  if (!isValidMessage(subject)) {
    showErrorMessage(contactSubject, "* Subject should be non-empty.");
    isValid = false;
  } else {
    clearErrorMessage(contactSubject);
  }

  if (!isValidMessage(message)) {
    showErrorMessage(contactMessage, "* Message should be non-empty.");
    isValid = false;
  } else {
    clearErrorMessage(contactMessage);
  }

  if (isValid) {
    const body = "name: " + name + "<br/> email: " + email + "<br/> subject: " + subject + "<br/> message: " + message;
    Email.send({
      SecureToken: "e9235310-5fb4-4efc-8e55-725aca952b3a",
      To: "guif0001@algonquinlive.com",
      From: "ulrichguiffo@gmail.com",
      Subject: subject,
      Body: body,
    }).then((message) => {
      console.log(message);
      if (message === "OK") {
        alert("Email sent successfully to Jato Ulrich Guiffo Kengne");
        form.reset();
      } else {
        alert("Something went wrong !!!");
      }
    });
  }
};

//////////////////////////////////////////////////////////////
// Event Listeners
menu.addEventListener("click", openMenu);
window.addEventListener("scroll", closeMenu);
formButton.addEventListener("click", validate);
