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
const chosenCards = [];
const chosenCardsIds = [];

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

    if (chosenCards[0] === chosenCards[1]) {
        alert('you found a match');
        cards[chosenCardsIds[0]].setAttribute(
            'src',
            './assets/photos/card.png'
        );
        cards[chosenCardsIds[1]].setAttribute(
            'src',
            './assets/photos/card.png'
        );
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
