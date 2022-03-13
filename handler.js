const users = [
  {
    name: "John",
    age: "20",
  },
  {
    name: "sachin",
    age: "30",
  },
];

const products = [
  {
    mobile: "oneplus",
    price: 20000,
  },
  {
    mobile: "realme",
    price: 393983,
  },
];
const handleRequest = (request, response) => {
  if (request.url === "/") {
    response.end("home page");
  } else if (request.url === "/login") {
    response.end(" <p>  login page  </p>");
  } else if (request.url === "/users") {
    const userData = JSON.stringify(users);
    response.end(userData);
  } else if (request.url === "/products") {
    const productData = JSON.stringify(products);
    response.end(productData);
  }
};

module.exports = {
  handleRequest,
};
