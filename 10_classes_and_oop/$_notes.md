# javascript and classes

- JS is a `prototype-based-language`

## Does JS really have classes ?

Yes, JavaScript does have classes.

Classes were introduced in ECMAScript 2015 (also known as `ES6`) as a way to provide a clearer and more familiar syntax for creating objects and dealing with inheritance in JavaScript.

## OOP

Object-Oriented Programming is a programming style based on classes and objects. These group data (properties) and methods (actions) inside a box.

- It is just a programming paradigm
- A programming paradigm is a method or style of programming that defines a set of principles, techniques, and patterns for structuring code to solve problems on a computer.

## 4 pillars of OOP

- Abstraction
  - Definition: Abstraction involves hiding complex implementation details and showing only the essential features of an object.
  - Example: The `fetch()` function in JavaScript abstracts the details of making a network request, allowing the user to work with it at a higher level without worrying about the underlying complexity.
- Encapsulation : like a wrapper
  - Definition: Encapsulation is the practice of wrapping the data (variables) and the methods (functions) that operate on the data into a single unit or class. It also restricts direct access to some of the object's components.
  - Example: In a class, private variables and methods can only be accessed and modified through public methods (getters and setters), protecting the integrity of the data.
- Inheritance
  - Definition: Inheritance allows a new class (subclass) to inherit properties and methods from an existing class (superclass). This promotes code reuse.
  - Example: A `Car` class could inherit from a `Vehicle` class, acquiring its properties and methods while also adding specific features unique to cars.
- Polymorphism : function override
  - Definition: Polymorphism allows objects of different classes to be treated as objects of a common superclass. It enables a single interface to represent different underlying forms (data types).
  - Example: Function overriding is a form of polymorphism where a subclass can provide a specific implementation of a method that is already defined in its superclass. For instance, a `Dog` class might override a `makeSound()` method from an `Animal` class to provide a barking sound instead of a generic animal sound.

## Object

- collection of properties and methods
- example : toLowerCase, promises, new, array[ ], function( )

### In javascript everything is OBJECT

Be it array , string or function all refers to object and object initially refers to null

```javascript
function multipleBy5(num) {
  return num * 5;
}

multipleBy5.power = 2;

console.log(multipleBy5(5));
console.log(multipleBy5.power);
console.log(multipleBy5.prototype); // properties of multipleBy5()
```

```
25
2
{}
```

## Why use OOP ?

OOP was developed to make code more flexible and easier to maintain. JavaScript is prototype-based procedural language, which means it supports both functional and object-oriented programming.

## Parts of OOP

### Object literal

example:

```javascript
const user = {
  username: "mainak",
  loginCount: 8,
  signedIn: true,

  getUserDetails: function () {
    console.log("Got user details from database");
  },
};
console.log(user.username);
console.log(user.getUserDetails());
```

```
mainak
Got user details from database
undefined
```

### this

```javascript
const user = {
  username: "mainak",
  loginCount: 8,
  signedIn: true,

  getUserDetails: function () {
    console.log(`Username: ${username}`);
  },
};
user.getUserDetails();
```

```
ERROR : username not defined
```

this keyword gives the reference of the current context

```javascript
const user = {
  username: "mainak",
  loginCount: 8,
  signedIn: true,

  getUserDetails: function () {
    console.log(`Username: ${this.username}`);
    console.log(this);
  },
};
user.getUserDetails();
console.log(this); // {} GLOBAL CONTEXT OF NODE
```

```
Username: mainak
{
  username: 'mainak',
  loginCount: 8,
  signedIn: true,
  getUserDetails: [Function: getUserDetails]
}
{}
```

- Constructor function
- Prototypes
- Classes
- Instances (new, this)

```javascript
function User(username, loginCount, isLoggedIn) {
  // here this.username is a variable
  this.username = username;
  this.loginCount = loginCount;
  this.isLoggedIn = isLoggedIn;

  this.greeting = function () {
    console.log(`Welcome ${this.username}`);
  };

  // returns the current context User
  return this; // even if we don't write, it is by default
}

// 'new' is a contructor function, every time it gives a new instance
const userOne = new User("MAINAK", 12, true);
const userTwo = new User("ChaiAurCode", 11, false);
// if we don't use 'new' keyword then userTwo will override all the values of userOne
console.log(userOne);
console.log(userTwo);
console.log(userOne.constructor);
console.log(userTwo.constructor);
```

```
User {
  username: 'MAINAK',
  loginCount: 12,
  isLoggedIn: true,
  greeting: [Function (anonymous)]
}
User {
  username: 'ChaiAurCode',
  loginCount: 11,
  isLoggedIn: false,
  greeting: [Function (anonymous)]
}
[Function: User]
[Function: User]
```

### new

Here's what happens behind the scenes when the `new` keyword is used:

- A new object is created: The new keyword initiates the creation of a new JavaScript object.

- A prototype is linked: The newly created object gets linked to the prototype property of the constructor function. This means that it has access to properties and methods defined on the constructor's prototype.

- The constructor is called: The constructor function is called with the specified arguments and this is bound to the newly created object. If no explicit return value is specified from the constructor, JavaScript assumes this, the newly created object, to be the intended return value.

- The new object is returned: After the constructor function has been called, if it doesn't return a non-primitive value (object, array, function, etc.), the newly created object is returned.

```javascript
function createUser(username, score) {
  this.username = username;
  this.score = score;
}

// creating a property
createUser.prototype.increment = function () {
  this.score++;
};
createUser.prototype.printMe = function () {
  console.log(`price is ${this.score}`);
};

const chai = new createUser("chai", 25);
const tea = new createUser("tea", 250);
tea.increment();

chai.printMe();
tea.printMe();
```

without `new` the property `increment()` and `printMe()` would give an error as after the properties being created `new` tells the instance that additional properties are created

```
price is 25
price is 251
```

## Prototype

### Object Prototype

```javascript
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

heroPower.mainak();
myHeros.mainak();
myHeros.heyMainak();
// heroPower.heyMainak(); // ERROR
```

```
Mainak is present in all objects
Mainak is present in all objects
Mainak says hello
```

### Inheritance

Prototype inheritance

```javascript
const User = {
  name: "chai",
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
  __proto__: TeachingSupport,
};

Teacher.__proto__ = User;
```

#### modern syntax

- `Object.setPrototypeOf ( )`

```javascript
const User = {
  name: "chai",
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
};

Object.setPrototypeOf(TASupport, TeachingSupport);
Object.setPrototypeOf(Teacher, User);
```

### Creating a String method `trueLength()`

```javascript
let anotherUsername = "     ChaiAurCode     ";

String.prototype.trueLength = function () {
  console.log(`${this}`);
  console.log(`True length is: ${this.trim().length}`);
};

anotherUsername.trueLength();
"   mainak".trueLength();
"  ice Tea  ".trueLength();
```

```
     ChaiAurCode
True length is: 11
   mainak
True length is: 6
  ice Tea
True length is: 7
```

## call

here `this` in `SetUsername` refers to the **global excution context**

```javascript
function SetUsername(username) {
  this.username = username;
  console.log(this); // global
  console.log("called");
}

function createUser(username, email, password) {
  SetUsername(username);

  this.email = email;
  this.password = password;
}

const chai = new createUser("chai", "chai@fb.com", "123");
console.log(chai); // has only email and password
```

```
<ref *1> Object [global] {
  global: [Circular *1],
  queueMicrotask: [Function: queueMicrotask],
  clearImmediate: [Function: clearImmediate],
  setImmediate: [Function: setImmediate] {
    [Symbol(nodejs.util.promisify.custom)]: [Getter]
  },
  structuredClone: [Getter/Setter],
  clearInterval: [Function: clearInterval],
  clearTimeout: [Function: clearTimeout],
  setInterval: [Function: setInterval],
  setTimeout: [Function: setTimeout] {
    [Symbol(nodejs.util.promisify.custom)]: [Getter]
  },
  atob: [Getter/Setter],
  btoa: [Getter/Setter],
  performance: [Getter/Setter],
  fetch: [AsyncFunction: fetch],
  username: 'chai'
}
called
createUser { email: 'chai@fb.com', password: '123' }
```

to avoid that we use `call()`

```javascript
function SetUsername(username) {
  console.log(this); // createUser <= which is now empty as mail and password in not in the exectution stack till now
  this.username = username;
  console.log(this); // createUser <= which has only the username now which is just sent to the execution stack in the previous line
  console.log("called");
}
function SetPassword(password) {
  console.log(this); // createUser <= now it has username and email
  this.password = password;
}
function createUser(username, email, password) {
  SetUsername.call(this, username); // giving the reference in `this`

  this.email = email;
  SetPassword.call(this, password);
}

const chai = new createUser("chai", "chai@fb.com", "123");
console.log(chai); // has username , email and password
```

```
createUser {}
createUser { username: 'chai' }
called
createUser { username: 'chai', email: 'chai@fb.com' }
createUser { username: 'chai', email: 'chai@fb.com', password: '123' }
```

## bind

here `bind` binds the `handleClick()` with `this`

```html
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>React</title>
  </head>
  <body>
    <button>Button Clicked</button>
  </body>
  <script>
    class React {
      constructor() {
        this.library = "React";
        this.server = "https://localhost:3000";

        //requirement => get the reference of the button and something like "button clicked"
        document
          .querySelector("button")
          .addEventListener("click", this.handleClick.bind(this));
      }
      handleClick() {
        console.log("button clicked");
        console.log(this);
        console.log(this.server);
      }
    }

    const app = new React();
  </script>
</html>
```

[bind_output](bind_image.png)

## classes

- `contructor` gets called whenever an `object` is declared for the `class` using the `new` keyword

```javascript
class User {
  constructor(username, email, password) {
    this.username = username;
    this.email = email;
    this.password = password;
  }

  encryptPassword() {
    this.password = `xyz${this.password}abc`;
    return this.password;
  }
  changeUsername() {
    this.username = `${this.username.toUpperCase()}`;
    return this.username;
  }
}

const chai = new User("chai", "chai@gmail.com", "123");

console.log(chai);
console.log(chai.encryptPassword());
console.log(chai.changeUsername());
console.log(chai);
```

```
User {
  username: 'chai',
  email: 'chai@gmail.com',
  password: '123'
}
xyz123abc
CHAI
User {
  username: 'CHAI',
  email: 'chai@gmail.com',
  password: 'xyz123abc'
}
```

same as above but using function and prototype as done before ES6

```javascript
function User_copy(username, email, password) {
  this.username = username;
  this.email = email;
  this.password = password;
}

User_copy.prototype.encryptPassword = function () {
  this.password = `xyz${this.password}abc`;
  return this.password;
};
User_copy.prototype.changeUsername = function () {
  this.username = `${this.username.toUpperCase()}`;
  return this.username;
};

const tea = new User_copy("tea", "tea@gmail.com", "123");

console.log(tea);
console.log(tea.encryptPassword());
console.log(tea.changeUsername());
console.log(tea);
```

```
User_copy {
  username: 'tea',
  email: 'tea@gmail.com',
  password: '123'
}
xyz123abc
TEA
User_copy {
  username: 'TEA',
  email: 'tea@gmail.com',
  password: 'xyz123abc'
}
```

### inheritance

```javascript
class User {
  constructor(username) {
    this.username = username;
  }

  logMe() {
    console.log(`USERNAME is ${this.username}`);
  }
}

// Teacher inheriting User
class Teacher extends User {
  constructor(username, email, password) {
    super(username); // like User.call(this,username)
    this.email = email;
    this.password = password;
  }

  addCourse() {
    console.log(`A new course was added by ${this.username}`);
  }
}

const chai = new Teacher("chai", "chai@teacher.com", "123");
chai.logMe();

const tea = new User("tea");
tea.logMe();

console.log(chai instanceof User);
console.log(chai instanceof Teacher);
console.log(tea instanceof User);
console.log(tea instanceof Teacher);
```

```
USERNAME is chai
USERNAME is tea
true
true
true
false
```

### `static` keyword

without `static` every object of that class will get the `createId()` access

```javascript
class User {
  constructor(username) {
    this.username = username;
  }

  logMe() {
    console.log(`Username: ${this.username}`);
  }

  createId() {
    console.log(`${this.username}130821`);
  }
}

const mainak = new User("mainak");
mainak.createId();
```

```
mainak130821
```

using `static` we can restrict the access of `createId()`

```javascript
class User {
  constructor(username) {
    this.username = username;
  }

  logMe() {
    console.log(`Username: ${this.username}`);
  }

  static createId() {
    console.log(`${this.username}130821`);
  }
}

const mainak = new User("mainak");
mainak.createId();
```

```
e:\Documents\Desktop\JS\10_classes_and_oop\staticprop.js:16
mainak.createId();
       ^

TypeError: mainak.createId is not a function
    at Object.<anonymous> (e:\Documents\Desktop\JS\10_classes_and_oop\staticprop.js:16:8)
    at Module._compile (node:internal/modules/cjs/loader:1364:14)
    at Module._extensions..js (node:internal/modules/cjs/loader:1422:10)
    at Module.load (node:internal/modules/cjs/loader:1203:32)
    at Module._load (node:internal/modules/cjs/loader:1019:12)
    at Function.executeUserEntryPoint [as runMain] (node:internal/modules/run_main:128:12)
    at node:internal/main/run_main_module:28:49

Node.js v18.20.3
```

so using `static` we can prevent the access even in inheritance

```javascript
class User {
  constructor(username) {
    this.username = username;
  }

  logMe() {
    console.log(`Username: ${this.username}`);
  }

  static createId() {
    console.log(`${this.username}130821`);
  }
}

class Teacher extends User {
  constructor(username, email) {
    super(username);
    this.email = email;
  }
}

const iphone = new Teacher("iphone", "i@phone.com");
console.log(iphone.createId());
```

```
E:\Documents\Desktop\JS\10_classes_and_oop\staticprop.js:26
console.log(iphone.createId());
                   ^

TypeError: iphone.createId is not a function
    at Object.<anonymous> (E:\Documents\Desktop\JS\10_classes_and_oop\staticprop.js:26:20)
    at Module._compile (node:internal/modules/cjs/loader:1364:14)
    at Module._extensions..js (node:internal/modules/cjs/loader:1422:10)
    at Module.load (node:internal/modules/cjs/loader:1203:32)
    at Module._load (node:internal/modules/cjs/loader:1019:12)
    at Function.executeUserEntryPoint [as runMain] (node:internal/modules/run_main:128:12)
    at node:internal/main/run_main_module:28:49

Node.js v18.20.3
```

## objects

value of `Math.PI` can't be overwritten as `writable` is set to `false`

```javascript
const descriptor = Object.getOwnPropertyDescriptor(Math, "PI");
console.log(descriptor);

console.log(Math.PI);
Math.PI = 5;
console.log(Math.PI);
```

```
{
  value: 3.141592653589793,
  writable: false,
  enumerable: false,
  configurable: false
}
3.141592653589793
3.141592653589793
```

applying the same for our defined object `chai`

```javascript
const chai = {
  name: "ginger chai",
  price: 250,
  isAvailable: true,

  orderChai: function () {
    console.log("chai nhi bni");
  },
};

console.log(Object.getOwnPropertyDescriptor(chai, "name"));
console.log(Object.getOwnPropertyDescriptor(chai, "price"));
console.log(Object.getOwnPropertyDescriptor(chai, "isAvailable"));

// changing some properties of the object chai = { name : }
Object.defineProperty(chai, "name", {
  writable: false,
  enumerable: true,
});

console.log(Object.getOwnPropertyDescriptor(chai, "name"));

chai.name = "lemon chai"; // will not change | writable: false
chai.price = 300; // will change  | writable: true

for (let [key, value] of Object.entries(chai)) {
  if (typeof value !== "function") {
    console.log(`${key} : ${value}`);
  }
}
```

```
{
  value: 'ginger chai',
  writable: true,
  enumerable: true,
  configurable: true
}
{ value: 250,
  writable: true,
  enumerable: true,
  configurable: true
}
{ value: true,
  writable: true,
  enumerable: true,
  configurable: true
}
{
  value: 'ginger chai',
  writable: false,
  enumerable: true,
  configurable: true
}
name : ginger chai
price : 300
isAvailable : true
```

## getter & setter

### `get`

- gets a value from outside the class

### `set`

- sets a value from outside the class

both `get` and `set` should be present where used

```javascript
class User {
  constructor(email, password) {
    this.email = email;
    this.password = password;
  }
  // here we use _email
  get email() {
    return this._email.toUpperCase();
  }
  set email(value) {
    this._email = value;
  }

  // here we use _password
  get password() {
    return `das${this._password}mainak`;
  }
  set password(value) {
    this._password = value;
  }
}

const mainak = new User("das@mainak.ai", "abc");
console.log(mainak.email);
console.log(mainak.password);
```

```
DAS@MAINAK.AI
dasabcmainak
```

#### `get` `set` old syntax before class

- `function` based syntax

```javascript
function User(email, password) {
  this._email = email;
  this._password = password;

  Object.defineProperty(this, "email", {
    get: function () {
      return this._email.toUpperCase();
    },
    set: function (value) {
      this._email = value;
    },
  });
  Object.defineProperty(this, "password", {
    get: function () {
      return `das${this._password}mainak`;
    },
    set: function (value) {
      this._password = value;
    },
  });
}

const chai = new User("chai@chai.com", "chai");

console.log(chai.email);
console.log(chai.password);
```

```
CHAI@CHAI.COM
daschaimainak
```

- `object` based syntax

```javascript
const User = {
  _email: "das@mainak.com",
  _password: "tea",

  get email() {
    return this._email.toUpperCase();
  },

  set email(value) {
    this._email = value;
  },
  get password() {
    return `das${this._password}mainak`;
  },

  set password(value) {
    this._password = value;
  },
};

const tea = Object.create(User);
console.log(tea.email);
console.log(tea.password);
```

```
DAS@MAINAK.COM
dasteamainak
```

## closure

[closure_MDN](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Closures)

- `closure` gives you access to an outer function's scope from an inner function.
- In JavaScript, closures are created every time a function is created, at function creation time.

```html
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Closure aur chai</title>
  </head>
  <body style="background-color: #313131"></body>

  <script>
    function init() {
      let name = "Mozilla";
      function displayName() {
        console.log(name);
      }
      displayName();
    }
    init();

    function outer() {
      let username = "mainak";
      // console.log("OUTER", secret);      <= error
      function inner() {
        let secret = "my123";
        console.log("inner", username);
      }
      function innerTwo() {
        console.log("innerTwo", username);
        // console.log(secret);      <= error
      }
      inner();
      innerTwo();
    }
    outer();
    // console.log("TOO OUTER", username);      <= error

    function makeFunc() {
      const name = "Brave";
      function displayName() {
        console.log(name);
      }
      // here when we return displayName the whole lexical scope is returned i.e., name = "Brave" ;
      return displayName;
    }

    const myFunc = makeFunc();
    myFunc();
  </script>
</html>
```

```
Mozilla
inner mainak
innerTwo mainak
Brave
```

### color changer `onclick`

```html
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Closure aur chai</title>
  </head>
  <body style="background-color: #313131">
    <button id="orange">Orange</button>
    <button id="green">Green</button>
  </body>

  <script>
    // 👎 not good approach
    // document.getElementById("orange").onclick = function(){
    //     document.body.style.backgroundColor = `orange`
    // }
    // document.getElementById("green").onclick = function(){
    //     document.body.style.backgroundColor = `green`
    // }

    // 👍 better code
    function clickHandler(color) {
      // this would not work as when we will do `clickHandler("green")` it will directly set `bg-color : gree`n and will not return any function for `onclick` to work
      // document.body.style.backgroundColor = `${color}`

      // this is the correct way
      return function () {
        document.body.style.backgroundColor = `${color}`;
      };
    }
    // we returned a function as onclick expects a function to work
    document.getElementById("orange").onclick = clickHandler("orange");
    document.getElementById("green").onclick = clickHandler("green");
  </script>
</html>
```

#### 👍 here when the function is returned by `clickHandler()` then the function returned has the access of `color` which gets returned with the function as when returned the `lexical scope` also gets returned

```
bg-color : #313131    // by default in `body` style
bg-color : orange    // when we click `orange` button
bg-color : green    // when we click `green` button
```
