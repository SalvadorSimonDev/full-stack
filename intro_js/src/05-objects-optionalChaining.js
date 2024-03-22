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
console.log(
  "*COMPROBANDO EXISTE EL ATRIBUTO EN EL OBJETO PARA USARLO CON OPTIONALCHAININ ?*"
);
console.log("**********************************************************");
console.log("");

console.log(
  "Si buscamos un atributo que no existe dentro del objeto, dará este error"
);
//como la siguiente linea de código da error y bloquea la aplicación, lo
// comentamos para poder seguir corriendo con la solución a este problema.
// console.log(invoice.car.name);

console.log("para evitar el error, usameros el ? que es el optionalchaining");
console.log("implementando...");
console.log("resultado: ");
console.log(invoice.car?.name);
//LO QUE VIENE A RESOLVER EL OPTIONALCHAINING ES TENER QUE ESCRIBIR TODO ESTE CÓDIGO:

if (invoice.car !== undefined && invoice.car.name) {
  console.log("existe");
} else {
  console.log("No existe");
}
