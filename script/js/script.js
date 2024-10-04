// console.log("Hello World");

// var - indicator that the next key word is a variable
// = - equal sign assignment operator. it means were assigning a value to a variable
// name is a variable

// primitive data types
var name = "John" // string - " " ,  ' ' , 
console.log(name);
var age = 25; // number
var quantity = "2" // string
var version = 26.5; // number

// camel case
var isFilipino = true; // boolean = true or false

// snake case
var is_alien2 = false; // boolean
var years = 5;

console.log(age);
console.log(age + quantity);
console.log(age + years);

// code block - lines of code enclosed in {}
if(isFilipino) {
    console.log("the person is Filipino!")
}

if(years) {
    console.log("entered here")
}

// Reassignment
var temp = 10; 
temp = 15;
console.log(temp);

// difference of var and let
var first = 5;

if(true) {
    var first = 10;
}
console.log(first);

// let
// scope based
let second = 20;

if (true) {
    let second = 30;
}

second = 40;
console.log(second);

// const - variables which cannot be reassigned
const population = 1700;
console.log(population);

// coding challenge
let bookcount = 0;
function increment(){
    bookcount += 1;
    
}increment();
console.log(bookcount);

