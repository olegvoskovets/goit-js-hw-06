const body = document.body;
const changeColorBtn = document.querySelector(".change-color");
const colorText = document.querySelector(".color");
// console.log(body);
const handkeClickColorBody = (event) => {
  // event.preventDefault();
  const colorBody = getRandomHexColor();
  colorText.textContent = colorBody;
  body.style.backgroundColor = `${colorBody}`;
  // console.log(colorBody);
};

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

changeColorBtn.addEventListener("click", handkeClickColorBody);
