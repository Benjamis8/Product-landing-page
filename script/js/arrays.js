// built-in functions
// functions not made by us that we can use

// slice()

let kpopGroups = ["Seventeen", "Twice", "BTS", "BlackPink", "EXO"];
//                    0           1       2         3         4
console.log(kpopGroups);

// parameters - what we pass to the function - value we want the function to have
// slice(first, second)
// first parameter - starting index of where we want to slice
// second parameter - end index - 1 of where we want to slice
// slice returns an array
let slicedGroup = kpopGroups.slice(1, 3);  
console.log(slicedGroup);
console.log(kpopGroups);

let choose = kpopGroups.slice(1, 5);
console.log(choose);

// push()
// push accepts the added element as an array
// adds an element to the end of an array
// alters the array itself
kpopGroups.push("2NE1");
console.log(kpopGroups);

kpopGroups.push("NCT", "Bigbang");
console.log(kpopGroups);

// unshift()
// adds an element at the start of an array
kpopGroups.unshift("New Jeans");
console.log(kpopGroups);

// Coding Challenge
// let gardenPlants = [ 
//     {
//         name: 'roses', 
//         origin: 'China'
//     },
//     {
//         name: 'tulips', 
//         origin: 'Asia'
//     },
// ]

// gardenPlants.unshift({
//     name: 'sampaguita',
//     origin: 'Asia'
// });

// console.log(gardenPlants);

// let newFlower = {
//     name: 'cherry blossoms',
//     origin: 'Asia'
// }
// gardenPlants.unshift(newFlower);
// console.log(gardenPlants);

// pop()
// no parameters
// removes the element at the end of an array
// returns the value removed
// declaring/new variable
let removedGroup = kpopGroups.pop();
console.log(kpopGroups);
console.log(removedGroup);

kpopGroups.pop();
console.log(kpopGroups);

// shift()
// removes the element at the start of an array
kpopGroups.shift();
console.log(kpopGroups);

// reassigning
removedGroup = kpopGroups.shift();
console.log(kpopGroups);
console.log(removedGroup);