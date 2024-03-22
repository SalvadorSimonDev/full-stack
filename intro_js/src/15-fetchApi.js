//API FETCH: NATIVO DE JS, INCORPORADO EN TODOS LOS NAVEGADORES...

//La api de ftch devuelve una promesa que almacenamos en la constante httpClient
const httpClient = fetch("https://jsonplaceholder.typicode.com/users");
/*

  //Forma básica para entender el concepto

  //Obtenemos el resultado de la promesa, usando el metodo .json recibimos otra promesa...
  httpClient.then((response) => {
    // console.log(response)
    response.json().then((data) => {
      console.log(data);
    });
  })
*/
httpClient
  .then((response) => response.json())
  .then((data) => console.log(data));
