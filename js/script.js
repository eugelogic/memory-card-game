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
