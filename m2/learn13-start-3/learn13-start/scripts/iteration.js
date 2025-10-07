/*
Iterables: https://www.w3schools.com/js/js_iterables.asp
Read the page
Demonstrate iteration of a list 
Create a list of movies, books, or games at least 5 items long and 
display them in the list paragraph
*/
const array = ["Hades", "Risk Of Rain 2", "PEAK", "MTG", "Flesh and Blood"];
let text = "";
for (const x of array) {
  text += x + "<br>";
}

document.getElementById("list").innerHTML = text;



/*
JS Sets

https://www.w3schools.com/js/js_sets.asp

Create a set with at least 5 song titles in it
display the contents of the set in the set1 paragraph (use iteration)

*/

const set1 = new Set(["Wilshire","Care For You","Sienna","Numb","Jonny"]);

let text1 = "";
for (const x of set1) {
  text1 += x + "<br>";
}

document.getElementById("set1").innerHTML = text1;


// add two more songs to the set then display in the set2 paragraph

set1.add("Killshot");
set1.add("Samurai");

let text2 = "";
for (const x of set1) {
  text2 += x + "<br>";
}

document.getElementById("set2").innerHTML = text2;


/* 
Maps
https://www.w3schools.com/js/js_maps.asp

Maps are like dictionaries in python
Create a map with five names and emails in it.
Display the contents of the map in map1 use the forEach() method (bottom of
    the reference page)
*/
let text3= "";
const map1 = new Map([
  ["Billy", "billy@example.com"],
  ["Maria", "maria@example.com"],
  ["Anthony", "anthony@example.com"],
  ["Mark", "mark@example.com"],
  ["Kevin", "kevin@example.com"],
]);

map1.forEach((email, name) => {
    text3 += `${name}: ${email}, `;
});

document.getElementById("map1").innerHTML = text3;

// add two new names and emails and display in map2 use the forEach() method
let text4= "";
map1.set("Max", "max@example.com");
map1.set("Emily", "emily@example.com");

map1.forEach((email, name) => {
    text4 += `${name}: ${email}, `;
});

document.getElementById("map2").innerHTML = text4;


// get and display the email of one person, display in map3

let text5 = map1.get("Mark"); 
document.getElementById("map3").innerHTML = text5;