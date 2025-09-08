function start() {
    // follow the directions in the comments
    // print to the index page

    // print your name to the name heading
    document.getElementById("name").innerHTML = "Alex";

    // from JavaScript Strings: https://www.w3schools.com/js/js_strings.asp


    // String length: calculate the string length and print to the length paragraph
    let myString = "Be it ever so humble, there is no place like home."
    let stringLength = myString.length;
    document.getElementById("length").innerHTML = stringLength;


    // Escape sequences
    // print a string to the escape paragraph that uses three different escape sequences (look at the web page)
    let escape1 = "His nickname is \"Bobby\"" + ' It\'s going to be a while' + " BACKSLASH!!!!!!!!!! \\ :D"
    document.getElementById("escape").innerHTML = escape1;

    // JavaScript String Methods https://www.w3schools.com/js/js_string_methods.asp

    // create a variable named 'name' and store your complete name in it
    // Use the JavaScript slice function to display your first name to first paragraph
    let name = "Alexander Clarence Flores" // I have no middle name so Clarence will do
    let part = name.slice(0, 9)
    document.getElementById("first").innerHTML = part;

    // Use the Javascript substring Method to display your middle name to the middle paragraph
    let part2 = name.substring(10, 19)
    document.getElementById("middle").innerHTML = part2;

    // Use the JavaScript subst Method to display your last name to the last paragraph
    let part3 = name.substring(19, 25) // The substr() method is removed (deprecated) in the latest JavaScript standard. Use substring() or slice() instead.
    document.getElementById("last").innerHTML = part3;


    // replacing string content - in the following variable use the replace method to put your major 
    // in a new string and print to the major paragraph

    let major = "I'm majoring in Physical Therapy at McHenry County College"
    let replaceMajor = major.replace("Physical Therapy", "Software Application Design and Development")
    document.getElementById("major").innerHTML = replaceMajor;


    // convert the following variable to upper case then print to the upper paragraph
    let myText = "It\'s a great day to be alive!"
    let uppy = myText.toUpperCase();
    document.getElementById("upper").innerHTML = uppy;

    // Use the trim() method to remove white spaces from the following variable and print to the
    // trim paragraph
    let trimText = "                  McHenry County College                "
    let trim1 = trimText.trim();
    document.getElementById("trim").innerHTML = trim1;

    // use the indexOf() method to get the index of 'May' and print the index number to the index paragraph

    let months = "January, February, March, April, May, June, July, August, September, October, November, December"
    let index1 = months.indexOf("May");
    document.getElementById("index").innerHTML = index1;


    // JavaScript Template Literals   https://www.w3schools.com/js/js_string_templates.asp

    // create a template literals for both your first and last name (name the variables first and last)
    let first = "Alex";
    let last = "Flores";

    // Use Variable substitutions to create a greeting that incorporates your first and last name and 
    // print to the greeting paragraph
    let text = `Hello ${first} ${last}!`;
    document.getElementById("greeting").innerHTML = text;
}