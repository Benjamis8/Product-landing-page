// logic operators
// used when we want to combine conditions and do a specific code block

// or
// At least one must be true for it to be true
// symbol: ||

let a = 5;
let b = 10; 
let c = 15;

//   false      false      true         false
if( (a > b) || (b > c) || (a < c) || (b == c) ){
    console.log("At least one of the statement is true");
} else {
    console.log("All are false");
}

console.log("=================================");

// and
// All must be true for it to be true
// symbol: &&

//   true       true        true        true
if( (a < b) && (b < c) && (a < c) && (b != c) ){
    console.log("All are true");
} else {
    console.log("At least one is false");
}

console.log("=================================");

// let a = 5;
// let b = 10; 
// let c = 15;

//                              true
//  true     true       (false  ||  true)
if( a < b && b > a &&  (a == c || b != c)){
    console.log("Combo will succeed");
} else {
    console.log("Combo will fail");
}

console.log("=================================");

// not
// negates the expression
// symbol: !

if( !(a == c) ){
    console.log("Not equal");
} else {
    console.log("Negated");
}

//  true
//  !(false)
//  !(false && true)
if( !(a == c && b != c) ){
    console.log("Not equal");
} else {
    console.log("Negated");
}