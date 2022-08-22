const cardArray = [
    { name: 'tiger', img: './assets/photos/tiger.png' },
    { name: 'monkey', img: './assets/photos/monkey.png' },
    { name: 'crocodile', img: './assets/photos/crocodile.png' },
    { name: 'deer', img: './assets/photos/deer.png' },
    { name: 'lazy', img: './assets/photos/lazy.png' },
    { name: 'lemor', img: './assets/photos/lemor.png' },
    { name: 'colored-bird', img: './assets/photos/colored-bird.png' },
    { name: 'pig', img: './assets/photos/pig.png' },
    { name: 'racoon', img: './assets/photos/racoon.png' },
    { name: 'rhino', img: './assets/photos/rhino.png' },
    { name: 'tiger', img: './assets/photos/tiger.png' },
    { name: 'monkey', img: './assets/photos/monkey.png' },
    { name: 'crocodile', img: './assets/photos/crocodile.png' },
    { name: 'deer', img: './assets/photos/deer.png' },
    { name: 'lazy', img: './assets/photos/lazy.png' },
    { name: 'lemor', img: './assets/photos/lemor.png' },
    { name: 'colored-bird', img: './assets/photos/colored-bird.png' },
    { name: 'pig', img: './assets/photos/pig.png' },
    { name: 'racoon', img: './assets/photos/racoon.png' },
    { name: 'rhino', img: './assets/photos/rhino.png' },
];
// using the sort method to get random order of array´s elements every time.
cardArray.sort(() => 0.5 - Math.random());

const gridDisplay = document.querySelector('#grid');
const results = document.querySelector('#result');
let chosenCards = [];
let chosenCardsIds = [];
const wonCards = [];

// create a function which create 20 image elements and appends them to the div element.
function createBoard() {
    for (let i = 0; i < 20; i++) {
        const card = document.createElement('img');
        //adding an attribute and its value to every created image element
        card.setAttribute('src', './assets/photos/card.png');
        card.setAttribute('data-id', i);
        card.addEventListener('click', flipCard);
        gridDisplay.appendChild(card);
        // console.log(card, i);
    }
}

function checkMatch() {
    const cards = document.querySelectorAll('img');
    const optionOneId = chosenCardsIds[0];
    const optionTwoId = chosenCardsIds[1];
    if (optionOneId === optionTwoId) {
        alert('You have clicked the same image');
    }

    if (chosenCards[0] === chosenCards[1]) {
        alert('you found a match');
        cards[optionOneId].setAttribute('src', './assets/photos/match.png');
        cards[optionTwoId].setAttribute('src', './assets/photos/match.png');
        cards[optionOneId].removeEventListener('click', flipCard);
        cards[optionTwoId].removeEventListener('click', flipCard);

        wonCards.push(chosenCards);
    } else {
        cards[optionOneId].setAttribute('src', './assets/photos/card.png');
        cards[optionTwoId].setAttribute('src', './assets/photos/card.png');
        alert('sorry try again');
    }
    results.innerHTML = wonCards.length;
    chosenCards = [];
    chosenCardsIds = [];
    if (wonCards.length === cardArray.length / 2) {
        results.innerHTML = 'Congratulations You found them all';
    }
}

function flipCard() {
    const cardId = this.getAttribute('data-id');
    chosenCards.push(cardArray[cardId].name);
    chosenCardsIds.push(cardId);
    console.log(chosenCards, chosenCardsIds);

    this.setAttribute('src', cardArray[cardId].img);
    if (chosenCards.length === 2) {
        setTimeout(checkMatch, 500);
    }
}

createBoard();
