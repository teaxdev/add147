function start() {

    // print your name to the name heading
    document.getElementById("name").innerHTML = "Alex"
        /*
            read/watch the associated reference and complete the directions in the comments.

        */

    /* JS Numbers: https://www.w3schools.com/js/js_numbers.asp
        We will focus on the things with numbers that are significantly
        different than python. Please read the page linked to above before 
        completing the following:
    */

    /* Write a line of code demonstrating what will happen if 
       you try to add a number and a string. Print to the add paragraph to 
       display both the equation and the results. 
    */
    let int = 35;
    let str = "12";
    let add1 = int + str;
    document.getElementById("add").innerHTML = add1;

    /*
        JS Number Methods: https://www.w3schools.com/js/js_number_methods.asp
    */

    // Demonstrate the use of toString() and print to the to-string paragraph
    let a = 350;
    document.getElementById("to-string").innerHTML = a.toString();

    // Demonstrate the use of toExponential() and print to the exponent paragraph
    let pi = 3.14;
    document.getElementById("exponent").innerHTML = pi.toExponential(4);

    // Demonstrate the use of toFixed() and print to the fixed paragraph
    document.getElementById("fixed").innerHTML = pi.toFixed(0);

    // Demonstrate the use of toPrecision() and print to the precision paragraph
    document.getElementById("precision").innerHTML = pi.toPrecision(6);

    // Demonstrate the use of parseFloat() and print to the float paragraph
    document.getElementById("float").innerHTML = parseFloat("3.14 is pi");

    // Demonstrate the use of parseInt() and print to the int paragraph
    document.getElementById("int").innerHTML = parseInt("2014, thats when we had a shed");


    // Watch Simple Comparisons: https://www.linkedin.com/learning/learning-the-javascript-language-2/simple-comparisons?autoplay=true&resume=false&u=69317474

    /* In the equals paragraph explain your understanding of the difference between using == and ===  (You will probably
    need to do an additional web search to really get it.)
    */

    document.getElementById("equals").innerHTML = "== is equal to, meaning  it would come back equal whether its a string or integer, while === requires equal values and type";

    // Watch Arithmetic Operators: https://www.linkedin.com/learning/learning-the-javascript-language-2/arithmetic-operators?autoplay=true&resume=false&u=69317474
    // Watch Logical Operators: https://www.linkedin.com/learning/learning-the-javascript-language-2/logical-operators?autoplay=true&resume=false&u=69317474
    // In the logic paragraph describe the order of precedence for and / or operators

    document.getElementById("logic").innerHTML = "and (&&) requires all values fo be true, while or (||) only checks if one or more are true";

    // Watch Conditional If: https://www.linkedin.com/learning/learning-the-javascript-language-2/logical-operators?autoplay=true&resume=false&u=69317474
    // Watch Conditionals Switch: https://www.linkedin.com/learning/learning-the-javascript-language-2/conditionals-switch?autoplay=true&resume=false&u=69317474


    // Write code to demonstrate the use of the switch statement and display results to switch paragrah
    var question = window.prompt("What are one the three primary colors (answer in lowercase)")

    switch (question) {
        case "blue":
            document.getElementById("switch").innerHTML = ("Correct! Blue is a primary color");
            break;
        case "red":
            document.getElementById("switch").innerHTML = ("Correct! Red is a primary color");
            break;
        case "yellow":
            document.getElementById("switch").innerHTML = ("Correct! Yellow is a primary color");
            break;
        case "green":
            document.getElementById("switch").innerHTML = ("Correct! Green is a primary color");
            break;
        default:
            document.getElementById("switch").innerHTML = ("whatever you typed is not a primary color");
            break;
    }

    // Watch Terse ifs: https://www.linkedin.com/learning/learning-the-javascript-language-2/terse-ifs?autoAdvance=true&autoSkip=true&autoplay=true&resume=false&u=69317474
    // Watch Ternary Operator:https://www.linkedin.com/learning/learning-the-javascript-language-2/ternary-operator?autoplay=true&resume=false&u=69317474
    // Write code to demonstrate the use of the ternary operator and print to the ternary paragraph
    var fruit = "apple";

    var favorite = fruit === "apple" ? "Apples are your favorite fruit" : "Apples aren't your favorite fruit";
    document.getElementById("ternary").innerHTML = (favorite);
}