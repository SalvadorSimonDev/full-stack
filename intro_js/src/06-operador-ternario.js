console.log("**  Condicional ternario  **");
console.log("example 1:");
console.log("const average = 5.9");
console.log(' const state = average >= 5.5 ? "Aprobado" : "Suspendido";');
const average = 5.9;
const state = average >= 5.5 ? "Aprobado" : "Suspendido";

console.log(`Resultado: ${state}`);

console.log("example 2:");
console.log("let max = 0;");
console.log(" const a = 5,b = 8,c = 3;");
console.log(" const a = 5,b = 8,c = 3;");
console.log("max = a > b ? (a > c ? a : c) : b;");

let max = 0;
const a = 5,
  b = 8,
  c = 3;

//max = a > b ? (a > c ? a : c) : b;
// la linea anterior tambien se puede escribir de forma más legible en dos lineas:
max = a > b ? a : b;
max = max > c ? max : c;

console.log(`Resultado: ${max}`);
