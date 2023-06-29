const buttonRock = document.getElementById('rock');
const buttonPaper = document.getElementById('paper');
const buttonScissors = document.getElementById('scissors');

const elements = document.querySelectorAll('.element');

const counter = document.getElementById('counter');
const counterComputer = document.getElementById('counter-computer')

const bottomText = document.getElementById('bottom-text')

const restartButton = document.getElementById('restart-button')
/*
let coso = 1;   
/*
buttonRock.addEventListener('click', () => {
    counter.innerHTML = `<h3>${coso}</h3>`;
})
/*
function getComputerChoice() {
    let generateNumber = Math.floor(Math.random() * 1000);
    let randomNumber = generateNumber;

    if(randomNumber >= 1 && randomNumber <= 333) {
        return "Rock";
    } else if(randomNumber >= 334 && randomNumber <= 666) {
        return "Paper";
    } else if (randomNumber >= 667 && randomNumber <= 999) {
        return "Scissors";
    }
}
*/


// el puto juego

let computerChoice = () => {
    let generateNumber = Math.floor(Math.random() * 1000);
    let randomNumber = generateNumber;

    if(randomNumber >= 1 && randomNumber <= 333) {
        return "Rock";
    } else if(randomNumber >= 334 && randomNumber <= 666) {
        return "Paper";
    } else if (randomNumber >= 667 && randomNumber <= 999) {
        return "Scissors";
    }
}

let computerPoints = 0
let playerPoints = 0

function endGame(){
    elements.forEach(function(element) {
        element.style.pointerEvents = 'none';
        element.style.opacity = '0.5';
    });
}
function restartGame() {   
    playerPoints = 0;
    computerPoints = 0;
}
function UploadCounter(){
    counter.innerText = playerPoints;
    counterComputer.innerText = computerPoints;
}
function restartButtonAppear(){
    restartButton.style.display = 'flex';
}
function restartBottomText(){
    bottomText.innerText = ("Un juego, dos contrincantes...un destino.")
}
restartButton.addEventListener('click', () => {
    restartGame()
    UploadCounter()
    restartButton.style.display = 'none';
    elements.forEach(function(element) {
        element.style.pointerEvents = 'auto';
        element.style.opacity = '1';
    })
    restartBottomText()
})
//tengo que crear un boton que aparezca de la nada y ejecute la funcion restartGame


function isFiveChecker() {
    if(playerPoints === 5){
        bottomText.innerText = ("Buena perro"),
        restartButtonAppear(),
        endGame()
    }else if(computerPoints === 5){
        bottomText.innerText = ("Domadito XD"),
        restartButtonAppear(),
        endGame()
    }
}



function oneRound(a, b) {
    console.log('ola')
    

    if(a === "rock") {
        if(b === "Paper") {
            return bottomText.innerText = ("You lost! Paper wins to rock."),
            computerPoints += 1,
            UploadCounter(),
            isFiveChecker();
        }else if(b === "Scissors") {
            return bottomText.innerText = ("You won! Rock wins to Scissors"),
            playerPoints += 1,
            UploadCounter(),
            isFiveChecker();
        }else if(b === "Rock") {
            return bottomText.innerText = ("Tie.")
        }
    }else if(a === "paper") {
        if(b === "Scissors") {
            return bottomText.innerText = ("You lost! Scissors wins to Paper"),
            computerPoints += 1,
            UploadCounter(),
            isFiveChecker();
        }else if(b === "Rock") {
            return bottomText.innerText = ("You won! Paper wins to Rock"),
            playerPoints += 1,
            UploadCounter(),
            isFiveChecker();
        }else if(b === "Paper") {
            return bottomText.innerText = ("Tie.")
        }
    }else if(a === "scissors") {
        if(b === "Rock") {
            return bottomText.innerText = ("You lost! Rock wins to Scissors"),
            computerPoints += 1,
            UploadCounter(),
            isFiveChecker();
        }else if(b === "Paper") {
            return bottomText.innerText = ("You won! Scissors win to Paper"),
            playerPoints += 1,
            UploadCounter(),
            isFiveChecker();
        }else if(b === "Scissors") {
            return bottomText.innerText = ("Tie.")
        }
    }
}

buttonPaper.addEventListener('click', () =>{
    oneRound('paper', computerChoice(), isFiveChecker())
})
buttonRock.addEventListener('click', () =>{
    oneRound('rock', computerChoice(), isFiveChecker())
})
buttonScissors.addEventListener('click', () =>{
    oneRound('scissors', computerChoice(), isFiveChecker())
})

function game() {

    while(playerPoints !== 5 && computerPoints !== 5 ) {
        oneRound(playerSelection = prompt("What do you pick?", "Scissors").toLowerCase(), getComputerChoice());
        console.log(`Your points currently are ${playerPoints}`);
        console.log(`The computer points currently are ${computerPoints}`);
        console.log("---")
    }
    
    if(playerPoints === 5) {
        bottomText.innerText = ("You made id, ometteto nya baka"),
        restartGame();        
    }else if(computerPoints === 5) {
        bottomText.innerText = ("You lose!!!! XDDDDDDDDD"),
        restartGame();
    }
}

function restartGame() {
    if(playerPoints === 5 || computerPoints === 5) {
        return playerPoints = 0,
        computerPoints = 0
    }
}
