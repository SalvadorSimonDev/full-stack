//COMPARACIÓN DE PROMISE FETCH(THEM Y CATCH) VS ASYNC-AWAIT

// httpClient
//   .then((response) => response.json())
//   .then((data) => console.log(data));

const findAllUsers = async () => {
  const response = await fetch("https://jsonplaceholder.typicode.com/users");
  return await response.json();
};

const dataUsers = await findAllUsers();

console.log(dataUsers);
