const inputValue = document.getElementById("font-size-control");
const textControll = document.getElementById("text");
textControll.style.fontSize = `${textControll.min}px`;

const controleInput = (event) => {
  inputValue.textContent = event.currentTarget.value;
  textControll.style.fontSize = `${inputValue.textContent}px`;
};
inputValue.addEventListener("input", controleInput);
