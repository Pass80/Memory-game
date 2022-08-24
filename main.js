const cardArray1 = [
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

const cardArray2 = [
    { name: 'tiger', img: './assets/photos/hard/tiger.png' },
    { name: 'bear', img: './assets/photos/hard/bear.png' },
    { name: 'black-panther', img: './assets/photos/hard/black-panther.png' },
    { name: 'cat', img: './assets/photos/hard/cat.png' },
    { name: 'wolf', img: './assets/photos/hard/wolf.png' },
    { name: 'cow', img: './assets/photos/hard/cow.png' },
    { name: 'dog', img: './assets/photos/hard/dog.png' },
    { name: 'duck', img: './assets/photos/hard/duck.png' },
    { name: 'eagle', img: './assets/photos/hard/eagle.png' },
    { name: 'fox', img: './assets/photos/hard/fox.png' },
    { name: 'giraffe', img: './assets/photos/hard/giraffe.png' },
    { name: 'goat', img: './assets/photos/hard/goat.png' },
    { name: 'hippo', img: './assets/photos/hard/hippo.png' },
    { name: 'kater', img: './assets/photos/hard/kater.png' },
    { name: 'lemor', img: './assets/photos/hard/lemor.png' },
    { name: 'leopard', img: './assets/photos/hard/leopard.png' },
    { name: 'lion', img: './assets/photos/hard/lion.png' },
    { name: 'monkey', img: './assets/photos/hard/monkey.png' },
    { name: 'owl', img: './assets/photos/hard/owl.png' },
    { name: 'rabbit', img: './assets/photos/hard/rabbit.png' },
    { name: 'tiger', img: './assets/photos/hard/tiger.png' },
    { name: 'bear', img: './assets/photos/hard/bear.png' },
    { name: 'black-panther', img: './assets/photos/hard/black-panther.png' },
    { name: 'cat', img: './assets/photos/hard/cat.png' },
    { name: 'wolf', img: './assets/photos/hard/wolf.png' },
    { name: 'cow', img: './assets/photos/hard/cow.png' },
    { name: 'dog', img: './assets/photos/hard/dog.png' },
    { name: 'duck', img: './assets/photos/hard/duck.png' },
    { name: 'eagle', img: './assets/photos/hard/eagle.png' },
    { name: 'fox', img: './assets/photos/hard/fox.png' },
    { name: 'giraffe', img: './assets/photos/hard/giraffe.png' },
    { name: 'goat', img: './assets/photos/hard/goat.png' },
    { name: 'hippo', img: './assets/photos/hard/hippo.png' },
    { name: 'kater', img: './assets/photos/hard/kater.png' },
    { name: 'lemor', img: './assets/photos/hard/lemor.png' },
    { name: 'leopard', img: './assets/photos/hard/leopard.png' },
    { name: 'lion', img: './assets/photos/hard/lion.png' },
    { name: 'monkey', img: './assets/photos/hard/monkey.png' },
    { name: 'owl', img: './assets/photos/hard/owl.png' },
    { name: 'rabbit', img: './assets/photos/hard/rabbit.png' },
];
const levelModal = document.getElementById('myModal');
const endModal = document.getElementById('endModal');
const easy = document.getElementById('easy');
const normal = document.getElementById('normal');
const hard = document.getElementById('hard');
const gridDisplay1 = document.querySelector('#grid1');
const gridDisplay2 = document.querySelector('#grid2');
const results = document.querySelector('#result');
const moves = document.querySelector('#move');
let timerRef = document.getElementById('time');
let chosenCards = [];
let chosenCardsIds = [];
const wonCards = [];
let [second, minute] = [0, 0];
let int = null;

// using the sort method to get random order of array´s elements every time.
cardArray1.sort(() => 0.5 - Math.random());
cardArray2.sort(() => 0.5 - Math.random());

// create a timer function
function mainTime() {
    second++;
    if (second == 60) {
        second = 0;
        minute++;
        if (minute == 60) {
            minute = 0;
        }
    }
    let m = minute < 10 ? '0' + minute : minute;
    let s = second < 10 ? '0' + second : second;
    timerRef.innerHTML = ` ${m} : ${s}`;
}

// create functions to choose the levels in game
const startNormalLvl = () => {
    gridDisplay1.style.display = 'flex';
    gridDisplay2.style.display = 'none';
    levelModal.style.display = 'none';
    if (int !== null) {
        clearInterval(int);
        [second, minute] = [0, 0];
        timerRef.innerHTML = '00 : 00';
    }
    int = setInterval(mainTime, 1000);
};

const startHardLvl = () => {
    gridDisplay2.style.display = 'flex';
    gridDisplay1.style.display = 'none';
    levelModal.style.display = 'none';
    if (int !== null) {
        clearInterval(int);
        [second, minute] = [0, 0];
        timerRef.innerHTML = '00 : 00';
    }
    int = setInterval(mainTime, 1000);
};
// function to close the game
const exitGame = () => {
    if (int !== null) {
        clearInterval(int);
    }
    window.close();
};

// function to open the level selection window
const selectLvl = () => {
    endModal.style.display = 'none';
    gridDisplay2.style.display = 'none';
    gridDisplay1.style.display = 'none';
    levelModal.style.display = 'block';
};

// create a function which create 20 image elements and appends them to the div element.
function createBoard() {
    for (let i = 0; i < 20; i++) {
        // create an image element
        const card = document.createElement('img');
        //adding an attribute and its value to every created image element
        card.setAttribute('src', './assets/photos/card.png');
        card.setAttribute('key', i);
        card.addEventListener('click', flipCard);
        gridDisplay1.appendChild(card);
        // console.log(card, i);
    }
}

function createBoard2() {
    for (let i = 0; i < 40; i++) {
        // create an image element
        const card = document.createElement('img');
        //adding an attribute and its value to every created image element
        card.setAttribute('src', './assets/photos/card.png');
        card.setAttribute('key', i);
        card.addEventListener('click', flipCard2);
        gridDisplay2.appendChild(card);
        // console.log(card, i);
    }
}

function checkMatch() {
    const cards = document.querySelectorAll('#grid1 > img');
    const optionOneId = chosenCardsIds[0];
    const optionTwoId = chosenCardsIds[1];
    // if (optionOneId === optionTwoId) {
    //     alert('You have clicked the same image');
    // }

    if (chosenCards[0] === chosenCards[1]) {
        // alert('you found a match');
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
        // alert('sorry try again');
    }
    results.innerHTML = wonCards.length;
    chosenCards = [];
    chosenCardsIds = [];
    if (wonCards.length === cardArray1.length / 2) {
        // results.innerHTML = 'You found all matches';
        clearInterval(int);
        endModal.style.display = 'block';
        gridDisplay2.style.display = 'none';
        gridDisplay1.style.display = 'none';
    }
}

function checkMatch2() {
    const cards = document.querySelectorAll('#grid2 > img');
    const optionOneId = chosenCardsIds[0];
    const optionTwoId = chosenCardsIds[1];
    // if (optionOneId === optionTwoId) {
    //     alert('You have clicked the same image');
    // }

    if (chosenCards[0] === chosenCards[1]) {
        // alert('you found a match');
        // set the chosen cards background to match
        cards[optionOneId].setAttribute(
            'src',
            './assets/photos/hard/match.png'
        );
        cards[optionTwoId].setAttribute(
            'src',
            './assets/photos/hard/match.png'
        );
        // remove the eventlistener from the matched cards
        cards[optionOneId].removeEventListener('click', flipCard2);
        cards[optionTwoId].removeEventListener('click', flipCard2);

        wonCards.push(chosenCards);
        console.log(wonCards);
    } else {
        cards[optionOneId].setAttribute('src', './assets/photos/hard/card.png');
        cards[optionTwoId].setAttribute('src', './assets/photos/hard/card.png');
        // alert('sorry try again');
    }
    results.innerHTML = wonCards.length;
    chosenCards = [];
    chosenCardsIds = [];
    if (wonCards.length === cardArray2.length / 2) {
        // results.innerHTML = 'You found all matches';
        clearInterval(int);
        endModal.style.display = 'block';
        gridDisplay2.style.display = 'none';
        gridDisplay1.style.display = 'none';
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
        chosenCards.push(cardArray1[cardId].name);
        // add the id of clicked card to the chosenCardsIds array.
        chosenCardsIds.push(cardId);
        // console.log(chosenCards, chosenCardsIds);
        // show the animal image of the clicked card
        this.setAttribute('src', cardArray1[cardId].img);
    }
    // the checkMatch function runs just when the chosenCards array contains two elements
    // this means the function will nut run untill the user choose another card so the function
    //can compare if there is match
    if (chosenCards.length === 2) {
        moves.innerHTML++;
        setTimeout(checkMatch, 300);
    }
}

function flipCard2() {
    const cardId = this.getAttribute('key');
    // check if the clicked card is already in the chosenCard array to prevent adding the same card twice
    // if the user clicks the same card twice after each other
    if (chosenCardsIds.length > 0 && chosenCardsIds.includes(cardId)) {
        return;
    } else {
        //add the equivalent animal name from cardArray to the clicked card to the chosenCards array
        chosenCards.push(cardArray2[cardId].name);
        // add the id of clicked card to the chosenCardsIds array.
        chosenCardsIds.push(cardId);
        // console.log(chosenCards, chosenCardsIds);
        // show the animal image of the clicked card
        this.setAttribute('src', cardArray2[cardId].img);
    }
    // the checkMatch function runs just when the chosenCards array contains two elements
    // this means the function will nut run untill the user choose another card so the function
    //can compare if there is match
    if (chosenCards.length === 2) {
        setTimeout(checkMatch2, 300);
    }
}

// run the fuctions
createBoard();
createBoard2();
