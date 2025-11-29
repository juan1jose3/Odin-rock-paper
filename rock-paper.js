
function computerChoice(){
    const randomChoice = Math.floor(Math.random() * 3) + 1;
    let choice;
    if(randomChoice === 1){
        choice = "rock";
    }else if(randomChoice === 2){
        choice = "paper";
    }else{
        choice = "scissors";
    }

    return choice;
}


function humanChoice(){
    const human = prompt("Rock , Paper or Scissors ?: ").toLowerCase();
    return human;
}


function playRound(){
    let gameCount = 0;
    let humanScore = 0;
    let computerScore = 0;

    while(gameCount<5){
        let computer = computerChoice();
        let human = humanChoice()
        if((human == "rock" && computer == "scissors") || (human =="paper" && computer =="rock") ||(human == "scissors" && computer == "paper") ){
            console.log("Human wins!");
            humanScore++;

        }else if(human == computer){
            console.log("Draw!");
            
        }
        else{
            console.log("Computer wins!");
            computerScore ++;
        }
        console.log(`${human} <====> ${computer}`);
        console.log(`Score: ${humanScore} VS ${computerScore}`);
        gameCount++;
    }

    console.log("GAME OVER!");

    if(humanScore > computerScore){
        console.log("Human wins the round!");
    }else if(humanScore === computerScore){
        console.log("Draw, play again!");
    }else{
        console.log("Computer wins the round!");
    }

}


playRound();

