// Card Data
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
]

// Duplicate array to create a match for each card
let gameGrid = cardsArray.concat(cardsArray);
// Randomise game grid on each load
gameGrid.sort(() => 0.5 - Math.random());

let firstGuess = '';
let secondGuess = '';
let count = 0;
let previousTarget = null;
let delay = 1200;

// Grab the root div with the id of game
const game = document.getElementById('game');
// Create a section with a class of grid
const grid = document.createElement('section');
grid.setAttribute('class', 'grid');
// Append the grid section (child) to the game div (parent)
game.appendChild(grid);

// For each item in the cardsArray array ...
gameGrid.forEach( item => {
    // Create a div
    const card = document.createElement('div');
    // Apply a card class to that div
    card.classList.add('card');
    // Set the cardsArray name to the data-name attribute of the div
    card.dataset.name = item.name;
    // Apply the cardsArray image to the background image of the div
    card.style.backgroundImage = `url(${item.img})`;
    // Append the card div to the grid section
    grid.appendChild(card);

});

// Add 'match' CSS class to selected elements
const match = () => {
    var selected = document.querySelectorAll('.selected');
    selected.forEach(card => {
        card.classList.add('match');
    });
}

// Reset guesses
const resetGuesses = () => {
    firstGuess = '';
    secondGuess = '';
    count = 0;

    var selected = document.querySelectorAll('.selected');
    selected.forEach(card => {
        card.classList.remove('selected');
    });
}

// Add event listener to grid
grid.addEventListener('click', function(event) {
    // The event target is our click target
    let clicked = event.target;

    // Do not allow the grid section itself to be selected, only select cards/divs inside the grid
    // Prevent the same card to be clicked twice
    if (clicked.nodeName === 'SECTION' || clicked === previousTarget ) {
        return;
    }
    if (count < 2) {
        count++;
        if (count === 1) {
            // Assign first guess
            firstGuess = clicked.dataset.name;
            // Add 'selected' class
            clicked.classList.add('selected');
        } else {
            // Assign second guess
            secondGuess = clicked.dataset.name;
            clicked.classList.add('selected');
        }
        // if both guesses are not empty
        if (firstGuess !== '' && secondGuess !== '') {
            // and the first guess matches the second one
            if (firstGuess === secondGuess) {
                // run the match function
                setTimeout(match, delay);
                // and the reset the guesses to zero
                setTimeout(resetGuesses, delay);
            } else {
                // or just reset the guesses to zero
                setTimeout(resetGuesses, delay);
            }
        }
        // Set previous target to clicked
        previousTarget = clicked;
    }
});
