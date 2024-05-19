"use strict";

const liElemList = document.querySelectorAll("#categories li.item");

console.log("Number of categories: ", liElemList.length);

liElemList.forEach((liElem) => {
    const liSubElemList = liElem.querySelectorAll("li");
    const liSubElemTitle = liElem.querySelector("h2");

    console.log("Category: ", liSubElemTitle.textContent);
    console.log("Elements: ", liSubElemList.length);
});

