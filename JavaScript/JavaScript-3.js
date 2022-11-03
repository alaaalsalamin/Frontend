let names = [
  "alaa",
  "sara",
  "hussam",
  true,
  [1, 2, 3, [4, 5, 6]],
  { firstName: "hussam" },
  null,
  undefined,
];
console.log(names[4]);
console.log(names[0]);
console.log(names[2]);
console.log(names[6]);
names.push("dana");
console.log(names);
names.unshift("sara");
console.log(names);
names.shift();
names.pop();
console.log(names);
names.splice(0, 1, "ezz", "sana");
console.log(names);
names.slice(0, 1);
console.log(names);
console.log(names.indexOf("sana)"));
console.log(names.indexOf("sana)"));


let user = {
  // Property //
  firstName: "Alaa",
  lastName: "Al.salamin",
  age: 26,
  skills: ["html", "css", "JS", "php"],
  active: true,
  phoneNumber: {
    number: "0770512500",
    cc: 692,
  },
  address: {
    city: "amman",
    zipCode: 2565,
  },
  job: undefined,
  study: null,
  // Methods //
  isActive: function () {
    if (user.active) return "Hello User";
    else return"Sorry You Are Not Active";
  },
  getAge:function () {
if (user.age >= 18) { return "Available"}
else { return 'Un avalable'}}
  };

console.log(user.firstName);
console.log(user.lastName);
console.log(user.age);
console.log(user.phoneNumber.number);
console.log(user.phoneNumber.cc);
console.log(user.skills[1]);
console.log(user.skills[3]);
console.log(user.isActive());
console.log(user.getAge());

let Names1 = ["ezz", "sana", "zaid", "hussam", "sana"];
if (Names1.length < 10) console.log("Array Length is Less Than 10");
else console.log("Array Length is More Than 10");

if (Names1.length < 10 && length > 4) {
  console.log("Array Length is Less Than 10");
} else {
  console.log("Array Length is More Than 10");
}

if (Names1.length < 10 || length > 4) {
  console.log("Array Length is Less Than 10");
} else {
  console.log("Array Length is More Than 10");
}

let isActive = true;
if (isActive) {
}

let Name2 = {};
if (Name2) console.log("True");
else console.log("False");

let Name3 = {};
let boolean = true;
if (Name3 || boolean) console.log("True");
else console.log("False");

let Name4 = "";
if (Name4) console.log("True");
else console.log("False");

let Name5 = " ";
if (Name5) console.log("True");
else console.log("False");

let x = -2;
let y = 9;
let z = 12;
if (y >= 10) console.log("y >=10");
else if (x > -1) console.log("x > -1");
else if (z > 20) console.log("z > 20");
else console.log("! y>=10 && x>=1");

let a = 4;
switch (a) {
  case 1:
    console.log(a);
    break;
  case 2:
    console.log(a);
    break;
  default:
    console.log(a);
}

console.log();
