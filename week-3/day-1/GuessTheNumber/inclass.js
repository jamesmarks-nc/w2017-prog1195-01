var number;

function pickANumber() {
    // Pick a number between 1 and 10
    return Math.floor(Math.random() * 10) + 1;
}

function guessNumber() {
    // Get user input
    var guessTextbox = document.getElementById('txtUserGuess');
    var outputDiv = document.getElementById('divUserFeedback');

    var guess = parseInt(guessTextbox.value);
    var output = "";

    if(isNaN(guess)) {
    	output = "That wasn't a number. Try again.";
    } else if(guess < 1 || guess > 10) {
    	output = "Please enter an integer between 1 and 10.";
    } else if(number === guess) {
    	output = "You guessed the right number!";
    	number = pickANumber();
    	output = output + " Generated a new number. Keep going!";
    } else if(number < guess) {
    	output = "Too HIGH!";
    } else if(number > guess) {
    	output = "Too LOW!";
    }

    outputDiv.innerText = output;

}

number = pickANumber();
console.log(number);





