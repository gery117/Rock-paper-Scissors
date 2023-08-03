
function playRound(playerSelection,computerSelection){

    function getComputerChoice (){
        // var choice = Math.floor(Math.random()*3);
        // console.log(choice);

        // var options = ["rock", "paper", "scissors"];
        // var number = Math.floor(Math.random()*options.length)
        // var choice = options[number]
        // console.log(choice);

        var options = ["rock", "paper", "scissors"];
        var choice = Math.floor(Math.random()*options.length);

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
    // getComputerChoice() 

    function getPlayerChoice(){
        var userChoice = prompt("please enter a choice",).toLowerCase();
        // console.log(userChoice);
        return userChoice
    }
    
    getPlayerChoice()

}

