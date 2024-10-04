// Addition
console.log(1 + 2 + 76);
const sum = 3 + 5 + 25;
console.log(sum);
let a = 10;
let b = 20;
console.log(a + b);
console.log(a + 78);

// shorthand
a += 20;
// adding previous value of the variable to 20
// a = a + 20;
a += a + 50;
// a = a + a + 50;
console.log(a);
console.log(sum + b);

b++;
// increment by 1
// b = b + 1;
// b += 1;
console.log(b);

// ++b takes effect immediately
console.log(`Previous value: ${b} and Current value: ${++b}`);

// b++ takes effect after the line
console.log(`Previous value: ${b} and Current value: ${b++}`);
console.log(b);

// subtraction
console.log(10 - 5)
a = 50;
b = 20;
console.log(a + b);
console.log(b - a);

// shorthand
b -= 5;
// b = b - 5;
console.log(b);

b--;
console.log(b);

// multiplication 
console.log(4 * 8);
a = 10;
b = 10;
console.log(a * b);

a *= 5;
// a = a * 5;
console.log(a);

// division
console.log(10 / 3);
a = 100;
b = 10;
console.log(a / b);

a /=5;
// a = a / 5
console.log(a);

// modulo  / gives remainder
console.log(20 % 3);
console.log(10 % 3);

a = 67;
b = 5;
console.log(a % b);
console.log(10.5 % 5);

// Math.pow
// exponents
// pow() takes in 2 parameters
// first parameter - base
// second parameter - exponent
console.log(Math.pow(3, 3));
console.log(Math.pow(3 , -3));
console.log(Math.pow(1.5, 2));

a = 10;
b = 10;
let c = Math.pow(a , b);
console.log(c);

//  PEMDAS
console.log(3 + 4 *5);

// Math.round
// follows the rules the rounding up or down numbers
console.log(Math.round(6.67)); // 7
console.log(Math.round(6.49)); // 6
// doesn't work with whole numbers

console.log(Math.round(12));

// Math.ceil
// no matter how miniscule the decimal is, it will always round up
console.log(Math.ceil(10.000001)); // 11

a = 59.01;
console.log(Math.ceil(a)); // 60

console.log(Math.ceil(-1.000001));

// Math.floor
// no matter how large the decimals is, it will always round down
console.log(Math.floor(9.99999999)); // 9
console.log(Math.floor(5.3)); //5 

// Math.randon 
// gives us a number from 0 to 0.9999999999999
console.log(Math.random());
console.log(Math.random());

a = Math.random();
console.log(a);

// 1 to 100
a = Math.random() * 100;
console.log(Math.ceil(a));

console.log("==================================");

// randomly choose a snack
// create a list of items
const ShopItems = ['bot bawang' , 'doritos' , 'chips ahoy', 'oreos'];

// randomize the number from 0 to 4
let random = Math.random();
let randomNumber = random * ShopItems.length;
console.log(random);
console.log(randomNumber);

// round down the float number into a integer
let newNumber = Math.floor(randomNumber);

// access the item in the array
let randomItem = ShopItems[newNumber];
// this should log any of the items in the array
console.log(randomItem)