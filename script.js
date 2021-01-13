// Player can select from rock, paper, or scissors, returns results, outputs selection.

const rock = document.querySelector('#rock');
const paper = document.querySelector('#paper');
const scissors = document.querySelector('#scissors');

let wins = 0;
let losses = 0;
let draws = 0;

rock.addEventListener("click", () => {
    console.log('You have chosen: Rock!');
    rockPaperScissors("Rock");
});
paper.addEventListener("click", () => {
    console.log('You have chosen: Paper!');
    rockPaperScissors("Paper");
});
scissors.addEventListener("click", () =>{
    console.log('You have chosen: Scissors!');
    rockPaperScissors("Scissors");
});

// Computer randomly selects rock, paper, or scissors, returns result, outputs selection. 

function computerPlay(rock, paper, scissors) {
    let rng = Math.floor((Math.random() * 3) + 1);
    let choice = "";
    if (rng === 1) {
        choice = "Rock";
        console.log("The enemy has chosen: " + choice + "!");
        return choice;
    } else if (rng === 2) {
        choice = "Paper";
        console.log("The enemy has chosen: " + choice + "!");
        return choice;
    } else {
        choice = "Scissors";
        console.log("The enemy has chosen: " + choice + "!");
        return choice;
    }
}

// Rock, paper, scissors! Compares results of functions above, and outputs the winner.

function rockPaperScissors(choice) {
    playerSelection = choice;
    computerSelection = computerPlay();

    let result;

    // Winning results

    if (playerSelection === "Rock" && computerSelection === "Scissors") {
        console.log("You won, Rock beats Scissors!");
        document.querySelector('.text').textContent = `You chose: ${choice}.\r\n\r\nThe enemy chose: ${computerSelection}.\r\n\r\nYou won, Rock beats Scissors!!`;
        result = 1;
    } else if (playerSelection === "Paper" && computerSelection === "Rock") {
        console.log("You won! Paper beats rock!");
        document.querySelector('.text').textContent = `You chose: ${choice}.\r\n\r\nThe enemy chose: ${computerSelection}.\r\n\r\nYou won! Paper beats rock!`;
        result = 1;
    } else if (playerSelection === "Scissors" && computerSelection === "Paper") {
        console.log("You won! Scissors beats paper!");
        document.querySelector('.text').textContent = `You chose: ${choice}.\r\n\r\nThe enemy chose: ${computerSelection}.\r\n\r\nYou won, Scissors beats Paper!!`;
        result = 1;

    // Losing results

    } else if (playerSelection === "Rock" && computerSelection === "Paper") {
        console.log("You lost bot! Paper beats rock n00b!");
        document.querySelector('.text').textContent = `You chose: ${choice}.\r\n\r\nThe enemy chose: ${computerSelection}.\r\n\r\nYou lost bot! Paper beats rock n00b!`;
        result = 2;
    } else if (playerSelection === "Paper" && computerSelection === "Scissors") {
        console.log("You lost bot! Scissors beats paper you n00b!!");
        document.querySelector('.text').textContent = `You chose: ${choice}.\r\n\r\nThe enemy chose: ${computerSelection}.\r\n\r\nYou lost bot! Scissors beats Paper n00b!`;
        result = 2;
    } else if (playerSelection === "Scissors" && computerSelection === "Rock") {
        console.log("You lost bot! Scissors doesn't beat rock n00b, try again!");
        document.querySelector('.text').textContent = `You chose: ${choice}.\r\n\r\nThe enemy chose: ${computerSelection}.\r\n\r\nYou lost bot! Scissors doesn't beat rock n00b!`;
        result = 2;

    // Results ending in draw

    } else if (playerSelection === "Rock" && computerSelection === "Rock") {
        console.log("It's a draw, Rock doesn't beat rock! Try again!");
        document.querySelector('.text').textContent = `You chose: ${choice}.\r\n\r\nThe enemy chose: ${computerSelection}.\r\n\r\nIt's a draw!\r\n\r\nTry again!`;
        result = 3;
    }  else if (playerSelection === "Paper" && computerSelection === "Paper") {
        console.log("It's a draw! Paper doesn't beat paper, try again!");
        document.querySelector('.text').textContent = `You chose: ${choice}.\r\n\r\nThe enemy chose: ${computerSelection}.\r\n\r\nIt's a draw!\r\n\r\nTry again!`;
        result = 3;
    }  else if (playerSelection === "Scissors" && computerSelection === "Scissors") {
        console.log("It's a draw! Scissors doesn't beat scissors, try again!");
        document.querySelector('.text').textContent = `You chose: ${choice}.\r\n\r\nThe enemy chose: ${computerSelection}.\r\n\r\nIt's a draw!\r\n\r\nTry again!`;
        result = 3;
    } else {
        console.log("Hmm, that didn't seem to work out. Try again!")
    }

    // The loop! Will count the amount of wins/losses

    while (wins < 5 && losses < 5) {
        if (result === 1) {
            wins++;
            console.log("Current score: " + wins + " wins, " + losses + " losses, " + draws + " draws!");
            document.querySelector('#human').textContent = wins;
            if (wins === 5) {
                console.log("YOU WON THE GAME!!!!");
                document.querySelector('.text').textContent = `YOU WON!\r\n\r\nYou're officially slightly better than a bot! :D`;
                alert("YOU WON");
            } else if (wins === 4) {
                console.log("Almost there! You're just one win away from winning the game!");
            }
            break;
        } else if (result === 2) {
            losses++;
            console.log("Current score: " + wins + " wins, " + losses + " losses, " + draws + " draws!");
            document.querySelector('#computer').textContent = losses;
            if (losses === 5) {
                console.log("YOU LOST THE GAME YOU BOT, HAHAHAHAHA");
                document.querySelector('.text').textContent = `YOU LOST! HAHAHAHA\r\n\r\nYou're officially even worse than a bot :p`;
                alert("YOU LOST");
            } else if (losses === 4) {
                console.log("Oh no!! You're one loss away from being a complete bot!");
            }
            break;
        } else if (result === 3) {
            draws++;
            console.log("Current score: " + wins + " wins, " + losses + " losses, " + draws + " draws!");
            document.querySelector('#draw').textContent = draws;
            break;
        } else {
            console.log("Uhhhhmmm, that didn't seem to work. Please try again!")
            break;
        }
    }
}