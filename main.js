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
        // create an image element
        const card = document.createElement('img');
        //adding an attribute and its value to every created image element
        card.setAttribute('src', './assets/photos/card.png');
        card.setAttribute('key', i);
        card.addEventListener('click', flipCard);
        gridDisplay.appendChild(card);
        // console.log(card, i);
    }
}

function checkMatch() {
    const cards = document.querySelectorAll('img');
    const optionOneId = chosenCardsIds[0];
    const optionTwoId = chosenCardsIds[1];
    // if (optionOneId === optionTwoId) {
    //     alert('You have clicked the same image');
    // }

    if (chosenCards[0] === chosenCards[1]) {
        alert('you found a match');
        // set the chosen cards background to match
        cards[optionOneId].setAttribute('src', './assets/photos/match.png');
        cards[optionTwoId].setAttribute('src', './assets/photos/match.png');
        // remove the eventlistener from the matched cards
        cards[optionOneId].removeEventListener('click', flipCard);
        cards[optionTwoId].removeEventListener('click', flipCard);

        wonCards.push(chosenCards);
        console.log(wonCards);
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
    const cardId = this.getAttribute('key');
    // check if the clicked card is already in the chosenCard array to prevent adding the same card twice
    // if the user clicks the same card twice after each other
    if (chosenCardsIds.length > 0 && chosenCardsIds.includes(cardId)) {
        return;
    } else {
        //add the equivalent animal name from cardArray to the clicked card to the chosenCards array
        chosenCards.push(cardArray[cardId].name);
        // add the id of clicked card to the chosenCardsIds array.
        chosenCardsIds.push(cardId);
        // console.log(chosenCards, chosenCardsIds);
        // show the animal image of the clicked card
        this.setAttribute('src', cardArray[cardId].img);
    }
    // the checkMatch function runs just when the chosenCards array contains two elements
    // this means the function will nut run untill the user choose another card so the function
    //can compare if there is match
    if (chosenCards.length === 2) {
        setTimeout(checkMatch, 200);
    }
}

createBoard();
