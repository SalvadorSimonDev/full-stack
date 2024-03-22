//Los objetos siempre se declaran en const; cambian los valores, no el objeto.
console.log("");
console.log("");
console.log("**********************************************************");
console.log("**********************************************************");
console.log("** Ejemplo de invoice básica** ");
console.log("**********************************************************");

//Crea el objeto
const invoice = {
  id: 10,
  name: "Compra de oficina",
  date: new Date(),
  client: "Jhon Doe",
  total: 1000,
};

//Mostramos el objeto completo
console.log(invoice);

//Mostramos el nombre del objeto
console.log(invoice.name);

//Cambia el nombre del objeto
invoice.name = "Factura de escritorio";

//Mostramos el nombre del objeto
console.log(invoice.name);

//RELACIONES DE OBJETOS CON OBJETOS EN SU INTERIOR
console.log("");
console.log("");
console.log("**********************************************************");
console.log("**********************************************************");
console.log("** Ejemplo de invoice invoiceWithObjectClient **");
console.log("**********************************************************");

//Crea el objeto
const invoiceWithObjectClient = {
  id: 10,
  name: "Factura con objeto cliente",
  date: new Date(),
  client: {
    name: "Salvador",
    lastName: "Martínez",
    phone: 698745852,
  },
  total: 1000,
};
//Mostramos el objeto completo
console.log(invoiceWithObjectClient);

//Mostramos el nombre del objeto
console.log(invoiceWithObjectClient.name);

//Mostramos el nombre del cliente del objeto factura
console.log(invoiceWithObjectClient.client.name);

//Cambia el nombre del cliente del objeto factura
invoiceWithObjectClient.client.name = "Paquito";

//Mostramos el nombre del objeto
console.log(invoiceWithObjectClient.client.name);

//RELACIONES DE OBJETOS CON OBJETOS EN SU INTERIOR Y FUNCIONES
console.log("");
console.log("");
console.log("**********************************************************");
console.log("**********************************************************");
console.log("* Ejemplo de invoice invoiceWithObjectClientFunction *");
console.log("**********************************************************");

//Nota: Las funciones dentro de los objetos no pueden ser funciones
//  de flecha, ya que estan desacopladas del objeto y no se podria
//  usar la palabra clave this., pero si funcionaria llamando al objeto
//  en vez de usar el this.

//Crea el objeto
const invoiceWithObjectClientFunction = {
  id: 10,
  name: "Factura con objeto cliente y funciones",
  date: new Date(),
  client: {
    name: "Salvador",
    lastName: "Martínez",
    phone: 698745852,
  },
  total: 1000,
  greeting: function () {
    return `Hola ${this.client.name}`;
  },
};

//Mostramos el objeto completo
console.log(invoiceWithObjectClientFunction);

//Mostramos el nombre del objeto
console.log(invoiceWithObjectClientFunction.name);

//Mostramos el nombre del cliente del objeto factura
console.log(invoiceWithObjectClientFunction.client.name);

//Cambia el nombre del cliente del objeto factura
invoiceWithObjectClientFunction.client.name = "Paquito";

//Mostramos el nombre del objeto
console.log(invoiceWithObjectClientFunction.client.name);

//Asigna la función del objeto a la constante
const greeting = invoiceWithObjectClientFunction.greeting();

//llama a la constante que tiene el resultado de la funcion del objeto.
console.log("Llamada desde la constante creada para ello: ", greeting);

//llama a la constante que tiene el resultado de la funcion del objeto.
console.log(
  "Llamada directamente desde el objeto: ",
  invoiceWithObjectClientFunction.greeting()
);

//RELACIONES DE OBJETOS CON OBJETOS EN SU INTERIOR, FUNCIONES Y UN ARRAY DE OBJETOS QUE SON LOS ITEMS
console.log("");
console.log("");
console.log("**********************************************************");
console.log("**********************************************************");
console.log("*Ejemplo de invoice invoiceWithObjectClientFunctionAndItems*");
console.log("**********************************************************");

//Nota: Las funciones dentro de los objetos no pueden ser funciones
//  de flecha, ya que estan desacopladas del objeto y no se podria
//  usar la palabra clave this., pero si funcionaria llamando al objeto
//  en vez de usar el this.

//Crea el objeto
const invoiceWithObjectClientFunctionAndItems = {
  id: 10,
  name: "Factura con objeto cliente, funciones e items",
  date: new Date(),
  client: {
    name: "Salvador",
    lastName: "Martínez",
    phone: 698745852,
  },
  items: [
    {
      producto: "keyboard",
      price: "100",
      quantity: 2,
    },
    {
      producto: "mouse",
      price: "200",
      quantity: 1,
    },
    {
      producto: "paper",
      price: "100",
      quantity: 2,
    },
  ],
  total: function () {
    let total = 0;
    this.items.forEach((item) => {
      total = total + item.price * item.quantity;
    });
    return total;
  },
  greeting: function () {
    return `Hola ${this.client.name}`;
  },
};

//Mostramos el objeto completo
console.log(invoiceWithObjectClientFunctionAndItems);

//Mostramos el nombre del objeto
console.log(invoiceWithObjectClientFunctionAndItems.name);

//Mostramos el nombre del cliente del objeto factura
console.log(invoiceWithObjectClientFunctionAndItems.client.name);

//Cambia el nombre del cliente del objeto factura
invoiceWithObjectClientFunctionAndItems.client.name = "Paquito";

//Mostramos el nombre del objeto
console.log(invoiceWithObjectClientFunctionAndItems.client.name);

//Asigna la función del objeto a la constante
const greeting2 = invoiceWithObjectClientFunctionAndItems.greeting();

//llama a la constante que tiene el resultado de la funcion del objeto.
console.log("Llamada desde la constante creada para ello: ", greeting2);

//llama a la constante que tiene el resultado de la funcion del objeto.
console.log(
  "Llamada directamente desde el objeto: ",
  invoiceWithObjectClientFunctionAndItems.greeting()
);

//Asigna la función total del objeto a la constante
const total = invoiceWithObjectClientFunctionAndItems.total();

//llama a la constante que tiene el resultado de la funcion total del objeto.
console.log("Llamada desde la constante creada para ello: ", total);

//llama a la constante que tiene el resultado de la funcion total del objeto.
console.log(
  "Llamada directamente desde el objeto: ",
  invoiceWithObjectClientFunctionAndItems.total()
);
