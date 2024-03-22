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

//METODO MAP
//Método Map, similar al forEach pero crea una nueva instancia, no modifica el original.
console.log("MÉTODO MAP");
//creamos un nuevo array que contenga solamente los nombres de la factura:
console.log(
  "creamos un nuevo array que contenga solamente los nombres de la factura:"
);
console.log("Creando nuevo Array invoicesEdit a partir del array invoices");
const invoicesEdit = invoices.map((item) => {
  return item.name;
});

invoicesEdit.forEach(console.log);

//Nota: Tambien se puede usar para devolver el objeto modificando algun campo de la factura.

//MÉTODO FIND(Buscar un objeto dentro de un array)
//Es usado comunmente para buscar elementos dentro de un array, crea una nueva instancia con el objeto encontrado
//Necesita un condicional para encontrar el elemento.
console.log("MÉTODO FIND");
console.log("Ejecutando método find #1 por id ...");
const resultFindId = invoices.find((i) => i.id === 1);
console.log("Resultado find resultFindId: ");
console.log(resultFindId);
console.log("");

console.log("Ejecutando método find #2 por nombre cliente ...");
const resultFindClienteName = invoices.find(
  (i) => i.client.name.toLowerCase() === "maria".toLowerCase()
);
console.log("Resultado find resultFindClienteName: ");
console.log(resultFindClienteName);
console.log("");

//MÉTODO FILTER(Busca objetos dentro de un array)
//Es usado comunmente para buscar grupos de objetos de un array, crea una nueva instancia array de objetos encontrados
//Necesita un condicional para encontrar el elemento.
console.log("MÉTODO FILTER");
console.log("Ejecutando método FILTER #1 por id >1 ...");
const resultFilterId = invoices.filter((i) => i.id > 1);
console.log("Resultado filter resultFilterId: ");
console.log(resultFilterId);
console.log("");

console.log("Ejecutando método filter #2 por nombre item(producto) ...");
//nota: Items es un array de productos, hay que condicionar con el método includes...
//La busqueda la hace por referencia, asi que necesitamos la referencia en memoria del objeto para poder pasarlo con su referencia.
console.log(
  "nota: Items es un array de productos, hay que condicionar con el método includes..."
);

const resultFilterItemName = invoices.filter((i) => i.items.includes(papper));
console.log("Resultado filter resultFilterItemName: ");
console.log(resultFilterItemName);
console.log("");

console.log(
  "Ejecutando método filter #3 copiar elementos de array eliminando un elemento de este ..."
);
//nota: El resultado es una nueva instancia sin el elemento condicionado.

const resultFilterCloneDeleteElement = invoices.filter((i) => i.id !== 2);
console.log("Resultado filter resultFilterCloneDeleteElement: ");
console.log(resultFilterCloneDeleteElement);
console.log("");

//MÉTODO SOME(Busca objetos dentro de un array)
//Es usado comunmente para buscar grupos de objetos de un array y devuelve true o false si lo encuentra o no respectivamente
//Necesita un condicional para encontrar el elemento.
console.log("MÉTODO SOME");
console.log("Ejecutando método SOME #1 por id >1 ...");
const resultSomeId = invoices.some((i) => i.id > 1);
console.log("Resultado some resultSomeId: ");
console.log(resultSomeId);
console.log("");

console.log("Ejecutando método some #2 por nombre item(producto) ...");

const resultSomeProducts = invoices.some((i) => i.items.includes(papper));
console.log("Resultado Some resultSomeProducts: ");
console.log(resultSomeProducts);
console.log("");
