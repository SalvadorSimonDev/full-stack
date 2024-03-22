//MÉTODO SPREAD CON ARREGLOS

console.log("MÉTODO SPREAD EN ARREGLOS");
console.log("");

const products = ["Mesa", "Silla", "Notebook", "Teclado"];

products.push("pantalla lcd 2", "sonic tv");

const fruits = ["Peras", "Manzanas", "Sandías", "Frutillas"];

//Crea un array con los elementos de otro array. No clona el objeto, solo copia los elementos en una nueva array.
const mercado = [...products, ...fruits];
console.log("products");
console.log(products);
console.log("");
console.log("fruits");
console.log(fruits);
console.log("");
console.log("mercado");
console.log(mercado);
console.log("");

//Tambien podemos añadir elementos a la vez que copiamos los del array...
const mercadoOficina = [...products, "Mouse", "Cable HDMI 3m"];

console.log("mercadoOficina");
console.log(mercadoOficina);
console.log("");

//MÉTODO CONCAT:
//Observaciones: el método concat devuelve una nueva una nueva instancia copiando los elementos del array sobre el que se ejecuta.
console.log("MÉTODO CONCAT EN ARREGLOS");
console.log("");

const foods = fruits.concat(["Platano", "Granada"]);
console.log("foods");
console.log(foods);
console.log("");

//Multiples usos de concat en una misma linea...
const fullMarket = products
  .concat(mercadoOficina)
  .concat(foods)
  .concat(["llavero", "jamon"]);

console.log("fullMarket");
console.log(fullMarket);
console.log("");
