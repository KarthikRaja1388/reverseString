const userInput = document.querySelector(".user-input");
const btnReverse = document.querySelector(".btn-reverse");
const display = document.querySelector(".display");

function reverseString() {
  let userInputValue = userInput.value;
  let reversedArray = userInputValue.split("").reverse();
  let reversedString = reversedArray.join("");
  display.textContent = "Reversed String is: " + reversedString;
}

btnReverse.addEventListener("click", () => {
  if (userInput.value !== "") {
    setTimeout(reverseString, 2000);
  } else {
    display.textContent = "Please enter a valid String";
  }
});
