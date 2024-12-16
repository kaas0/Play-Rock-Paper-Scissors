
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
    let computerChoice = convertsRandomToChoice().toLowerCase();
    console.log(computerChoice);
    let playerChoice = checksPlayerChoice();
    console.log(playerChoice);
    if ( playerChoice === "rock" && computerChoice === "scissors" || playerChoice === "paper" && computerChoice === "rock" || playerChoice === "scissors" && computerChoice === "paper"){
        alert("You are the winner") 
    }else if (playerChoice === "rock" && computerChoice === "rock" || playerChoice === "paper" && computerChoice === "paper" || playerChoice === "scissors" && computerChoice === "scissors"){
        alert("It's a tie!")
    }else {
        alert("You lost!Better luck next time")
    }
}

getsWinner()