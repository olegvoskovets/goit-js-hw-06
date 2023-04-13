const inputNamber = document.getElementsByTagName("input");
const createBtn = document.querySelector("button[data-create]");
const destroyBtn = document.querySelector("button[data-destroy]");

const boxes = document.querySelector("#boxes");

let countDiv = 0;

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

const weBrawDiv = (w_h) => {
  const myDiv = document.createElement("div");
  myDiv.classList.add("item-task10");
  myDiv.style.width = `${w_h}px`;
  myDiv.style.height = `${w_h}px`;
  myDiv.style.backgroundColor = getRandomHexColor();

  return myDiv;
};

const createBoxes = (amount) => {
  let addDiv = [];

  if (amount) {
    let widthHeight = 30;

    for (let i = 0; i < amount; i += 1) {
      addDiv.push(weBrawDiv(widthHeight));
      widthHeight += 10;
    }

    return addDiv;
  }
  return null;
};

const changeInput = (event) => {
  countDiv = Number(event.currentTarget.value);
};
const addDivInt = () => {
  const divAddBoxes = createBoxes(countDiv);
  if (divAddBoxes) {
    boxes.append(...divAddBoxes);
  }
};

const destroyDivInt = () => {
  const divRemove = document.querySelectorAll(".item-task10");
  // divRemove.map((item) => item.remove());
  for (const div of divRemove) {
    div.remove();
  }
  countDiv = "";
  inputNamber[0].value = "";
};

createBtn.addEventListener("click", addDivInt);
inputNamber[0].addEventListener("input", changeInput);
destroyBtn.addEventListener("click", destroyDivInt);
