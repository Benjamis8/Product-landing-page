/*
    Case 1: Summation of every number from 1
    Your manager asked you to create a simple algorithm that finds the summation of every number from 1 to any number given. 
    The number will always be a positive integer greater than 0.
    let num = 2; // 1 + 2 = 3
    let num = 10; // 1 + 2 + 3 + 4 + 5 + 6 + 7 + 8 + 9 + 10 = 55
*/

// let summation = 0;
// let num = 10;

// for( let i = 1; i<= num; i++){
//     // summation = summation + i;
//     summation += i;
// }
// console.log(`the summation of ${num} is ${summation}`);

// console.log("=================================")


    // Case 2: GPA Calculator
    // You are asked to develop a grading calculator for the professor in a university.
    // This system will compute the average points of the exams of a student. 
    // Print the exam and the grades of the student. 

    // Exam - Grade
    // 1st Quarter - 80
    // 2nd Quarter - 70
    // 3rd Quarter - 90
    // 4th Quarter - 85 

    // const studentGrade= [
    //     {
    //         examName: "1st Quarter",
    //         grade: 80
    //     },
    //     {
    //         examName: "2nd Quarter",
    //         grade: 70
    //     },
    //     {
    //         ExamName: "3rd Quarter",
    //         grade: 85
    //     },
    //     {
    //         examName: "4th Quarter",
    //         grade: 85
    //     }

    // ];

    // let average = 0; 
    // let totalGrades = 0;
    // // average: totalGrades/number of exams

    // for (let i = 0; i < studentGrade.length; i++){
    //     totalGrades += studentGrade[i].grade;
    //     console.log(`${studentGrade[i].examName} - ${studentGrade[i].grade}`);

    //     average = totalGrades/studentGrade.length;
    //     console.log(`the average grade is ${average}`);
    // }
    

    console.log("==================================");
    

    // Case 3: Find the maximum number in a dynamic array. (A dynamic array can change their length)
    // Input:
    // const array_sample = [[1,2,3], [4,5,6], [7,8,9]]
    // Output:
    // “Maximum number is 9.”


const array_sample = [
    [0,1,2,100], // 0
    [3,4,5], // 1
    [6,7,8,9] // 2
];

console.log(array_sample[1]); // {3,4,5}
console.log(array_sample[3]); // undefined
console.log(array_sample[1][0]); // 3
console.log(array_sample[2][3]); // 9
console.log(array_sample[0][0]); // 0
console.log(array_sample[1][2]); // 5

// current maximum
let maximum = array_sample[0][0];
for (let outer = 0; outer < array_sample.length; outer++){
    for (let inner = 0; inner < array_sample[outer].length; inner++){
        if(maximum < array_sample[outer][inner]){
            maximum = array_sample[outer][inner];
        }
    }
}
console.log(`Maximum number is ${maximum}`);


