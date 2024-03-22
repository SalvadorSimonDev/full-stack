//EXPLICACIÓN DE PROMESA DESDE UN ESTADO BÁSICO INICIAL(BLOQUE COMENTADO)

// import { invoiceById } from "./data/invoices";

// const promise = new Promise((resolve, reject) => {
//   setTimeout(() => {
//     const result = invoiceById(5);
//     result ? resolve(result) : reject("error en la ejecución");

//     console.log("Error: Realizando tarea con delay");
//   }, 2000);
// });

// promise
//   .then((result) => {
//     console.log("Realizada tarea con éxito", result);
//   })

//   .catch((error) => {
//     console.error(error);
//   })

//   .finally(() => console.log("promesa finalizada"));

//EXPLICACIÓN DE PROMESA USADA PARA QUE SE PUEDA REUTILIZAR.
import { invoiceById } from "./data/invoices";

const findInvoiceById = (id) => {
  const promise = new Promise((resolve, reject) => {
    setTimeout(() => {
      const result = invoiceById(id);
      result
        ? resolve(result)
        : reject("Error: ha ocurrido un error al intentar acceder a los datos");
    }, 2000);
  });
  return promise;
};

findInvoiceById(-1)
  .then(console.log)
  .catch(console.error)
  .finally(() => console.log("Ejecucion de promesa finalizada"));
