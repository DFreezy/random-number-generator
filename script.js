// Select elements
const generateBtn = document.getElementById('generate-btn');
const minInput = document.getElementById('min');
const maxInput = document.getElementById('max');
const output = document.getElementById('output');

// Function to generate a random number
function generateRandomNumber(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

// Event listener for button click
generateBtn.addEventListener('click', () => {
    const min = parseInt(minInput.value);
    const max = parseInt(maxInput.value);

    if (isNaN(min) || isNaN(max)) {
        output.textContent = "Please enter valid numbers!";
        return;
    }

    if (min > max) {
        output.textContent = "Minimum value must be less than or equal to Maximum!";
        return;
    }

    const randomNumber = generateRandomNumber(min, max);
    output.textContent = `Random Number: ${randomNumber}`;
});
