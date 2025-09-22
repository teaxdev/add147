/* JavaScript Dates: https://www.w3schools.com/js/js_dates.asp */

// Create a variable, assign it to a new date object
// display the variable in the basic paragraph
const today = new Date();
document.getElementById("basic").innerHTML = today;


// create a new date variable and load the information for today into it
// display the results in the today paragraph (Year, Month, Day)
const today1 = new Date(2025, 8, 22);
document.getElementById("today").innerHTML = today1;

// Create a new date variable based on the dateString and store your birthday in it
// display the variable in the birthday paragraph
const bday = new Date("September 22, 2025 12:07:00");
document.getElementById("birthday").innerHTML = bday;


// Convert your basic date to the ISO string format and display the result
// in the iso paragraph
const today2 = new Date("2025-09-22");
document.getElementById("iso").innerHTML = today2;


//  Date Formats: https://www.w3schools.com/js/js_date_formats.asp
// Demonstrate 3 date formats of your choice to date1, date2, and date3 paragraphs
const d1 = new Date("09/22/2025");
const d2 = new Date("Sep 22 2025");
const d3 = new Date("2025");
document.getElementById("date1").innerHTML = d1;
document.getElementById("date2").innerHTML = d2;
document.getElementById("date3").innerHTML = d3;


//  getDate() Methods: https://www.w3schools.com/js/js_date_methods.asp
// Demonstrate 4 get date methods of your choice to get1-get4 paragraphs
const g1 = new Date().getFullYear()
const g2 = new Date().getMonth()
const g3 = new Date().getDay()
const g4 = new Date().getHours()
document.getElementById("get1").innerHTML = g1;
document.getElementById("get2").innerHTML = g2;
document.getElementById("get3").innerHTML = g3;
document.getElementById("get4").innerHTML = g4;

// set date methods: https://www.w3schools.com/js/js_date_methods_set.asp
// Demonstrate 4 set date methods of your choice to set1-set4 paragraphs

const s1 = new Date()
const s2 = new Date()
const s3 = new Date()
const s4 = new Date()
s1.setFullYear(2010)
s2.setDate(3)
s3.setMonth(3)
s4.setSeconds(55)
document.getElementById("set1").innerHTML = s1;
document.getElementById("set2").innerHTML = s2;
document.getElementById("set3").innerHTML = s3;
document.getElementById("set4").innerHTML = s4;