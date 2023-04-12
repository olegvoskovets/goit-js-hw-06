const inputValue = document.getElementById("validation-input");
const countValue = inputValue.dataset.length;

let getValueInput = 0;

let numberValue = Number(countValue);

const addInputValue = (event) => {
  getValueInput = event.currentTarget.value.length;

  if (getValueInput === numberValue) {
    inputValue.classList.remove("invalid");
    inputValue.classList.add("valid");
  } else {
    inputValue.classList.remove("valid");
    inputValue.classList.add("invalid");
  }
};

inputValue.addEventListener("blur", addInputValue);
