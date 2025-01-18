const games = JSON.parse(localStorage.getItem('gamesList')) || [];  // Retrieve games from localStorage

// Function to load games dynamically
function loadGames() {
    const container = document.querySelector('.list'); // Selecting the container div with the class 'list'

    games.forEach(game => {
        // Create game div
        const gameDiv = document.createElement('div');
        gameDiv.className = game.class;

        // Create and append image
        const img = document.createElement('img');
        img.src = game.imgSrc;
        img.alt = game.imgAlt;
        img.className = 'image';
        gameDiv.appendChild(img);

        // Create text div
        const textDiv = document.createElement('div');
        textDiv.className = 'text';

        // Create and append title
        const title = document.createElement('h2');
        title.textContent = game.title;
        textDiv.appendChild(title);

        // Create and append description
        const description = document.createElement('h3');
        description.textContent = game.description;
        textDiv.appendChild(description);

        // Append text div to game div
        gameDiv.appendChild(textDiv);

        // Append game div to container
        container.appendChild(gameDiv);
    });
}

// Call the function after the DOM has loaded
document.addEventListener('DOMContentLoaded', loadGames);
