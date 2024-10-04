function sendText(firstName, lastname) {
  console.log(`Good day, ${firstName} ${lastname}, School is canceled today.`);

}
sendText('Jose', 'Rizal');
sendText('Manny', 'Pacquiao');
sendText('Robert', 'Rodriguez');
sendText('Elon', 'Musk');
sendText('Mark', 'Zuckerberg');

console.log("============================")

// return statement - allows us to access values produced inside functions
let a = 10;
let b = 20;

function add(a,b){
    let sumInsideFunction = a + b;
    return sumInsideFunction;
}

let sum = add (a,b);
console.log(sum);  // 30
// console.log(sumInsideFunction); // error

function subtract(a,b){
    console.log(a-b);
}

subtract(a,b);

function multiply (a , b ){
    let product = a*b;
}

console.log(multiply(a,b)); // undefined

function multiplyReturn(a,b){
    let product =a*b;
    return product;
}

console.log(multiplyReturn(a,b)); // 200

function createStudent (){
    let student = {
        name: "Jean",
        age: 18,
        class: "4th Year",
        address:"Manila, PH"
    }
    return student;
}

let newStudent = createStudent();
console.log(newStudent.address);

