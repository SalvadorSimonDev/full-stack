const user = {
  username: "Andres",
  email: "correo@gmail.com",
  age: 20,
  ranking: 9,
};

//#1:

console.log("Vista función detail: ");
const detail = (user) => {
  //Desectructuración dentro de función
  const { username, ranking, age } = user;

  console.log(`${username} tiene ${age} de edad.`);
  console.log(ranking);
};

detail(user);

//#2:

console.log("");
console.log("Vista función detail2: ");
const detail2 = ({ username, age, ranking }) => {
  console.log(`${username} tiene ${age} de edad.`);
  console.log(ranking);
};
detail2(user);
