// ### Exercise 2
// Create a class Product that represents a product sold online. A product has a price, quantity and name.
// Create a method printAllAttributes that will alert the user of the value of each attribute.
// In your main function create two Product objects, assign a value to each attribute, and print them to the console.

class Product {
  constructor(name, quantity, price) {
    this.name = name;
    this.quantity = quantity;
    this.price = price;
  }
  printAllAttributes() {
    alert(
      `Product Name: ${this.name}, Quantity: ${this.quantity}, Price: ${this.price}`
    );
  }
}

function main() {
  let product1 = new Product("Theremin", "1", "$1949.99");
  let product2 = new Product("Electric Violin", "10", "$9000");
  product1.printAllAttributes();
  product2.printAllAttributes();
}
main();
