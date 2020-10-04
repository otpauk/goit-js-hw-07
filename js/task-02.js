console.log("Task 2");

const ingredients = [
  "Картошка",
  "Грибы",
  "Чеснок",
  "Помидоры",
  "Зелень",
  "Приправы",
];

const ingredientsListRef = document.querySelector("ul#ingredients");

const makeIngredientsList = (ingredients) => {
  const ingredientsList = [];

  ingredients.forEach((ingredient) => {
    const ingredientRef = document.createElement("li");

    ingredientRef.classList.add("item");
    ingredientRef.textContent = ingredient;

    ingredientsList.push(ingredientRef);
  });

  return ingredientsList;
};

const ingredientsElements = makeIngredientsList(ingredients);

ingredientsListRef.append(...ingredientsElements);

console.log("All elements in ul#ingredients created!");

console.log("***");
