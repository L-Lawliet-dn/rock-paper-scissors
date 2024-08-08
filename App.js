console.log("Press \"q\" to quit game");
let bool = false;
let scoreComp = 0, scoreHuman=0;
let a = confirm("play?");
if(a ==true){
    bool = true;
}

while(bool){
    
    let compThrows = function getComputerChoice(){
        let a = Math.random();
        
        if(a >= 0 && a<=0.33){
            return "rock"
        }else if(a > 0.33 && a<=0.66){
            return "paper";
        }else{
            return "scissors"
        }
    }
    let b;
    function getHumanChoice(){
        b = prompt("Enter your choice: ");
        return b;
    }
    

    function playRound(humanChoice, compChoice){
        if(bool){
        if(humanChoice == "q"){
            bool = false;
        }
        if(humanChoice == "rock" && compChoice== "scissors"){
            scoreHuman +=1;
        }else if(humanChoice=="paper" && compChoice =="rock"){
            scoreHuman+=1;
        }else if(humanChoice=="scissors" && compChoice=="paper"){
            scoreHuman+=1;
        }else{
            scoreComp+=1;
        }
        console.log("computer chose: ", compChoice);

        console.log("Score of Human: " , scoreHuman , " Score of Computer ", scoreComp)
    }
    }

    const humanChoice = getHumanChoice();
    const compChoice = compThrows();

    playRound(humanChoice,compChoice);
    

}