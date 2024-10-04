// function - reusable code 
// it's only executeed once the function is called
// it has a name and we call that name to execute the function

// function functionName
function sayHi() {
    // functionBody
    console.log("Hi");
    let a = 20 + 10;
    if (a == 30){
        console.log("this will be entered");
    } else {
        console.log("else statement");
    }
}

// function call 
sayHi();

// return statement 
// returns a value 

function returnSample(){
    let hello = "Hello World";
    // whatever we put after the return keyword, that value will be returned
    return hello;
}

returnSample(); // does nothing 

let temp = returnSample();
console.log(temp); // prints what returnSample returned

console.log(returnSample());