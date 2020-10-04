console.log("Task 5");

const formInputRef = document.querySelector("input#name-input");
const formOutputRef = document.querySelector("span#name-output");

const onInputChange = (event) => {
  formOutputRef.textContent =
    event.currentTarget.value.length > 0
      ? event.currentTarget.value
      : "незнакомец";
};

formInputRef.addEventListener("input", onInputChange);

console.log("***");
