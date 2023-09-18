// const rooms = require("./rooms");

const rooms = [
  { name: "hakeeb", location: "Canada" },
  { name: "abiodun", location: "germnay" },
  { name: "adeshina", location: "Yaba" },
];

let std2find = rooms.find((student) => student.name === "hakeeb");
console.log(std2find);

let std = {
  name: "Lanre",
  location: "Abuja",
  stack: "MERN",
  profession: "Full Stack Developer",
};

std.location = "Lagos";
(std.stack = "MERN"), (std.profession = "Machine Learning Engineer");

console.log(std);
