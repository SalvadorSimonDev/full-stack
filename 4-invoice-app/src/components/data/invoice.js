export const invoice = {
  id: 10,
  name: "Componentes PC",
  client: {
    name: "Pepe",
    lastName: "Martinez",
    address: {
      country: "USA",
      city: "Los Angeles",
      street: "One Street",
      number: 12,
    },
  },
  company: {
    name: "New Egg",
    fiscalNumber: 1234567,
  },
  items: [
    {
      id: 1,
      product: "cpu intel",
      price: 499,
      quantity: 1,
    },
    {
      id: 2,
      product: "Fuente corsair",
      price: 150,
      quantity: 1,
    },
    {
      id: 3,
      product: "Monitor asus",
      price: 350,
      quantity: 1,
    },
  ],
};
