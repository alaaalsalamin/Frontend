// بدي أحول كل أول حرف من ال string  إلى uppercase  //
function UpperCase(string) {
  let array_1 = string.split(" ");
  let array_2 = [];
  for (let i = 0; i < array_1.length; i++) {
    array_2.push(array_1[i].charAt(0).toUpperCase() + array_1[i].slice(1));
  }
  return array_2.join(" ");
}

console.log(UpperCase("we start new java script course"));
///////////////////////////////////////////////////////////////

// بدي أطلع أطول كلمة بال string
function longest(string) {
  let array = string.split(" ");
  let longestString = array[0];
  for (let i = 0; i < array.length; i++) {
    if (array[i].length > longestString.length) {
      longestString = array[i];
    }
  }
  return longestString;
}
console.log(longest("we start new java script course"));
///////////////////////////////////////////////////////////////

// بدي أطلع القيم الموجبة لحال و السالبة لحال //
let array = [3, 54, -6, 74, 9, -44, -10, 7, 945, 47, -64, -70, 11];
function Positive_Negative(array) {
  let Positive_Values_Array = [];
  let Negative_Values_Array = [];
  let Largest_Positive;
  let Largest_Negative;
  array.forEach((element) => {
    if (element >= 0) {
      Positive_Values_Array.push(element);
    } else {
      Negative_Values_Array.push(element);
    }
  });
  Largest_Positive = Positive_Values_Array.length > 0 ? Positive_Values_Array[0] : null;
  Largest_Negative = Negative_Values_Array.length > 0 ? Negative_Values_Array[0] : null;
  for( let i=0 ; i< Positive_Values_Array.length ; i++ ){
    if( Largest_Positive < Positive_Values_Array[i] ){
        Largest_Positive = Positive_Values_Array[i];
    }
  }
  for( let i=0 ; i< Negative_Values_Array.length ; i++ ){
    if( Largest_Negative < Negative_Values_Array[i] ){
        Largest_Negative = Negative_Values_Array[i];
    }
  }
  return (Positive_Negative(array));
}

////////////////////////////////////////////////////////////////

// uniquechar //
let string = "new new new new new NEW";
function Unique_Char(string) {
  let unique = "";
  for (let i = 0; i <= string.length; i++) {
    if (unique.indexOf(string.charAt(i)) == -1) {
      unique += string[i];
    }
  }
  return unique;
}
console.log(Unique_Char(string));
////////////////////////////////////////////////////////////////

// string reverse أنا بكتبها //
let string_1 = "Hello";
function Reverse(string_1) {
  let Reverse_String = "";
  for (let i = string_1.length - 1; i >= 0; i--) {
    Reverse_String += string_1[i];
  }
  return Reverse_String;
}
// console.log(Reverse(string_1));
// string reverse method //
function reverse(string1) {
  return string1.split("").reverse().join();
}
 console.log(reverse(string_1));
////////////////////////////////////////////////////////////////



function isEndValueEqual(stringValue, target) {
  return stringValue[stringValue.length - 1] == target;
}
console.log(isEndValueEqual("fghjj sdfg dfghjkhgfd sdfg sdfghdf", "f"));
console.log(isEndValueEqual("fghjj sdfg dfghjkhgfd sdfg sdfghdf", "l"));
////////////////////////////////////////////////////////////////



//  مضروب العدد  //
function factorial(num) {
  let result = 1;
  for (let i = 2; i <= num; i++) {
    result *= i;
  }
  return result;
}
console.log(factorial(5));
