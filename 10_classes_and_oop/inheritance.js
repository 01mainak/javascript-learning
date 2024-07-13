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
