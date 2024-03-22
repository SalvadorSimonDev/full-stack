const user = {
  username: "Andres",
  email: "correo@gmail.com",
  age: 20,
  ranking: 9,
};

//Desectructuración
const { username, ranking, age } = user;

console.log(`${username} tiene ${age} de edad.`);
console.log(ranking);

//La solución anterior evita tener que hacer lo siguiente:
//Uso llaves para crear un nuevo bloque de código para el ejemplo...
{
  const username = user.username;
  const ranking = user.ranking;
  const age = user.age;

  console.log(`${user.username} tiene ${user.age} de edad.`);
  console.log(user.ranking);
}
