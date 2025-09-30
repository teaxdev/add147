// for loop - https://www.w3schools.com/js/js_loop_for.asp
// Write 99 bottles of beer on the wall using a for loop
// hints - decrement at the end, create a variable, save the song lyrics from
// the loop to the variable. use <br> instead of \n with the inner html. 
for (i = 99; i >= 0; i--) {
    if (i > 0) {
        document.getElementById("beer").innerHTML += `${i} bottles of beer on the wall, ${i} bottles of beer. <br>`
        document.getElementById("beer").innerHTML += `Take one down and pass it around, ${i - 1} bottles of beer on the wall. <br>`
    } else {
        document.getElementById("beer").innerHTML += `No bottles of beer on the wall, no bottles of beer. <br>`
        document.getElementById("beer").innerHTML += `Take none down and pass it around, no more bottles of beer on the wall. <br>`
    }
}

// document.getElementById("beer").innerHTML = beerSong;


//for in: https://www.w3schools.com/js/js_loop_forin.asp
// create an array of months and use the for in
// command to print them to the for-in paragraph
mon = "";
let months = [
  "January", "February", "March", "April", "May", "June",
  "July", "August", "September", "October", "November", "December"
];
for (let m in months) {
    mon += `${months[m]} `;
}

document.getElementById("for-in").innerHTML = mon;







// For of: https://www.w3schools.com/js/js_loop_forof.asp
// demonstrate the use of For Of to print letters from a string. 
// Create your own string variable of at least 5 letters
// print the results in the for-of paragraph
let printLetter = "";
let pineapple = "watermelon";
for (let x of pineapple) {
    printLetter += `${x} `;
}
document.getElementById("for-of").innerHTML = printLetter;


// While loop: https://www.w3schools.com/js/js_loop_while.asp
// Create a while loop to print the numbers 1 to 50
// print the results in the while paragraph
let printNum = "";

let y = 1;
while (y <= 50) {
    printNum += `${y} `;
    y++;
}
document.getElementById("while").innerHTML = printNum;