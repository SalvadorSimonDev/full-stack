//Creamos un producto para ejemplo filter
const papper = {
  producto: "pencil",
  price: 50,
  quantity: 1,
};

//Creando array de objetos Factura
const invoices = [
  {
    id: 1,
    name: "Factura de oficina",
    client: {
      name: "Salvador",
      lastName: "Martínez",
    },
    items: [
      {
        producto: "keyboard",
        price: 100,
        quantity: 2,
      },
      {
        producto: "mouse",
        price: 200,
        quantity: 1,
      },
      papper,
    ],
  },
  {
    id: 2,
    name: "Factura de electronica",
    client: {
      name: "Maria",
      lastName: "Martínez",
    },
    items: [
      {
        producto: "keyboard",
        price: 100,
        quantity: 2,
      },
      {
        producto: "screen 17",
        price: 800,
        quantity: 1,
      },
      {
        producto: "cpu",
        price: 1000,
        quantity: 2,
      },
    ],
  },
  {
    id: 3,
    name: "Factura de alimentos",
    client: {
      name: "Diana",
      lastName: "Martínez",
    },
    items: [
      {
        producto: "pencil",
        price: 50,
        quantity: 1,
      },
      papper,
    ],
  },
];

//Funciones:
// export const invoiceById = (id) => invoices.find((i) => i.id === id);

//si declaramos la exportacion en la declaracion del objeto, deberemos elimiar el nombre de la que queramos exportar por defecto
const invoiceById = (id) => invoices.find((i) => i.id === id);

//podemos usar la siguiente linea en vez de declararlo al crear el objeto delante de const.
//export { papper, invoices, invoiceById};

//O esta si queremos que sea por defecto una de ellas, añadimos as default.
export { papper, invoices as default, invoiceById };
