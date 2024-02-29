/**
 * გამოიცანი რიცხვი (თამაში)
 * მომხარებელს შემოაქვს ჯერ 1 მნიშვნელობა, თუ რამდენი ცდის საშუალება აქვს.
 * კოდმა უნდა დააგენერიროს შემთხვევითი რიცხვი, რომელიც იქნება 1-დან 1000-მდე ინტერვალში მოთავსებული.
 * მომხარებელს აქვს უფლება იმდენჯერ შემოიტანს, რიცხვი რა რიცხვსაც მიუთითებს პირველ ინპუტზე.
 * თუ ინპუტი იყო 0 ან NaN მაშინ მცდელობის რაოდენობა უნდა იყოს 10-ს ტოლი.
 * როცა შემოიტანს მნიშვნელობას (მცდელობის ფარგლებში) კოდმა უნდა დალოგოს: უფრო დაბალი, უფრო მაღალი ან სწორი გამოცნობა.
 */


const RANDOM_NUMBER = Math.floor(Math.random() * 1000 + 1);
const DEFAULT_NUM_OF_TRIES = 10;
let tries = getNumOfTries();
let userInput;
let isWinner = false;



function getNumOfTries() {
    const input = +prompt("Please enter number of tries: ");
    if (isNaN(input) || Number(input) <= 0) {
        return DEFAULT_NUM_OF_TRIES;
    }
    return input;
}

function getNumber() {
    while (true) {
        let input = prompt("Please enter a number:\n Valid numbers are from 1 to 1000: ");
        if (input === null) {
            return null;
        } else if (input.trim().length === 0) {
            alert("This field can not be empty! ");
            continue;
        } else if (isNaN(+input)) {
            alert("You must enter a valid number! ");
            continue;
        } else if (+input < 1 || +input > 1000) {
            alert("Valid numbers are from 1 to 1000! ");
            continue;
        } else if (Math.floor(+input) !== +input) {
            alert("You must enter a natural number! ");
            continue;
        }
        return +input;
    }
}

function gameOver() {
    return isWinner || tries <= 0;
}

function game() {
    while (!gameOver()) {
        --tries;
        userInput = getNumber();
        if (userInput === null) {
            console.log('Game terminated...')
            return;
        } else if (userInput === RANDOM_NUMBER) {
            alert(`YOU WON! the number was ${RANDOM_NUMBER}`);
            isWinner = true;
            break;
        } else if (userInput < RANDOM_NUMBER && !gameOver()) {
            alert(`Wrong! Enter higher number. You have ${tries} tries left`);
        } else if (userInput > RANDOM_NUMBER && !gameOver()) {
            alert(`Wrong! Enter lower number. You have ${tries} tries left`);
        }
    }

    if (!isWinner) {
        alert(`YOU LOST. You Couldn't guess the number and you have 0 tries left. Random number was ${RANDOM_NUMBER}`);
    }
}


game();
