class User {
  constructor(email, password) {
    this.email = email;
    this.password = password;
  }

  get email() {
    return this._email.toUpperCase();
  }
  set email(value) {
    this._email = value;
  }

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
