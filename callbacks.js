// Functions are first class objects -> can pass a func as an arguement or return it from another function

// A func passed to another func as parameter is called is called callback function
// A func that receives a function as parameter or returns a function is called higher order function.

function greet(name) {
  console.log(`
  Hi, ${name}!`);
}

function higherOrderFunction(callback) {
  const name = "Jayti";
  callback(name);
}
higherOrderFunction(greet);

// Synchronous callback

let numbers = [1, 2, 3, 4, 5, 6, -1];
numbers.sort((a, b) => a - b);
let mapped_arr = numbers.map((n) => n * 2);
console.log(mapped_arr);
let filter_arr = numbers.filter((n) => {
  return n % 2 == 0;
});
console.log(filter_arr);

// Asynchronous callback

function greet(name) {
  console.log(`Hi, ${name}`);
}
setTimeout(greet, 2000, "Jayti");
let counter = 1;
document.getElementById("demo").addEventListener("click", function () {
  if (counter % 2 == 1) document.getElementById("demo").innerHTML = "Clicked!";
  else document.getElementById("demo").innerHTML = "Click Me!";
  counter++;
});
