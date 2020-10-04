console.log("Task 7");

const fontSizeControlRef = document.querySelector("input#font-size-control");
const textRef = document.querySelector("span#text");

const onInputChange = (event) => {
  textRef.style.fontSize = event.currentTarget.value - 34 + "px";
};

fontSizeControlRef.addEventListener("input", onInputChange);

console.log("***");
