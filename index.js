var cart = [];

//function getRandomInt(max) {
  //return Math.floor(Math.random() * Math.floor(max))

function getCart() {
 return cart;
}

function setCart(c) {
  cart = c;
  return cart;
}

function addToCart(item) {
 cart.push({itemName: item}, {itemPrice: getRandomInt(100)})
 return "$(item) has been added to your cart."
}

function viewCart() {
  // write your code here
}

function total() {
  // write your code here
}

function removeFromCart(item) {
  // write your code here
}

function placeOrder(cardNumber) {
  // write your code here
}
