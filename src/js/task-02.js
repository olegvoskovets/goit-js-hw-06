const ingredients = [
  "Potatoes",
  "Mushrooms",
  "Garlic",
  "Tomatos",
  "Herbs",
  "Condiments",
];
const element = document.getElementById("ingredients");
const elArray = [];
const addLi = (ingredients) => {
  for (const ingredient of ingredients) {
    const newLi = document.createElement("li");
    newLi.classList.add("item");
    newLi.textContent = ingredient;
    elArray.push(newLi);
  }
};

addLi(ingredients);
element.append(...elArray);
