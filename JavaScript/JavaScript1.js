// var number = 7;
// var isLoaded = true;
// var name = "Alaa";
// const PI = 3.14;
// let array = [1, 2, 3, 4, 5];

// document.write("Hello World");
// console.log("hello iam in my console");
// let Number = 10;
// console.log(Number);
// window.alert("Hello Alert");
// document.write("helow");
// document.write("helow");
// document.write("helow");
// document.write("helow");
// document.write("helow");

// onload = function () {
//   document.querySelector("h1").style.color = "red";
//   document.getElementById("p").style.fontSize="30px";
//   console.log(document.getElementsByClassName("p"));

// };

onload = function () {
  document.getElementsByClassName("name")[0].style.backgroundColor =
    "lightgray";
  document.getElementById("hello").style.backgroundColor = "pink";
  document.querySelector("p").style.backgroundColor = "lightblue";
  document.getElementsByClassName("name")[1].style.backgroundColor = "gray";
  console.log(document.getElementsByClassName("name"));
};

let x = 10;
let y = 20;
let result = x * y;
console.log(result);

let x1 = 10;
let y1 = 20;
let result1 = x - y;
console.log(result1);

let a = 5;
a++;
console.log(a);
a--;
console.log(a);

let v = Math.abs(-20);
console.log(v);

let array = [1, 100, 15, 16, 150];
let n = Math.max(...array);
console.log(n);

function calc() {
  let firstNumber = document.getElementById("first-number");
  let secondNumber = document.getElementById("second-number");
  let result1 = document.getElementById("result");
  let add = document.getElementById("add");
  let sub = document.getElementById("sub");
  let mult = document.getElementById("mult");
  let div = document.getElementById("div");



  if(add.checked){
    result1.innerHTML = parseInt(firstNumber.value) + parseInt(secondNumber.value);
  }
  if(sub.checked){
    result1.innerHTML = parseInt(firstNumber.value) - parseInt(secondNumber.value);
  }
  if(mult.checked){
    result1.innerHTML = parseInt(firstNumber.value) * parseInt(secondNumber.value);
  }
  if(div.checked){
    result1.innerHTML = parseInt(firstNumber.value) / parseInt(secondNumber.value);
  }

}
