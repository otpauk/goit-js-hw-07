console.log("Task 1");

const categoriesItemsListRef = document.querySelectorAll(
  "ul#categories li.item"
);

const categoriesCounter = (categoriesList) =>
  console.log(`В списке ${categoriesList.length} категории.`);

const categoriesDetailsInformer = (categoriesList) =>
  categoriesList.forEach((element) =>
    console.log(
      `Категория: ${element.firstElementChild.textContent} \nКоличество элементов: ${element.lastElementChild.children.length}`
    )
  );

categoriesCounter(categoriesItemsListRef);

categoriesDetailsInformer(categoriesItemsListRef);

console.log("***");
