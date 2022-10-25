function calc() {
  let firstNumber = document.getElementById("first-number");
  let secondNumber = document.getElementById("second-number");
  let result1 = document.getElementById("result");
  let add = document.getElementById("add");
  let sub = document.getElementById("sub");
  let mult = document.getElementById("mult");
  let div = document.getElementById("div");

  if (add.checked) {
    result1.innerHTML =
      parseInt(firstNumber.value) + parseInt(secondNumber.value);
  }
  if (sub.checked) {
    result1.innerHTML =
      parseInt(firstNumber.value) - parseInt(secondNumber.value);
  }
  if (mult.checked) {
    result1.innerHTML =
      parseInt(firstNumber.value) * parseInt(secondNumber.value);
  }
  if (div.checked) {
    result1.innerHTML =
      parseInt(firstNumber.value) / parseInt(secondNumber.value);
  }
}
