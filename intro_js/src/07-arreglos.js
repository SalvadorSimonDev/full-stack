// OBSERVACIONES
/*
    - Array(arreglo) Es un objeto que a su vez contiene o puede contener varios objetos, Una lista de objetos o colección.

    - Un arreglo esta formado por indice y valor, el indice empieza por 0.


*/

//Dos métodos de añadir elementos a un array.
//método uno:
const products = ["Mesa", "Silla", "Notebook", "Teclado"];

//método dos:
products.push("pantalla lcd");
products.push("pantalla lcd 2", "sonic tv");

console.log(products);

// Para iterar o recorrer el Array:
// #1:
console.log("Para iterar o recorrer el Array:");
console.log("#1 (forEach) :");
products.forEach(function (elem) {
  console.log(elem);
});
console.log("********************");
console.log("");

// #2:
console.log("#2 (forEach) :");
products.forEach((elem) => console.log(elem));
console.log("********************");
console.log("");

// #3:
// Usando método de referencia (unico método) que recibe un solo parametro, se puede omitir la declaración del parametro por que lo pasa automaticamente.
console.log("#3 (forEach) :");
products.forEach(console.log);
console.log("********************");
console.log("");

// #4:
console.log("#4 (for Of) :");
for (const prod of products) {
  console.log(prod);
}
console.log("********************");
console.log("");

// #4:
console.log("#5 (for) :");
for (let i = 0; i < products.length; i++) {
  console.log(products[i]);
}
console.log("********************");
console.log("");
