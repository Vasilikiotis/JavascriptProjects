
const squares = document.querySelectorAll('.square')
const mole = document.querySelector('.mole')
const timeLeft = document.querySelector('#time-left')
const score = document.querySelector('#score')
let resultScore = 0
 /*console.log(squares)
console.log(mole)
console.log(timeLeft)
console.log(score) */
let hitPosition
function randomSquare(){
    //prota kanoume remove to mole
    squares.forEach((square) => square.classList.remove('mole'))

    // prepei tuxaia na vazo ena mole
    let randomSqr = squares[Math.floor(Math.random()*9)]
    randomSqr.classList.add('mole')
    hitPosition = randomSqr.id

}

squares.forEach(square => {
    square.addEventListener('mouseover',()=>{
        if(square.id == hitPosition){
            resultScore++
            score.textContent = resultScore
            hitPosition = null
        }
    })
})
let timerId = null
function moveMole(){
    timerId = setInterval(randomSquare, 500)
}

moveMole()

let currentTime = 60
let countDownTimer
function countDown(){
    currentTime--
    timeLeft.textContent = currentTime

    if (currentTime == 0){
        alert('Game over! Your final score is : ', resultScore)
        clearInterval(countDownTimer)
        location.reload()
    }
}

countDownTimer = setInterval(countDown, 1000)
