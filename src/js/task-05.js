const inputValue = document.querySelector("#name-input");
const spanValue = document.querySelector("#name-output");

const addInput = (event) => {
  spanValue.textContent = event?.currentTarget.value;
  if (spanValue.textContent === "") {
    spanValue.textContent = "Anonymous";
  }
};
addInput();
inputValue.addEventListener("input", addInput);
