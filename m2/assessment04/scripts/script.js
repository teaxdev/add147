let value;

function start() {
    value = Math.floor(Math.random() * 1000) + 1;
    alert(value);
}

function hotcold() {
    let attempt = parseInt(document.getElementById("guess").value);
    if (value == attempt) {
        document.getElementById("display").innerHTML = "You guessed correctly!";
        document.getElementById("displaytext").style.backgroundColor = "rgba(67, 243, 51, 1)";
    } else if (attempt < value - 400) {
        document.getElementById("display").innerHTML = "You're freezing cold!";
        document.getElementById("displaytext").style.backgroundColor = "rgba(74, 171, 255, 1)";
    } else if (attempt < value - 200) {
        document.getElementById("display").innerHTML = "You're cold!";
        document.getElementById("displaytext").style.backgroundColor = "rgba(147, 205, 255, 1)";
    } else if (attempt < value - 100) {
        document.getElementById("display").innerHTML = "You're getting warm!";
        document.getElementById("displaytext").style.backgroundColor = "rgba(255, 210, 143, 1)";
    } else if (attempt < value - 50) {
        document.getElementById("display").innerHTML = "You're getting really warm!";
        document.getElementById("displaytext").style.backgroundColor = "rgba(255, 166, 34, 1)";
    } else if (attempt < value - 20) {
        document.getElementById("display").innerHTML = "You're getting hot!";
        document.getElementById("displaytext").style.backgroundColor = "rgba(255, 114, 58, 1)";
    } else if (attempt < value - 10) {
        document.getElementById("display").innerHTML = "You're piping hot!";
        document.getElementById("displaytext").style.backgroundColor = "rgba(255, 76, 52, 1)";
    } else if (attempt < value - 5) {
        document.getElementById("display").innerHTML = "You're BURNING!";
        document.getElementById("displaytext").style.backgroundColor = "rgba(255, 34, 34, 1)";
    } else if (attempt > value + 400) {
        document.getElementById("display").innerHTML = "You're freezing cold!";
        document.getElementById("displaytext").style.backgroundColor = "rgba(74, 171, 255, 1)";
    } else if (attempt > value + 200) {
        document.getElementById("display").innerHTML = "You're cold!";
        document.getElementById("displaytext").style.backgroundColor = "rgba(147, 205, 255, 1)";
    } else if (attempt > value + 100) {
        document.getElementById("display").innerHTML = "You're getting warm!";
        document.getElementById("displaytext").style.backgroundColor = "rgba(255, 210, 143, 1)";
    } else if (attempt > value + 50) {
        document.getElementById("display").innerHTML = "You're getting really warm!";
        document.getElementById("displaytext").style.backgroundColor = "rgba(255, 166, 34, 1)";
    } else if (attempt > value + 20) {
        document.getElementById("display").innerHTML = "You're getting hot!";
        document.getElementById("displaytext").style.backgroundColor = "rgba(255, 114, 58, 1)";
    } else if (attempt > value + 10) {
        document.getElementById("display").innerHTML = "You're piping hot!";
        document.getElementById("displaytext").style.backgroundColor = "rgba(255, 76, 52, 1)";
    } else if (attempt > value + 5) {
        document.getElementById("display").innerHTML = "You're BURNING!";
        document.getElementById("displaytext").style.backgroundColor = "rgba(255, 34, 34, 1)";
    }
}
