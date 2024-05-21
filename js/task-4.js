"use strict";

const formElem = document.querySelector(".login-form");

const inputEmailElem = formElem.elements.email;
const inputPasswordElem = formElem.elements.password;

const formValues = {};

formElem.addEventListener("submit", (event) => {
  event.preventDefault();

  const trimedEmail = inputEmailElem.value.trim();
  const trimedPassword = inputPasswordElem.value.trim();
  const isEmail = Boolean(trimedEmail);
  const isPassword = Boolean(trimedPassword);
  const isFormFilled = isEmail && isPassword;

  if (isFormFilled) {
    formValues.email = trimedEmail;
    formValues.password = trimedPassword;
    console.log(formValues.email);
    console.log(formValues.password);

    formElem.reset();
  } else {
    alert("All form fields must be filled in");
  }
  
});
