"use strict";

const inputElem = document.querySelector("#name-input");
const spanElem = document.querySelector("#name-output");

inputElem.addEventListener("input", () => {
    const trimmedValue = inputElem.value.trim();
    const isEmptyValue = !trimmedValue;
    spanElem.textContent = isEmptyValue ? "Anonymous" : trimmedValue;
});

