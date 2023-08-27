const counterValue = document.querySelector("#value");
let currentValue = 0;

const decrementButton = document.querySelector('[data-action="decrement"]');
const incrementButton = document.querySelector('[data-action="increment"]');

decrementButton.addEventListener("click", () => {
  currentValue -= 1;
  counterValue.textContent = currentValue;
});

incrementButton.addEventListener("click", () => {
  currentValue += 1;
  counterValue.textContent = currentValue;
});
