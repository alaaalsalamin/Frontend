function convertToCelisios(fehrenhite) {
  let result = (5 / 9) * (fehrenhite - 32);
  return { d: result, fehrenhite: fehrenhite };
}
onload = function () {
  let result = convertToCelisios(100);
 document.getElementById('demo').innerHTML= result.d;
};


///////////////////////////////////////////////
let array = [
  [1, 2, 10],
  [3, 4, 20],
  [5, 6, 30],
  [7, 8, 40],
  [9, 10, 50],
];
function print_array(array) {
  for (let i = 0; i < array.length; i++) {
    for (let x = 0; x < array[i].length; x++) {
      console.log(array[i][x]);
    }
  }
}
print_array(array);


/////////////////////////////////////////////////
let array1 = [25, 63, 9, 97, 28, 91, 6, 75, 8, 19, 1, 46, 37, 5];
function Even_Or_Odd(array1) {
  let OddValues = [];
  let EvenValues = [];
  for (let i = 0; i < array1.length; i++) {
    if (array1[i] % 2 == 0) EvenValues.push(array1[i]);
    else OddValues.push(array1[i]);
  }
  // }
  // console.log('Even Values Are : ');
  // EvenValues.forEach(element => {
  //     console.log(element);
  // });
  console.log("Odd Values Are : ");

  Even_Or_Odd(array1);
}


//////////////////////////////////////////////////////
function print_pattern(range) {
  for (let i = 1; i <= range; i++) {
    let result = "";
    for (let x = 1; x <= i; x++) {
      result += x + " ";
    }
    console.log(result);
  }
}
print_pattern(9);


///////////////////////////////////////////////////////
function print_stars(numberOfStars) {
  for (let i = numberOfStars; i >= 1; i--) {
    let result = '';
    for (let x = 1; x <= i; x++) {
      result += '*' + '';
    }
    console.log(result);
  }
}
print_stars(9);
// *********
// ********
// ******
// *****
// ****
// ***
// **
// *



//////////////////////////////////////////////////////
let array_2 = [25, 64, 22, 922, 47, 47, 63, 63, 28, 22, 71, 4, 22];
function get_duplicate(array_2) {
  let duplicated_elements = [];
  for (let i = 0; i < array_2.length; i++) {
    if (
      array_2.indexOf(array_2[i]) != i &&
      duplicated_elements.indexOf(array_2[i]) == -1
    ) {
      duplicated_elements.push(array_2[i]);
    }
  }
  return duplicated_elements;
}
console.log(get_duplicate(array_2));
