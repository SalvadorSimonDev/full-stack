//función estandar sin parametros
function sayHello() {
  const greeting = "Hola mundo desde function";
  // console.log("Hola mundo desde function");
  return greeting;
}

//llamamos a la función estandard desde el console.log para mostrar el resultado por pantalla
console.log(sayHello());

//*************************************************************************************** */
//*************************************************************************************** */

//función estandar con parametro
function sayHelloParam(str) {
  const greeting = `Hola mundo desde function con un parametro: ${str}`;
  return greeting;
}

// llamamos a la función estandard con parametro
// desde el console.log para mostrar el resultado por pantalla
console.log(sayHelloParam("Soy el valor del parametro!"));

//*************************************************************************************** */
//*************************************************************************************** */

//función estandar con parametros y valores por defaul
function sayHelloParams(userName = "vacio", lastName = "vacio") {
  const greeting = `Hola mundo desde function con parametros: ${userName} ${lastName}`;
  return greeting;
}

// llamamos a la función estandard con parametros y valores default
// desde el console.log para mostrar el resultado por pantalla
console.log(
  `Llamada funcion params con valores defaul: ${sayHelloParams("Salvador")}`
);

//*************************************************************************************** */
//*************************************************************************************** */

//FUNCIÓN ANÓNIMA: SE ASIGNA UNA FUNCIÓN A UNA VARIABLE. LA VARIABLE DEBE SER CONST, NO LET.

//función estandar sin parametros
const sayHelloAnonima = function () {
  const greeting = "Hola mundo desde function anónima";
  // console.log("Hola mundo desde function");
  return greeting;
};

//llamamos a la función estandard desde el console.log para mostrar el resultado por pantalla
console.log(sayHelloAnonima());

//*************************************************************************************** */
//*************************************************************************************** */

//FUNCIÓN ANÓNIMA DE FLECHA: SE ASIGNA UNA FUNCIÓN A UNA VARIABLE Y SE MODIFICAN LOS ARGUMENTOS.
// LA VARIABLE DEBE SER CONST, NO LET.

//función estandar sin parametros
const sayHelloAnonFlech = () => {
  const greeting = "Hola mundo desde function anónima con flecha";
  // console.log("Hola mundo desde function");
  return greeting;
};

//llamamos a la función estandard desde el console.log para mostrar el resultado por pantalla
console.log(sayHelloAnonFlech());

//*************************************************************************************** */
//*************************************************************************************** */

//FUNCIÓN ANÓNIMA DE FLECHA Y SIN LLAVES POR SER SOLO DE UNA EJECUCIÓN; LA VARIABLE DEBE SER CONST, NO LET.

//función estandar sin parametros
const sayHelloAnonFlechsUM = (a = 0, b = 0) =>
  `Resultado de la suma de sayHelloAnonFlechsUM es ${a + b}`;

//llamamos a la función estandard desde el console.log para mostrar el resultado por pantalla
console.log(sayHelloAnonFlechsUM(1, 3));

//*************************************************************************************** */
//*************************************************************************************** */
