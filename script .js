function getComputerChoice (){
    // var choice = Math.floor(Math.random()*3);
    // console.log(choice);

    var options = ["rock", "paper", "scissors"];
    var number = Math.floor(Math.random()*options.length)
    var choice = options[number]
    console.log(choice);
}
getComputerChoice() 