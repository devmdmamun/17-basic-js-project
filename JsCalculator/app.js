let input = document.getElementById("input"),
  number = document.querySelectorAll(".numbers div"),
  operators = document.querySelectorAll(".operators div"),
  equal = document.getElementById("equal"),
  clear = document.getElementById("clear"),
  displayResult = false;

for (let i = 0; i < number.length; i++) {
  number[i].addEventListener("click", (e) => {
    let inputValue = input.innerHTML;
    let lastChar = inputValue[inputValue.length - 1];
    if (!displayResult) {
      input.innerHTML += e.target.innerHTML;
    } else if (
      (displayResult && lastChar === "+") ||
      lastChar === "-" ||
      lastChar === "×" ||
      lastChar === "÷"
    ) {
      displayResult = false;
      input.innerHTML += e.target.innerHTML;
    } else {
      displayResult = false;
      input.innerHTML = "";
      input.innerHTML += e.target.innerHTML;
    }
  });
}
for (let i = 0; i < operators.length; i++) {
  operators[i].addEventListener("click", (e) => {
    let inputValue = input.innerHTML;
    let lastChar = inputValue[inputValue.length - 1];
    if (
      lastChar === "+" ||
      lastChar === "-" ||
      lastChar === "×" ||
      lastChar === "÷"
    ) {
      let newInputValue =
        inputValue.substring(0, inputValue.length - 1) + e.target.innerHTML;
      input.innerHTML = newInputValue;
    } else {
      input.innerHTML += e.target.innerHTML;
    }
  });
}
equal.addEventListener("click", () => {
  let inputValue = input.innerHTML;
  let num = inputValue.split(/\+|\-|\×|\÷/g);
  let operator = inputValue.replace(/[0-9]|\./g, "").split("");
  let divide = operator.indexOf("÷");
  while (divide != -1) {
    num.splice(divide, 2, num[divide] / num[divide + 1]);
    operator.splice(divide, 1);
    divide = operator.indexOf("÷");
  }
  let multiply = operator.indexOf("×");
  while (multiply != -1) {
    num.splice(multiply, 2, num[multiply] * num[multiply + 1]);
    operator.splice(multiply, 1);
    multiply = operator.indexOf("×");
  }
  let subtract = operator.indexOf("-");
  while (subtract != -1) {
    num.splice(subtract, 2, num[subtract] - num[subtract + 1]);
    operator.splice(subtract, 1);
    subtract = operator.indexOf("-");
  }
  let add = operator.indexOf("+");
  while (add != -1) {
    num.splice(add, 2, parseFloat(num[add]) + parseFloat(num[add + 1]));
    operator.splice(add, 1);
    add = operator.indexOf("+");
  }
  input.innerHTML = num[0];
  displayResult = true;
});
clear.addEventListener("click", () => {
  input.innerHTML = "";
});
