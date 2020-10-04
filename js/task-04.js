console.log("Task 4");

const counter = document.querySelector("span#value");
const incrementBtnRef = document.querySelector('[data-action="increment"]');
const decrementBtnRef = document.querySelector('[data-action="decrement"]');

let counterValue = Number(counter.textContent);

const increment = () => {
  counterValue += 1;
  counter.textContent = counterValue;
};

const decrement = () => {
  counterValue -= 1;
  counter.textContent = counterValue;
};

incrementBtnRef.addEventListener("click", increment);

decrementBtnRef.addEventListener("click", decrement);

console.log("***");
