var user = {
  firstName: "Ali",
  lastName: "Zaki",
  username: "AliZaki88",
  email: "alizaki@mail.com"
}

delete user["firstName"];
delete user.lastName;

console.log(user);
