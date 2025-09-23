function start() {
    const value = Math.floor(Math.random() * 1000) + 1
    alert(value)
    let attempt = document.getElementById("guess").value;
    if (value == attempt) {
        document.getElementById("random2").innerHTML = "You guessed correctly!";
    } else if (attempt < value - 300) {
        document.getElementById("random2").innerHTML = "You're freezing cold!";
    }
    
}
