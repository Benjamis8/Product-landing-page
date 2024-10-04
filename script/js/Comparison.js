// Greater than
// >
// compares 2 numbers and returns a boolean value

console.log(5 > 10); // false
let a = 50;
let b = 30;
console.log(a > b); // true

console.log(a > 100); // false

console.log(40 > 40); // false

console.log("=================================");

// Less than
// <

console.log(5 < 10); // true
console.log(a < b); // false

console.log(40 < 40); // false

// let age = 18
// if(age < 18){
//     console.log("Person is a minor");
// } else if (age >= 18) {
//     console.log("Person is of legal age");
// }

console.log("=================================");

// Greater than or equal to
// >=

console.log(40 >= 40); // true
console.log(41 >= 40); // true
console.log(39 >= 40); // false

console.log("=================================");

// Less than or equal to
// <=

console.log(40 <= 40); // true
console.log(41 <= 40); // false
console.log(39 <= 40); // true

console.log("=================================");
// Equality
// == - checks the value regardless of data
// === - also checks the data type

console.log(4 == '4'); // true
console.log(4 === '4'); // false

console.log('4' === '4'); // true

console.log('4' == '4'); // true

let password = "password1234";
if(password === "password1234"){
    console.log("User can log in");
} else {
    console.log("Wrong password");
}

console.log(4 == "four"); // false

console.log("=================================");
// not operator
// !
// negates the value of the variable/value

console.log(!false); // true

let c = true;
console.log(!c); // false

console.log(!(4 > 9)); // true

console.log(!!false); // false