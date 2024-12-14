function getRandomArbitrary(min, max) {
    return Math.random() * (max - min) + min;
  }

  computerChoice = getRandomArbitrary(0,100)

 console.log(computerChoice)

 if (computerChoice <= 99 && computerChoice >= 66 ) {
    computerChoice ="Rock" 
 } else if (computerChoice<66 && computerChoice >= 33) {
    computerChoice = "Paper"
 } else {
    computerChoice="scissors"
 }
 computerChoice = computerChoice.toLowerCase()
 console.log(computerChoice.toLowerCase())

 playerChoice = prompt("Rock, Paper or scissors.Choose one!", "Paper");
 playerChoice = playerChoice.toLowerCase();
 
    console.log(playerChoice)

    


    function getWinner(computerChoice, playerChoice) {
        if (computerChoice === playerChoice) {
            return "It's a tie!";
        } else if (
            (computerChoice === "scissors" && playerChoice === "paper") ||
            (computerChoice === "paper" && playerChoice === "rock") ||
            (computerChoice === "rock" && playerChoice === "scissors")
        ) {
            return "You lost";
        } else {
            return "You won";
        }
    }
    
    alert(getWinner(computerChoice.toLowerCase(), playerChoice.toLowerCase()));
