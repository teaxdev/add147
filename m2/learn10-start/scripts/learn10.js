function start() {
    // Math: https://www.w3schools.com/js/js_math.asp
    // Demonstrate the use of round, ceil, floor, trunc, sign
    // pow, min, and random and display to the appropriate paragraphs
    document.getElementById("round").innerHTML = Math.round(35.6);
    document.getElementById("ceil").innerHTML = Math.ceil(15.1);
    document.getElementById("floor").innerHTML = Math.floor(3.9);
    document.getElementById("trunc").innerHTML = Math.trunc(7);
    document.getElementById("sign").innerHTML = Math.sign(3232466);
    document.getElementById("pow").innerHTML = Math.pow(12,3);
    document.getElementById("min").innerHTML = Math.min(500, 5000, 32, 454, 1, -22);
    document.getElementById("random").innerHTML = Math.random();


    // Random: https://www.w3schools.com/js/js_random.asp
    // create a random integer between 1 and 100 and display in the random2 paragraph
    document.getElementById("random2").innerHTML = Math.floor(Math.random() * 100) + 1;

    // Booleans: https://www.w3schools.com/js/js_booleans.asp
    // read the reference
    // ok!

    // Comparisons: https://www.w3schools.com/js/js_comparisons.asp
    // demonstrate and explain the difference between == and === in the
    // comparisons paragraph
    // == checks for equal value but === also checks for data type
    
    document.getElementById("comparisons").innerHTML = "== checks for equal value but === also checks for data type";


    // Conditions: https://www.w3schools.com/js/js_if_else.asp
    // Read the conditions page
    // ok!
}