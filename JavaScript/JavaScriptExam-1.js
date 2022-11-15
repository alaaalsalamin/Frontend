let Users = [
  {
    userid: 1,
    firstname: "Krish ",
    lastname: "Lee",
    phonenumber: "123456 ",
    emailaddress: "krish.lee@learningcontainer.com ",
  },
  {
    userid: 2,
    firstname: "racks",
    lastname: "jacson",
    phonenumber: "123456",
    emailaddress: "racks.jacson@learningcontainer.com",
  },
  {
    userid: 3,
    firstname: "denial ",
    lastname: "roast",
    phonenumber: "21312312",
    emailaddress: "denial.roast@learningcontainer.com",
  },
  {
    userid: 4,
    firstname: "devid",
    lastname: "neo",
    phonenumber: "8975343",
    emailaddress: "devid.neo@learningcontainer.com",
  },
  {
    userid: 5,
    firstname: "jone",
    lastname: "mac",
    phonenumber: "3254667",
    emailaddress: "jone.mac@learningcontainer.com",
  },
];

/* Answer of Question 1 */
function GetUserIdByFirstName(Users) {
  for (let i = 0; i < Users.length; i++) {
    if (Users[i].firstname == "racks") {
      return Users[i].userid;
    }
  }
}
console.log(GetUserIdByFirstName(Users));

/* Answer of Question 2 */
function GetUserIdByLastName(Users) {
  for (let i = 0; i < Users.length; i++) {
    if (Users[i].lastname == "roast") {
      return Users[i].userid;
    }
  }
}
console.log(GetUserIdByLastName(Users));

/* Answer of Question 3 */
function GetUserIdByFullName(Users) {
  for (let i = 0; i < Users.length; i++) {
    if (Users[i].phonenumber == "8975343") {
      return Users[i].firstname + " " + Users[i].lastname;
    }
  }
}
console.log(GetUserIdByFullName(Users));

let Users2 = [
  {
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
    address: " Irbid ",
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

/* Answer of Question 4 */
function GetGraterThan25(string) {
  let array = [];
  for (let i = 0; i < string.length; i++) {
    if (string[i].age >= 25) {
      array.push(string[i]);
    }
  }
  return array;
}
console.log(GetGraterThan25(Users2));

/* Answer of Question 5 */
function GetLessThan25(string) {
  let array2 = [];
  for (let i = 0; i < string.length; i++) {
    if (Users2[i].age < 25) {
      array2.push(Users2[i]);
    }
  }
  return array2;
}
console.log(GetLessThan25(Users2));
console.log(Users2.map(element=> element.jobDescription.title));

/* Answer of Question 6 */
function GetSalaryAfterTax(Users2) {
  let tax = 0.7;
  let ListAfterTax = [];
  Users2.array.forEach(element => {
    let obj = {
      username:element.firstname + ' '+ element.lastName,
      salaryAfterTax: 
      element.jobDescription.salary - element.jobDescription.salary * tax,
      jobTitle: element.jobDescription.title,
    };
  });
}
console.log(GetSalaryAfterTax(Users2));


/* Answer of Question 7 */
function GetUsersByAddressName (users,address){

}
console.log(GetUsersByAddressName(Users2));

/* Answer of Question 8 */
function HaveMoreThan2Children(string) {
  let Array = [];
  for (let i = 0; i < string.length; i++) {
    if (string[i].childreen.length > 2) {
      Array.push(string[i]);
    }
  }
  return Array;
}
console.log(HaveMoreThan2Children(Users2));

/* Answer of Question 9 */
function AddToSalary(s) {
  let NewSalaries = [];
  let ValueToAdd = 0.05;
  let result = 0;
  for (let i = 0; i < Users2.length; i++) {
    if (Users2[i].jobDescription.salary < 1500) {
      result = ValueToAdd + Users2[i].jobDescription.salary;
      NewSalaries.push(result);
    }
  }
  return NewSalaries;
}
Users2 = AddToSalary(Users2);

/* Answer of Question 10 */
console.log("My Name Is: Alaa Alsalamin ");
console.log(Users2.map(element=> element.firstname));
