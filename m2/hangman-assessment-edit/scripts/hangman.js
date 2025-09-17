// declare and initialize array
let game = ["COBOL", "JAVA", "PYTHON", "JAVASCRIPT", "RUST", "ERLANG", "TYPESCRIPT", "ELIXIR", "PERL", "FORTRAN"];
let choice = Math.floor(Math.random() * 10);
let answer = game[choice];
let myLength = answer.length;
let display = [myLength];
let win = myLength;
let letters = answer.split('');
let attemptsLeft = 6;
let usedLetters = []
let output = '';
let userLetter = '';
// game setup works fine --steffen
function setup() {
    for (let i = 0; i < answer.length; i++) {
        display[i] = "_ ";
        output = output + display[i];
    }
    document.getElementById("word").innerHTML = output;
}




// Issue below here
// noticed if we uncomment below it reveals all letter for the hangman


document.getElementById("submit").addEventListener("click", function(event){

    event.preventDefault();
    output = '';
    userLetter = document.getElementById("guess").value;
    document.getElementById("guess").value = ''; //would this reset value to null
    if (usedLetters.includes(userLetter)) {
        document.getElementById("used").innerHTML = "letter has already been used!";
        document.getElementById("guessed").innerHTML = usedLetters;
        return;
    }
    usedLetters.push(userLetter)
    document.getElementById("guessed").innerHTML = usedLetters;
    let found = false;
    for (let c = 0; c < answer.length; c++) {
        //alert(letters[c]);
        if (userLetter.toUpperCase() == letters[c]) {
            display[c] = userLetter.toUpperCase();
            win--;
            found = true
        }
        output = output + display[c] + ' ';    
    }
    if (found == false) { // send men
        attemptsLeft--;
    }
    document.getElementById("word").innerHTML = output;
    output = '';

    let img = document.getElementById("hangman"); 
    if (attemptsLeft == 5) {
        img.src="images/02.png";
    } else if (attemptsLeft == 4) {
        img.src="images/03.png";
    } else if (attemptsLeft == 3) {
        img.src="images/04.png";
    } else if (attemptsLeft == 2) {
        img.src="images/05.png";
    } else if (attemptsLeft == 1) {
        img.src="images/06.png";
    } else {
        img.src="images/07.png";
    }


    if (win < 1) {
        document.getElementById("guesses").innerHTML = 'YOU WIN!!!';
    } else if (attemptsLeft < 1) {
        document.getElementById("guesses").innerHTML = 'YOU LOSE!!!';
    } else {
        document.getElementById("guesses").innerHTML = 'You have ' + attemptsLeft + ' guesses left';
    }
});

