// Make an array of all 26 letters of the alphabet
let alphabet = Array.from('abcdefghijklmnopqrstuvwxyz');

// Make a variable that will randomly pick one of the 26 letters as a secret letter
let secretKey = alphabet[Math.floor(Math.random() * alphabet.length)];

// Select the ol element to display the letters
let lettersOl = document.getElementById('letters');

lettersOl.classList.add('hidden');

// Display the letters in the ol element
for (let j = 0; j < alphabet.length; j++) {
        let letter = alphabet[j];
        let li = document.createElement('li');
        li.textContent = letter;
        lettersOl.appendChild(li);
}

// Add a keyboard event listener to the body
document.body.addEventListener('keydown', function(event) {
// Check if the pressed key is the secret key
if (event.key === secretKey) {
// Remove the hidden class from the ol element to temporarily show the letters
lettersOl.classList.remove('hidden');

// Find the li element that contains the letter of the secret key that was pressed
let letterLi = lettersOl.querySelector('li:nth-child(' + (alphabet.indexOf(secretKey) + 1) + ')');

// Append a message to the body that includes the letter of the secret key that was pressed
let message = document.createElement('p');
message.textContent = 'SECRET KEY PRESSED (' + letterLi.textContent + ')';
document.body.appendChild(message);

// Choose a new secret key and assign it to the variable
secretKey = alphabet[Math.floor(Math.random() * alphabet.length)];

// Add the hidden class back to the ol element to hide the letters again
lettersOl.classList.add('hidden');
}
});