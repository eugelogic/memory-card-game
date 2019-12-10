const cardsArray = [
    {
        name: 'louise',
        img: 'img/louise.png',
    },
    {
        name: 'lisa',
        img: 'img/lisa.jpg',
    },
    {
        name: 'kelly',
        img: 'img/kelly.png',
    },
    {
        name: 'kerry',
        img: 'img/kerry.png',
    },
    {
        name: 'chris',
        img: 'img/chris.jpg',
    },
    {
        name: 'marcus',
        img: 'img/marcus.jpg',
    },
    {
        name: 'steve',
        img: 'img/steve.png',
    },
    {
        name: 'russell',
        img: 'img/russell.jpg',
    },
    {
        name: 'eugene',
        img: 'img/eugene.png',
    },
    {
        name: 'david',
        img: 'img/david.png',
    },
    {
        name: 'mark',
        img: 'img/mark.png',
    },
    {
        name: 'calum',
        img: 'img/calum.jpg',
    },
    {
        name: 'emily',
        img: 'img/emily.png',
    },
    {
        name: 'pets',
        img: 'img/pets.jpg',
    },
];

const gameGrid = cardsArray
    .concat(cardsArray)
    .sort(() => 0.5 - Math.random());

let firstGuess = '';
let secondGuess = '';
let count = 0;
let previousTarget = null;
let delay = 1200;
let guessCount = 0;

const game = document.getElementById('game');
const grid = document.createElement('section');
grid.setAttribute('class', 'grid');
game.appendChild(grid);

gameGrid.forEach( item => {
    const { name, img } = item;

    const card = document.createElement('div');
    card.classList.add('card');
    card.dataset.name = name;

    const front = document.createElement('div');
    front.classList.add('front');

    const back = document.createElement('div');
    back.classList.add('back');
    back.style.backgroundImage = `url(${img})`;

    grid.appendChild(card);
    card.appendChild(front);
    card.appendChild(back);
});

const match = () => {
    const selected = document.querySelectorAll('.selected');
    selected.forEach(card => {
        card.classList.add('match');
    });
};

const resetGuesses = () => {
    firstGuess = '';
    secondGuess = '';
    count = 0;
    previousTarget = null;

    var selected = document.querySelectorAll('.selected');
    selected.forEach(card => {
        card.classList.remove('selected');
    });
};

const gameOver = () => {
    const matched = document.querySelectorAll('.match');
    if (matched.length === 28) {
        console.log('GAME OVER');
    }
}

grid.addEventListener('click', event => {

    const clicked = event.target;

    if (
        clicked.nodeName === 'SECTION' ||
        clicked === previousTarget ||
        clicked.parentNode.classList.contains('selected') ||
        clicked.parentNode.classList.contains('match')
    ) {
        return;
    }

    if (count < 2) {
        count++;
        if (count === 1) {
            firstGuess = clicked.parentNode.dataset.name;
            console.log(firstGuess);
            clicked.parentNode.classList.add('selected');
        } else {
            secondGuess = clicked.parentNode.dataset.name;
            console.log(secondGuess);
            clicked.parentNode.classList.add('selected');
        }

        if (firstGuess && secondGuess) {
            if (firstGuess === secondGuess) {
                match();
                setTimeout(gameOver, delay);
            }
            setTimeout(resetGuesses, delay);
            guessCount++;
            console.log(guessCount);
        }
        previousTarget = clicked;
    }

});
