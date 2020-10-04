console.log("Task 8");

const boxesContainerRef = document.querySelector("div#boxes");
const boxesCounterInputRef = document.querySelector("div#controls input");
const boxesCreatorBtnRef = document.querySelector('[data-action="render"]');
const boxesDestroyerBtnRef = document.querySelector('[data-action="destroy"]');

const createBoxes = () => {
  const newBox = [];

  let boxSize = 30;

  const amount = boxesCounterInputRef.value;

  const randomBetween = (min, max) =>
    min + Math.floor(Math.random() * (max - min + 1));

  for (let i = 0; i < amount; i += 1) {
    newBox[i] = document.createElement("div");

    newBox[i].style.height = boxSize + "px";
    newBox[i].style.width = boxSize + "px";

    newBox[i].style.backgroundColor = `rgb(${randomBetween(
      0,
      255
    )},${randomBetween(0, 255)},${randomBetween(0, 255)})`;

    boxSize += 10;
  }

  boxesContainerRef.append(...newBox);
};

const destroyBoxes = () => {
  const boxesContainerChildrenRef = document.querySelectorAll("div#boxes div");

  boxesContainerChildrenRef.forEach((element) => {
    element.remove();
  });

  boxesCounterInputRef.value = "";
};

boxesCreatorBtnRef.addEventListener("click", createBoxes);

boxesDestroyerBtnRef.addEventListener("click", destroyBoxes);

console.log("***");
