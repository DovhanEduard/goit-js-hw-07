function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

const bodyElem = document.querySelector("body");
const btnElem = document.querySelector(".change-color");
const spanElem = document.querySelector(".color");

btnElem.addEventListener("click", (event) => {
  const randomHexColor = getRandomHexColor();

  bodyElem.style = `background-color: ${randomHexColor}`;
  spanElem.textContent = randomHexColor;
});
