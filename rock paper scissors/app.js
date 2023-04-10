//θα επιλεξω τα σπαν και θα τα βαλω σε αντιστοιχες μεταβλητες

const computerChoiceDisplay = document.getElementById('computer-choice')
const userChoiceDisplay  = document.getElementById('user-choice')
const resultDisplay = document.getElementById('result')  

/* console.log(computerChoiceDisplay)
console.log(userChoiceDisplay)
console.log(resultDisplay) */

const userButtons = document.querySelectorAll('button')

console.log(userButtons)

// tha kanoume leitourgika ta buttons
let userChoice

userButtons.forEach(userButton => userButton.addEventListener('click',(e) =>{
 userChoice = e.target.id
 userChoiceDisplay.innerHTML = userChoice
 generateComputerChoice()
 getResults(userChoice, computerChoice)
}))
let computerChoice
function generateComputerChoice(){
   const randomNumber = Math.floor(Math.random()*3 + 1) 
   /* console.log(randomNumber) */
   switch(randomNumber){
    case 1:
        computerChoice = 'rock'
        break;
    case 2:
        computerChoice = 'paper'
        break;
    case 3:
        computerChoice = 'scissors'
        break;
   }
   computerChoiceDisplay.innerHTML = computerChoice
}

//edo tha apothikeusete to keimeno analoga me to pios kerdise
let result 
function getResults(userChoice, computerChoice){
    if(userChoice+computerChoice ==='rockpaper' || userChoice+computerChoice === 'scissorsrock'|| userChoice+computerChoice === 'paperscissors'){
        result = 'You Lost!'
        resultDisplay.innerHTML = result
    }else if(userChoice+computerChoice ==='paperrock' || userChoice+computerChoice === 'rockscissors'|| userChoice+computerChoice === 'scissorspaper'){
        result = 'You Won!'
        resultDisplay.innerHTML = result
    }else{
        result = "It's a Draw"
        resultDisplay.innerHTML = result
    }
}




