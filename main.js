//Global Scope//
humanScore = 0;
computerScore = 0;


/* Ask for a valid player name, and the uses the name to welcome the guest*/
function getsPlayerName() {
    let playerName;
    while (true) {
        playerName = prompt("Hello challenger, tell me your name", "John Doe");

        if (playerName === null) {
            alert("You must enter the name");
        }
        else if (playerName.trim() === "") {
            alert("You must enter the name");
        }
        else if (!/^[a-zA-Z\s]+$/.test(playerName)) {
            alert("Please only enter letters");
        }
        else {
            break;
        }
    }
    alert(`Get Ready to Play Rock, Paper, Scissors ${playerName}`);
    return playerName
}
// Generates an integer from 0 to 299 //
function getsRandomNumber() {
    return Math.floor(Math.random() * 300); 
}



function convertsRandomToChoice (){
    let computerChoice;
    // Assigns the random integer to one of the three values Rock, Paper, Scissors //
    let randomToChoice = getsRandomNumber();

        if (randomToChoice >= 0 && randomToChoice < 100 ) {
            return computerChoice = "Rock";
           
        } else if (randomToChoice >= 100 && randomToChoice < 200) {
           return computerChoice = "Paper";
            
        } else if (randomToChoice >= 200 && randomToChoice < 300) {
            return computerChoice = "Scissors";
            
        }else {
            return computerChoice = undefined;
            
        }
        return computerChoice;
}
// Gets the player choice using a promt built in function //
function getsPlayerChoice() {
    playerChoice = prompt("Pick Rock, Paper or Scissors").trim().toLowerCase()
    while (playerChoice === null) {
        break;
    }
    return playerChoice
}
// Evaluate of the choice of the player was valid//
function checksPlayerChoice() {
    let playerChoice = getsPlayerChoice();
    
   
    while (playerChoice !== "scissors" && playerChoice !== "paper" && playerChoice !== "rock") {
        alert("That's not a valid choice");
        playerChoice = getsPlayerChoice();
    }
    
    alert(`${playerChoice} huh?Lets see.. `);
    return playerChoice;
}

function getsWinner() {
    
    let playerScore = 0;
    let machineScore = 0;

   
    do {
        let computerChoice = convertsRandomToChoice().toLowerCase();
        console.log(`Computer choice: ${computerChoice}`);
        
        let playerChoice = checksPlayerChoice();
        console.log(`Player choice: ${playerChoice}`);

        // Compare choices to determine the winner
        if (
            (playerChoice === "rock" && computerChoice === "scissors") ||
            (playerChoice === "paper" && computerChoice === "rock") ||
            (playerChoice === "scissors" && computerChoice === "paper")
        ) {
            playerScore += 1;
            alert("You are the winner of this round!");
        } else if (playerChoice === computerChoice) {
            alert("It's a tie this round!");
        } else {
            machineScore += 1;
            alert("You lost this round! Better luck next time.");
        }

        
        alert(`Current Scores:\nPlayer: ${playerScore}\nMachine: ${machineScore}`);
    } while (playerScore < 5 && machineScore < 5);
    if (playerScore === 5) {
        alert("Congratulations! You are the overall winner!");
    } else {
        alert("The machine wins this time. Better luck next game!");
    }
}
getsWinner()