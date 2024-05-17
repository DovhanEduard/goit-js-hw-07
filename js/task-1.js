"use strict";

const liElem = document.querySelectorAll("#categories li.item");

console.log("Number of categories: ", liElem.length);

const liElem1 = liElem[0].querySelectorAll("li");
const titleElem1 = liElem[0].querySelector("h2");
console.log("Category: ", titleElem1.textContent);
console.log("Elements: ", liElem1.length);

const liElem2 = liElem[1].querySelectorAll("li");
const titleElem2 = liElem[1].querySelector("h2");
console.log("Category: ", titleElem2.textContent);
console.log("Elements: ", liElem2.length);

const liElem3 = liElem[2].querySelectorAll("li");
const titleElem3 = liElem[2].querySelector("h2");
console.log("Category: ", titleElem3.textContent);
console.log("Elements: ", liElem3.length);