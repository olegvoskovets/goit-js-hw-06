// ======METOD 1=======================
const elements = document.getElementById("categories");
const elemItem = elements.children;
console.log(`Number of categories: ${elemItem.length}`);

for (let i = 0; i < elemItem.length; i++) {
  const textCategory = elemItem[i].firstElementChild.textContent;
  console.log("Category: ", textCategory);
  // console.log(elemItem[i]);
  const ulList = elemItem[i].getElementsByTagName("li");
  console.log(`Elements ${ulList.length}`);
}

// ======METOD 2=======================

// const elements = document
//   .getElementById("categories")
//   .getElementsByClassName("item");

// //elementId.forEach((item) => console.log(item));
// console.log(`Number of categories: ${elements.length}`);

// for (const element of elements) {
//   //   const text = element.firstElementChild;
//   //   console.log(text.textContent);
//   const textH2 = element.querySelector("h2");
//   console.log("Category: ", textH2.textContent);
//   const ulList = element.getElementsByTagName("ul");

//   for (const itemLi of ulList) {
//     const liElement = itemLi.getElementsByTagName("li");
//     console.log(`Elements ${liElement.length}`);
//   }
// }
