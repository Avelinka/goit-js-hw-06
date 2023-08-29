const controls = document.querySelector("#controls");
const boxesContainer = document.querySelector("#boxes");

const input = controls.querySelector("input");

const createButton = controls.querySelector("[data-create]");
const destroyButton = controls.querySelector("[data-destroy]");

createButton.addEventListener("click", createBoxes);
destroyButton.addEventListener("click", destroyBoxes);

function createBoxes() {
  const amount = input.value;
  const min = Number(input.getAttribute("min"));
  const max = Number(input.getAttribute("max"));
  const step = Number(input.getAttribute("step"));

  if (amount < min || amount > max) {
    alert("Please enter a number between 1 and 100");
    return;
  }

  const boxes = [];

  for (let i = 0; i < amount; i += step) {
    const box = document.createElement("div");
    const size = 30 + i * 10;
    box.style.width = size + "px";
    box.style.height = size + "px";
    box.style.backgroundColor = getRandomHexColor();
    boxes.push(box);
  }

  boxesContainer.append(...boxes);
}

function destroyBoxes() {
  boxesContainer.innerHTML = "";
  input.value = "";
}

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}
