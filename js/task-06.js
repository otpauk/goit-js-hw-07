console.log("Task 6");

const inputValidationRef = document.querySelector("#validation-input");

const onInputChange = (event) => {
  if (
    event.currentTarget.value.length ===
    Number(inputValidationRef.getAttribute("data-length"))
  ) {
    inputValidationRef.classList.add("valid");
    inputValidationRef.classList.remove("invalid");
  } else if (event.currentTarget.value.length === 0) {
    inputValidationRef.classList.remove("valid");
    inputValidationRef.classList.remove("invalid");
  } else {
    inputValidationRef.classList.add("invalid");
    inputValidationRef.classList.remove("valid");
  }
};

inputValidationRef.addEventListener("input", onInputChange);

console.log("***");
