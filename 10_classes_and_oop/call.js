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
  SetUsername.call(this, username);

  this.email = email;
  SetPassword.call(this, password);
}

const chai = new createUser("chai", "chai@fb.com", "123");
console.log(chai);
