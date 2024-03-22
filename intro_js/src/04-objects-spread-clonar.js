//Crea el objeto
const invoice = {
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

//Comprobando si los dos objetos son iguales
console.log("**********************************************************");
console.log("**********************************************************");
console.log("*COMPROBANDO SI DOS OBJETOS SON IGUALES*");
console.log("**********************************************************");
console.log("");
//notas: cuando asignamos el objeto a la nueva variable,
//  estamos añadiendo una referencia al mismo objeto en la variable. Si lo que
// queremos es crear un nuevo objeto, es decir una nueva instancia, pero con
//  los mismos valores, deberemos usar el operador spread

//Clonando un objeto, si cambias el valor de un atributo desde una variable,
// tambien estas cambiando el atributo de la otra variable por que pertenecen
// al mismo objeto.
const invoice2 = invoice;

const result = invoice === invoice2;

console.log(
  "Cambiando valor de la variable invoice2 y mostrando el valor de invoice: "
);
console.log("nombre actual en invoice: " + invoice.name);
console.log("nombre actual en invoice2: " + invoice2.name);
console.log("Cambiando nombre invoice2 ...");
invoice2.name = "Factura clientes";
console.log("nombre despues del cambio en invoice: " + invoice.name);
console.log("nombre despues del cambio en invoice2: " + invoice2.name);
console.log("");
console.log("Comprobando si los objetos invoice y invoice2 son iguales...");
console.log("¿Son iguales las variables invoice y invoice2? " + result);
console.log("");

//CREAMOS UN NUEVO OBJETO PARTIENDO DE LOS VALORES DEL OBJETO INVOICE Y REALIZAMOS PRUEBAS

console.log(
  "Ahora creamos un nuevo objeto con el operador spread desde el objeto invoice."
);
console.log("Creando invoiceNew a partir de invoice...");
const invoiceNew = { ...invoice };
console.log("Mostrando objetos..." + invoice);
console.log("invoice");
console.log(invoice);
console.log("invoiceNew");
console.log(invoiceNew);
console.log("");

console.log("comprobando si son iguales...");
console.log("Son iguales invoice vs invoiceNew: " + (invoice === invoiceNew));

console.log(
  "Cambiando valor de la variable invoiceNew y mostrando el valor de invoice: "
);
console.log("nombre actual en invoice: " + invoice.name);
console.log("nombre actual en invoiceNew: " + invoiceNew.name);
console.log("Cambiando nombre invoiceNew ...");
invoiceNew.name = "Factura nueva";
console.log("nombre despues del cambio en invoice: " + invoice.name);
console.log("nombre despues del cambio en invoiceNew: " + invoiceNew.name);
console.log("");
console.log("Comprobando si los objetos invoice y invoiceNew son iguales...");
console.log("¿Son iguales las variables invoice y invoiceNew? " + result);
console.log("");

//Para cambiar el valor de un objeto que esta dentro de otro objeto tambien hay que
//  hacer un spread al objeto anidado dentro del objeto desde el que se copian los datos.

console.log(
  "Ereamos un nuevo objeto con el operador spread desde el objeto invoice."
);
console.log("Creando invoiceNew a partir de invoice...");
const invoiceNew2 = { ...invoice };
console.log("Mostrando objetos..." + invoice);
console.log("invoice");
console.log(invoice);
console.log("invoiceNew2");
console.log(invoiceNew2);
console.log("");

console.log("comprobando si son iguales...");
console.log("Son iguales invoice vs invoiceNew2: " + invoice === invoiceNew2);

console.log(
  "Cambiando valor del nombre del objeto cliente anidado de la variable invoiceNew2 y mostrando el valor de invoice: "
);
console.log("nombre actual en invoice: " + invoice.client.name);
console.log("nombre actual en invoiceNew2: " + invoiceNew2.client.name);
console.log("Cambiando nombre invoiceNew2 ...");
invoiceNew2.id = 3;
invoiceNew2.client.name = "Manuelo";
console.log(
  "nombre despues del cambio en invoiceNew2: " + invoiceNew2.client.name
);
console.log("nombre despues del cambio en invoice: " + invoice.client.name);
console.log("");
console.log("Comprobando si los objetos invoice y invoiceNew2 son iguales...");
console.log(
  "¿Son iguales las variables invoice y invoiceNew2? " +
    (invoice.client === invoiceNew2.client)
);
console.log(invoice);
console.log(invoiceNew2);

console.log(
  "Como podemos observar, el objeto cliente es el mismo en ambos. si queremos cambiar los valores de cliente, podemos hacerlo pero al igual que el objeto principal, debe ser una nueva instancia y es posible mediante el método spread"
);
console.log("copiando valores de cliente...");
const client = { ...invoice.client };
invoiceNew.client = client;
console.log(
  "comprobando si es la misma instancia de cliente en invoice vs invoiceNew"
);
console.log("¿Es la misma instancia?" + (invoice.client === invoiceNew));

//ahora si que podremos cambiar el nombre sin que afecte al otro objeto, debido a que ahora el objeto anidado en invoiceNew es diferente.

console.log(
  "Cambiando valor del nombre del objeto cliente anidado de la variable invoiceNew y mostrando el valor de invoice: "
);
console.log("nombre actual en invoice: " + invoice.client.name);
console.log("nombre actual en invoiceNew: " + invoiceNew.client.name);
console.log("Cambiando nombre invoiceNew ...");
invoiceNew.client.name = "Paco";
console.log(
  "nombre despues del cambio en invoiceNew: " + invoiceNew.client.name
);
console.log("nombre despues del cambio en invoice: " + invoice.client.name);
console.log("");
console.log("Comprobando si los objetos invoice y invoiceNew son iguales...");
console.log(
  "¿Son iguales las variables invoice y invoiceNew? " +
    (invoice.client === invoiceNew.client)
);
