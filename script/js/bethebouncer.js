// You are working at a very fancy new nightclub and in charge of letting people in based on their age.
// If they are not 18-years-old and above, you cannot let them in. Please send them a nice personalized message letting them know.
// In your log message, note if they are a Mr. or Mrs./Ms. depending on their gender.
// Array of objects will be provided by instructor

const nightClubRegister = [
    {
        name: 'Tony',
        lastname: 'Stark',
        age: 25,
        gender: 'male'
    },
    {
        name: 'Harry',
        lastname: 'Potter',
        age: 16,
        gender: 'male'
    },
    {
        name: 'Hermione',
        lastname: 'Granger',
        age: 17,
        gender: 'female'
    },
    {
        name: 'Steve',
        lastname: 'Rogers',
        age: 62,
        gender: 'male'
    }
];


// for (let index = 0; index < nightClubRegister.length; index++){
//     if (nightClubRegister[index].age < 18) {
//         console.log("minor");
//         console.log(nightClubRegister[index]);
//     } else {
//         console.log("Is old");
//         console.log(nightClubRegister[index]);
//     }
// }

// for (let index = 0; index < nightClubRegister.length; index++){
//     if (nightClubRegister[index].gender == "male") {
//         // console.log(nightClubRegister[index]);
//         console.log("Mr. "+nightClubRegister[index].name + " " +nightClubRegister[index].name);
//     } else {
//         console.log("Mrs/Ms. "+nightClubRegister[index].name + " " +nightClubRegister[index].lastname);
//     }
// }

for (let index = 0; index < nightClubRegister.length; index++){
    let addressee = "";
if (nightClubRegister[index].gender === "male"){
    addressee = "Mr";
} else if (nightClubRegister[index].gender === "female"){
    addressee = "Mrs/Ms";
}
if (nightClubRegister[index].age >= 18){
    console.log(`Welcome, ${addressee} ${nightClubRegister[index].name} ${nightClubRegister[index].lastname} You are on the list`);
} else {
    console.log(`Sorry, ${addressee} ${nightClubRegister[index].name} ${nightClubRegister[index].lastname} You are a minor`)
}
}

