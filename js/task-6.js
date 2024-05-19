function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}
const inputAmauntElem = document.querySelector("input");
const btnCreateElem = document.querySelector("[data-create]");
const btnDestroyElem = document.querySelector("[data-destroy]");
const boxesContainerElem = document.querySelector("#boxes");

const DEFAULT_BOX_SIZE = 30;
const BOX_SIZE_ADJUST_VALUE = 10;

function createBoxes(amount) {
  const boxList = [];
  for (let i = 0; i < amount; i++) {
    const randomHexColor = getRandomHexColor();

    const boxWidth = DEFAULT_BOX_SIZE + BOX_SIZE_ADJUST_VALUE * i;
    const boxHeight = DEFAULT_BOX_SIZE + BOX_SIZE_ADJUST_VALUE * i;

    const boxMarkup = `<div style="background-color: ${randomHexColor}; width: ${boxWidth}px; height: ${boxHeight}px;"></div>`;

    boxList.push(boxMarkup);
  }

  const boxesMarkup = boxList.join("");

  boxesContainerElem.innerHTML = boxesMarkup;
}

function destroyBoxes() {
  boxesContainerElem.innerHTML = "";
}

btnCreateElem.addEventListener("click", () => {
  const inputValue = inputAmauntElem.value;
  const isInputValueValid = inputValue > 0 && inputValue <= 100;

  if (isInputValueValid) {
    createBoxes(inputValue);
    inputAmauntElem.value = "";
  }
});

btnDestroyElem.addEventListener("click", () => {
  destroyBoxes();
});
