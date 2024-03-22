const users = ["paco", "juan", "manolo", "josefa"];

//destructuramos en orden y nombramos a nuestro antojo.
const [user1, user2] = users;
console.log(user1, user2);

//destructuramos elementos en posiciones concretas, hay que dejar los que no queremos obtener vacios.
const [, , user] = users;
console.log(user);
console.log("");

//destructuramos un grupo al final con el metodo spread
const [user0, , ...us] = users;
//imprime un elemento y un array (us) con el resto de elementos del array.
console.log(user0, us);

//imprime todos los elementos de forma independiente
console.log(user0, ...us);
