const ingredients = [
  "Potatoes",
  "Mushrooms",
  "Garlic",
  "Tomatos",
  "Herbs",
  "Condiments",
];

const ulEl = document.getElementById("ingredients");

for (const ingredient of ingredients) {
  const liEl = document.createElement("li");
  liEl.textContent = ingredient;
  liEl.classList.add("item");
  ulEl.appendChild(liEl);
}

// const addItemForIngredients = (ingredients) => {
//   return ingredients.map((ingredient) => {
//     const itemEl = document.createElement("li");

//     itemEl.classList.add("item");
//     itemEl.textContent = ingredient;

//     return itemEl;
//   });
// };

// const ingredientsEl = document.querySelector("#ingredients");

// const arrItems = addItemForIngredients(ingredients);
// ingredientsEl.append(...arrItems);
