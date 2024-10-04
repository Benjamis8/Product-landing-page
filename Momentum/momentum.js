const clock = document.querySelector('.clock');
const main = document.querySelector('main');
const quote = document.querySelector('.quote');

let userName = 'benj';

function setupClock() {
    const dateObj = new Date();
    let hours = dateObj.getHours();
    let minutes = dateObj.getMinutes();
    
// :0-9
    if (hours <= 9) {
        hours = `0${hours}`;
    }
    if (minutes <= 9) {
        minutes = `0${minutes}`;
    }
    
    let time = `${hours}:${minutes}`;
    clock.textContent = time

// not working yet timed greeting
    if (hours >= 5 && hours < 12) {
        main.textContent = `Goodmorning, ${userName}`
    } else if (hours >= 12 && hours < 17) {
        main.textContent = `Good Afternoon, ${userName}`
    } else if (hours >= 17 && hours < 20) {
        main.textContent = `Good Evening, ${userName}`
    }
}

// function getQuote() {

// }

setupClock();
