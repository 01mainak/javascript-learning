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
