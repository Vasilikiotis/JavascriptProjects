// prepei na ftiakso tis 12 kartes
// tha ftiakso enan pinaka kai mesa tha valo objects
//kathe object tha antiprosopeuei mia karta
//kathe karta tha einai dipli 

//thelo enan pinaka me to onoma cardArray
//kai mesa thelo objects pou na exoun properties
// name : 'fries' 
// img : 'images/fries.png'
const resultDisplay = document.getElementById('result')
const cardArray = [
    {
        name: 'fries',
        img: 'images/fries.png'
    },
    {
        name: 'cheeseburger',
        img: 'images/cheeseburger.png'
    },
    {
        name: 'hotdog',
        img: 'images/hotdog.png'
    },
    {
        name: 'ice-cream',
        img: 'images/ice-cream.png'
    },
    {
        name: 'milkshake',
        img: 'images/milkshake.png'
    },
    {
        name: 'pizza',
        img: 'images/pizza.png'
    },
    {
        name: 'fries',
        img: 'images/fries.png'
    },
    {
        name: 'cheeseburger',
        img: 'images/cheeseburger.png'
    },
    {
        name: 'hotdog',
        img: 'images/hotdog.png'
    },
    {
        name: 'ice-cream',
        img: 'images/ice-cream.png'
    },
    {
        name: 'milkshake',
        img: 'images/milkshake.png'
    },
    {
        name: 'pizza',
        img: 'images/pizza.png'
    }
]

/* console.log(cardArray) */

//auto kanei tuxaio sort ston pinaka
cardArray.sort(()=> 0.5 - Math.random())
/* console.log(cardArray) */

//thelo na epilekso to div me id grid kai na to valo se mia
//metavliti me to onoma grid

/* const grid = document.getElementById('grid') */
const grid = document.querySelector('#grid')
let card 
function createBoard(){
    for(let i = 0; i<cardArray.length; i++){
        card = document.createElement('img')
        card.setAttribute('src', 'images/blank.png')
        card.setAttribute('data-id', i)
        /* console.log(card) */

        //vazo ta stoixeia sto div = grid

        grid.appendChild(card)
        card.addEventListener('click', flipCard)
        
       
    }   
}
createBoard()
let cardsWon = []
let cardId
function checkMatch(){
    const cards = document.querySelectorAll('img')
   /*  console.log(cards) */
    if(cardsChosenId[0] === cardsChosenId[1]){
        cards[cardsChosenId[0]].setAttribute('src', 'images/blank.png')
        cards[cardsChosenId[1]].setAttribute('src', 'images/blank.png')
        alert('You have clicked the same image!')
    }
    else if (cardsChosen[0] === cardsChosen[1]){
        alert('You found a match') 
        cards[cardsChosenId[0]].setAttribute('src', 'images/white.png')
        cards[cardsChosenId[1]].setAttribute('src', 'images/white.png')
        cardsWon.push(cardsChosen[0])
        cardsWon.push(cardsChosen[1])
        
      
    }
    else {
        cards[cardsChosenId[0]].setAttribute('src', 'images/blank.png')
        cards[cardsChosenId[1]].setAttribute('src', 'images/blank.png')  
        alert('Sorry try again!')     
    }
    cardsChosen = []
    cardsChosenId = []
    resultDisplay.textContent = cardsWon.length /2 
    if(cardsWon.length === cardArray.length){
        resultDisplay.textContent = 'Congratulations! You found them all!'
    }


}
let cardsChosenId = []
let cardsChosen = []
function flipCard(){
     cardId = this.getAttribute('data-id')
/*     console.log('clicked', cardId)
    console.log(cardArray[cardId].name) */
    cardsChosen.push(cardArray[cardId].name)
    /* console.log(cardsChosen) */
    this.setAttribute('src', cardArray[cardId].img )
    cardsChosenId.push(cardId)
    /* console.log(cardsChosenId) */
    if(cardsChosen.length == 2){
       setTimeout(checkMatch, 500)
    }
}

