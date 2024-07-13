// ES6

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

// behind the scene =>

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
