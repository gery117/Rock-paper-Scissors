
function getComputerChoice(){
    // var choice = Math.floor(Math.random()*3);
    // console.log(choice);

    // var options = ["rock", "paper", "scissors"];
    // var number = Math.floor(Math.random()*options.length)
    // var choice = options[number]
    // console.log(choice); 

    let options = ["rock", "paper", "scissors"];
    let choice = Math.floor(Math.random()*options.length);

    // console.log (choice)

    if (choice <= 0){
        choice = options[0];
    } 
    else if (choice <= 1) {
        choice = options[1];
    } 
    else {
        choice = options[2];
    }
    // console.log(choice);
    return choice

}

// getComputerChoice(); 


// function getPlayerChoice(){
//     let userChoice = prompt("please enter a choice",).toLowerCase();
//     // console.log(userChoice);
//     return userChoice
// }

// getPlayerChoice();


// let computerSelection = getComputerChoice();
// let playerSelection = getPlayerChoice();

// console.log(computerSelection);
// console.log(playerSelection);

let computerSelection;
let playerSelection;
let playerScore;
let computerScore;


function playRound(playerSelection,computerSelection){

    let userChoice = prompt("please enter a choice",).toLowerCase();

    playerSelection = userChoice;

    computerSelection = getComputerChoice()
 
    if(playerSelection === "rock" && computerSelection === "paper"){
        alert("you lose paper beats rock");
        console.log("you lose paper beats rock");
        computerScore ++
    }
    else if(playerSelection === "rock" && computerSelection === "scissors"){
        alert("you win rock beats scissors");
        console.log("you win rock beats scissors");
        playerScore ++
    }
    else if(playerSelection === "rock" && computerSelection === "rock"){
            alert("its a tie");
            console.log("its a tie");
    }
    
    else if (playerSelection === "paper" && computerSelection === "rock"){
            alert(" you win paper beats rock")
            console.log(" you win paper beats rock");
            playerScore ++
    }
    else if (playerSelection === "paper" && computerSelection === "scissors"){
            alert("you lose scissors beats paper");
            console.log("you lose scissors beats paper");
            computerScore ++
    }
    else if (playerSelection === "paper" && computerSelection === "paper"){
            alert("its a tie");
            console.log("its a tie");
    }
    
    else if (playerSelection ==="scissors" && computerSelection === "paper"){
            alert("you win scissors beats paper");
            console.log("you win scissors beats paper");
            playerScore ++
    }
     else if (playerSelection ==="scissors" && computerSelection === "rock"){
            alert("you lose rock beats scissors");
            console.log("you lose rock beats scissors");
            computerScore ++
    }
     else if (playerSelection ==="scissors" && computerSelection === "scissors"){
            alert("its a tie");
            console.log("its a tie");
    }
    else{
        alert("please only write rock, paper or scissors" )
    }


}

// function game(){
//     playRound(playerSelection,computerSelection);
//     playRound(playerSelection,computerSelection);
//     playRound(playerSelection,computerSelection);
//     playRound(playerSelection,computerSelection);
//     playRound(playerSelection,computerSelection);

// }

// game();


function game(){
    playerScore = 0
    computerScore = 0

    for(i=0; i<5; i++){
        playRound(playerSelection,computerSelection);
    }

    if(playerScore > computerScore) {
    console.log(`you win! you: ${playerScore} computer: ${computerScore}`)
    } 
    else{
    console.log(`you lose! you: ${playerScore} computer: ${computerScore}`)

    }
}

game();


// let gameResult = playRound(playerSelection,computerSelection);
// console.log(gameResult);

// function game(){
//     playRound(playerSelection,computerSelection);
//     playRound(playerSelection,computerSelection);
//     playRound(playerSelection,computerSelection);
//     playRound(playerSelection,computerSelection);
//     playRound(playerSelection,computerSelection);

// }
        

// game();