let hsc = document.querySelector("#hsc");
let csc = document.querySelector("#csc");
let dw = document.querySelector("#dw");
// #container
//comment
let h = document.createTextNode("Human Score: ");
const c = document.createTextNode("Computer Score: ");
let displayWinner = document.createTextNode("Winner is: ");
// let choices = document.createTextNode("Comp chose: ")
// let choicesHum = document.createTextNode("You chose: ")
const choicesHum = document.createElement("h4");
const choices = document.createElement("h4");


let humWin = document.createTextNode("Human");
let compWin = document.createTextNode("Computer");

let contentH = document.createElement("h5");
let contentC = document.createElement("h5");
let contentWinner = document.createElement("h4");
let chose = document.createElement("h4");
// chose.classList.add("chose");
// choseHum.classList.add("choseHum");
let choseHum = document.createElement("h4");
// div
contentH.classList.add("content");
    
function getComputerChoice(){
    let a = Math.random();
        
    if(a >= 0 && a<=0.333333){
        return "rock"
    }else if(a > 0.3333333 && a<=0.666666){
        return "paper";
    }else{
        return "scissors"
    }
}
let compThrows = getComputerChoice();
// console.log(compThrows);
let humanChoice;
// function getHumanChoice(){
//     humanChoice = prompt("Enter choice: ");
//     return humanChoice.toLocaleLowerCase();
// }

let scoreHuman = 0, scoreComp = 0;


function playRound(humanChoice,compChoice){

    if(humanChoice === compChoice){
        contentWinner.textContent = "No one, its a draw!";
    }

    else if(humanChoice === "rock" && compChoice=== "scissors"){
        scoreHuman +=1;
        console.log("Human Wins");
        contentWinner.textContent = "Human";
        
    }else if(humanChoice==="paper" && compChoice ==="rock"){
        scoreHuman+=1;
        console.log("Human Wins");
        contentWinner.textContent = "Human";
    }else if(humanChoice==="scissors" && compChoice==="paper"){
        scoreHuman+=1;
        console.log("Human Wins");
        contentWinner.textContent = "Human";
    }else{
        scoreComp+=1;
        console.log("Computer Wins");
        contentWinner.textContent = "Computer";
    }
    contentH.textContent = scoreHuman;
    contentC.textContent = scoreComp;
    choices.textContent = `Comp chose: `;
    choicesHum.textContent = `You chose: `;
    console.log("computer chose: ", compChoice);

    console.log("Score of Human: " , scoreHuman , " Score of Computer ", scoreComp)
    console.log("==========");
    contentH.textContent = scoreHuman;
    contentH.style.color = "green";
    contentH.style.fontSize="25px";
    contentC.textContent = scoreComp;
    contentC.style.fontSize="25px";
    contentC.style.color = "red";
    // compChoice.style.fontSize = "25px";
    // humanChoice.style.fontSize = "25px";
    choseHum.style.fontSize="25px";
    chose.style.fontSize="25px";
    chose.textContent = compChoice;
    choseHum.textContent = humanChoice;
    contentWinner.style.fontSize="25px";

    if (contentWinner.textContent === "Human") {
        choseHum.style.color = "green";
        chose.style.color = "red"; // Reset computer choice color
    } else if (contentWinner.textContent === "Computer") {
        choseHum.style.color = "green";
        chose.style.color = "red"; // Reset human choice color
    } else {
        choseHum.style.color = "red";
        chose.style.color = "green";
    }
    hsc.innerHTML = '';
    hsc.appendChild(h);
    hsc.appendChild(contentH);
    csc.appendChild(c);
    csc.appendChild(contentC);
    dw.appendChild(choicesHum);
    dw.appendChild(choseHum);
    dw.appendChild(choices);
    dw.appendChild(chose);
    dw.appendChild(displayWinner);
    dw.appendChild(contentWinner);

}

function handleClick(humanChoice) {
    return function() {
        let compChoice = getComputerChoice();
        playRound(humanChoice, compChoice);
    }
    
}

// humanChoice = getHumanChoice();
// compChoice = getComputerChoice();

let rock = document.querySelector("#rock");
rock.addEventListener("click",handleClick("rock"));

let scissor = document.querySelector("#scissor");
scissor.addEventListener("click",handleClick("scissors"));

let paper = document.querySelector("#paper");
paper.addEventListener("click",handleClick("paper"));

// playRound(humanChoice,compChoice);

//     let b;
//     function getHumanChoice(){
//         b = prompt("Enter your choice: ");
//         return b;
//     }
    

//     function playRound(humanChoice, compChoice){
//         if(bool){
//         if(humanChoice == "q"){
//             bool = false;
//         }
        // if(humanChoice == "rock" && compChoice== "scissors"){
        //     scoreHuman +=1;
        // }else if(humanChoice=="paper" && compChoice =="rock"){
        //     scoreHuman+=1;
        // }else if(humanChoice=="scissors" && compChoice=="paper"){
        //     scoreHuman+=1;
        // }else{
        //     scoreComp+=1;
        // }
        // console.log("computer chose: ", compChoice);

        // console.log("Score of Human: " , scoreHuman , " Score of Computer ", scoreComp)
//     }
//     }

//     const humanChoice = getHumanChoice();
//     const compChoice = compThrows();

//     playRound(humanChoice,compChoice);
    

// }