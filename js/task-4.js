"use strict";

const formElem = document.querySelector(".login-form");

const inputEmailElem = formElem.elements.email;
const inputPasswordElem = formElem.elements.password;

const formValues = {};

formElem.addEventListener("submit", (event) => {
  event.preventDefault();

  const isEmail = Boolean(inputEmailElem.value);
  const isPassword = Boolean(inputPasswordElem.value);
  const isFormFilled = isEmail && isPassword;

  if (isFormFilled) {
    formValues.email = inputEmailElem.value.trim();
    formValues.password = inputPasswordElem.value.trim();

    console.log(`Email: ${formValues.email}\nPassword: ${formValues.password}`);

    formElem.reset();
  } else {
    alert("All form fields must be filled in");
  }
  
});
