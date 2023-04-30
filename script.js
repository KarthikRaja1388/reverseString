const userInput = document.querySelector(".user-input");
const btnReverse = document.querySelector(".btn-reverse");
const display = document.querySelector(".display");

function reverseString() {
  let userInputValue = userInput.value;
  let reversedArray = userInputValue.split("").reverse();
  let reversedString = reversedArray.join("");
  return reversedString;
}

console.log(reverseString());

btnReverse.addEventListener("click", () => {
  if (reverseString() !== "") {
    let count = 2;
    display.textContent = count;

    let intervalId = setInterval(() => {
      display.textContent = count;
      count--;
      if (count > 0) {
        display.textContent = count;
      } else {
        clearInterval(intervalId);
        display.textContent = "Reversed String is : " + reverseString();
      }
    }, 1000);
  } else {
    display.textContent = "Please enter a valid String";
  }
});
