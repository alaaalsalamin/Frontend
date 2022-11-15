function Factorial(number1, number2) {
  let result = 1;
  let result2 = 1;
  for (let counter = 2; counter <= number1; counter++) {
    result *= number1;
  }
  return result;
  for (let counter2 = 2; counter2 <= number2; counter2++) {
    result2 *= number2;
  }
  return result2;
}
console.log(Factorial(3, 4));

let Users = [{
    firstName: "Hussam",
    lastName: "Bawwab",
    age: 28,
    address: "Irbid",
    phoneNumber: "7981323312",
    jobDescription: {
      title: "Frontend",
      salary: 132123,
    },
    childreen: [
      {
        firstName: "Samer",
        lastName: "Bawwab",
        age: 3,
      },
      {
        firstName: "Bilal",
        lastName: "Bawwab",
        age: 6,
      },
      {
        firstName: "Mariam",
        lastName: "Bawwab",
        age: 8,
      },
    ],
  },
  {
    firstName: "Sara",
    lastName: "Lobani",
    age: 22,
    address: "Amman",
    phoneNumber: "7213454654",
    jobDescription: {
      title: "Frontend",
      salary: 2133,
    },
    childreen: [
      {
        firstName: "Ail",
        lastName: "Lobani",
        age: 13,
      },
      {
        firstName: "Lobna",
        lastName: "Lobani",
        age: 16,
      },
      {
        firstName: "Zaid",
        lastName: "Lobani",
        age: 1,
      },
    ],
  },
  {
    firstName: "Ezz",
    lastName: "Ashore",
    age: 25,
    address: "Amman",
    phoneNumber: "79823216",
    jobDescription: {
      title: "Frontend",
      salary: 2133,
    },
    childreen: [
      {
        firstName: "Rami",
        lastName: "Lobani",
        age: 20,
      },
      {
        firstName: "Omar",
        lastName: "Lobani",
        age: 9,
      },
    ],
  },
  {
    firstName: "Mohammad",
    lastName: "Damra",
    age: 30,
    address: "Amman",
    phoneNumber: "79898798465",
    jobDescription: {
      title: "Frontend",
      salary: 1133,
    },
    childreen: [
      {
        firstName: "Laith",
        lastName: "Damra",
        age: 1,
      },
      {
        firstName: "Ahmad",
        lastName: "Damra",
        age: 8,
      },
    ],
  },
];

function Salary_After_Tax (){
  for ( let i=0 ; i<Users.length ; i++ ){
  let NewSalary = (Users[i].jobDescription[i].salary[i]);
  NewSalary -= 7.5% ;

  } return NewSalary;
}
console.log(Users[1].firstName +' '+ Users[1].lastName);
console.log(Users[0]);
console.log(Users);
console.log(Users.length);
console.log(Users.firstName +' '+ Users.lastName +' '+ 
Users.age +' '+ Salary_After_Tax());


