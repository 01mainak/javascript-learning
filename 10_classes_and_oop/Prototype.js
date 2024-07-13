// let myName = "mainak     "
// let mychannel = "chai     "

// console.log(myName.trueLength);

let myHeros = ["thor", "spiderman"];

let heroPower = {
  thor: "hammer",
  spiderman: "sling",

  getSpiderPower: function () {
    console.log(`Spidy power is ${this.spiderman}`);
  },
};

// for all objects, everything is object
// so it will be available for all arrays, functions, strings
Object.prototype.mainak = function () {
  console.log(`Mainak is present in all objects`);
};

Array.prototype.heyMainak = function () {
  console.log(`Mainak says hello`);
};

// heroPower.mainak();
// myHeros.mainak();
// myHeros.heyMainak();
// heroPower.heyMainak(); // ERROR

// inheritance

const User = {
  name: "mainak",
  email: "chai@google.com",
};

const Teacher = {
  makeVideo: true,
};

const TeachingSupport = {
  isAvailable: false,
};

const TASupport = {
  makeAssignment: "JS assignment",
  fullTime: true,
  __proto__: TeachingSupport, // borrowing the properties of TeachingSupport
};

Teacher.__proto__ = User; // Teacher having the properties of User

// modern syntax
Object.setPrototypeOf(TeachingSupport, Teacher);

let anotherUsername = "     ChaiAurCode     ";

String.prototype.trueLength = function () {
  console.log(`${this}`);
  console.log(`True length is: ${this.trim().length}`);
};

anotherUsername.trueLength();
"   mainak".trueLength();
"  ice Tea  ".trueLength();
