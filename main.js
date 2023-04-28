//Bueno, este es el inicio del proyecto, para comenzar tengo que crear una función que me de como resultado la desición de la computadora. Pensé lograr esto haciendo que se genere un número random del 1 al 999, en el que si sale un número por ejemplo entre el 1 y el 333, elija piedra, del 334 al 666 elija papel, y del 667 al 999 elija tijeras.

//Estas variables son utilizadas para generar un número aleatorio entre 1 y 999

let computerChoice;

function getComputerChoice() {
    let generateNumber = Math.floor(Math.random() * 1000);
    let randomNumber = generateNumber;

    if(randomNumber >= 1 && randomNumber <= 333) {
       computerChoice = "Rock";
    } else if(randomNumber >= 334 && randomNumber <= 666) {
       computerChoice = "Paper";
    } else if (randomNumber >= 667 && randomNumber <= 999) {
       computerChoice = "Scissors";
    }
    console.log(`The computer selection is ${computerChoice}.`);
    return computerChoice;
}

let computerPoints = 0
let playerPoints = 0

function oneRound(a, b) {
    if(a === "rock") {
        if(b === "Paper") {
            return console.log("You lost! Paper wins to rock."),
            computerPoints += 1
        }else if(b === "Scissors") {
            return console.log("You won! Rock wins to Scissors"),
            playerPoints += 1
        }else if(b === "Rock") {
            return console.log("Tie.")
        }
    }else if(a === "paper") {
        if(b === "Scissors") {
            return console.log("You lost! Scissors wins to Paper"),
            computerPoints += 1;
        }else if(b === "Rock") {
            return console.log("You won! Paper wins to Rock"),
            playerPoints += 1
        }else if(b === "Paper") {
            return console.log("Tie.")
        }
    }else if(a === "scissors") {
        if(b === "Rock") {
            return console.log("You lost! Rock wins to Scissors"),
            computerPoints += 1;
        }else if(b === "Paper") {
            return console.log("You won! Scissors win to Paper"),
            playerPoints += 1
        }else if(b === "Scissors") {
            return console.log("Tie.")
        }
    }
}

function game() {

    while(playerPoints !== 5 && computerPoints !== 5 ) {
        oneRound(playerSelection = prompt("What do you pick?", "Scissors").toLowerCase(), getComputerChoice());
        console.log(`Your points currently are ${playerPoints}`);
        console.log(`The computer points currently are ${computerPoints}`);
        console.log("---")
    }
    
    if(playerPoints === 5) {
        console.log("You made id, ometteto nya baka"),
        restartGame();        
    }else if(computerPoints === 5) {
        console.log("You lose!!!! XDDDDDDDDD"),
        restartGame();
    }
}

function restartGame() {
    if(playerPoints === 5 || computerPoints === 5) {
        return playerPoints = 0,
        computerPoints = 0
    }
}

game();

