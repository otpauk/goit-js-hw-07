console.log("Task 3");

const images = [
  {
    url:
      "https://images.pexels.com/photos/140134/pexels-photo-140134.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
    alt: "White and Black Long Fur Cat",
  },
  {
    url:
      "https://images.pexels.com/photos/213399/pexels-photo-213399.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
    alt: "Orange and White Koi Fish Near Yellow Koi Fish",
  },
  {
    url:
      "https://images.pexels.com/photos/219943/pexels-photo-219943.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
    alt: "Group of Horses Running",
  },
];

const galleryListRef = document.querySelector("ul#gallery");

const makeItemInImageGalary = ({ url, alt }) => {
  return `<li class="gallery__item"><img class="gallery__image" src="${url}" alt="${alt}"></li>`;
};

const elements = images.map(makeItemInImageGalary).join("");

galleryListRef.insertAdjacentHTML("afterbegin", elements);

console.log("All elements in ul#gallery created!");

console.log("***");
