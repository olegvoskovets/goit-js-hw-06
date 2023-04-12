const decrementBtn = document.querySelector('[data-action="decrement"]');
const incrementBtn = document.querySelector('[data-action="increment"]');
const value = document.querySelector("#value");

let counterValue = 0;

const validValue = () => {
  value.textContent = counterValue;
};

const addIncrementBtn = () => {
  counterValue += 1;
  validValue();
};
const addDecrementBtn = () => {
  if (counterValue !== 0) {
    counterValue -= 1;
    validValue();
  }
};

validValue();

decrementBtn.addEventListener("click", addDecrementBtn);
incrementBtn.addEventListener("click", addIncrementBtn);
