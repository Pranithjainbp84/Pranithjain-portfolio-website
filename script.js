// Function to generate a random number between min and max values
function random(min, max) {
    return Math.random() * (max - min) + min;
}

// Create snowflakes
const snowContainer = document.querySelector('.snow-container');

for (let i = 0; i < 50; i++) {
    const snowflake = document.createElement('div');
    snowflake.classList.add('snowflake');
    snowflake.style.left = `${random(0, 100)}vw`;
    snowflake.style.animationDuration = `${random(5, 10)}s`;
    snowflake.style.animationDelay = `${random(0, 5)}s`;
    snowContainer.appendChild(snowflake);
}
