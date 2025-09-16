function foodSelect () {
    document.getElementById("name").value = "valued customer";
    document.getElementById("drinkcount1").value = "0";
    document.getElementById("drinkcount2").value = "0";
    document.getElementById("drinkcount3").value = "0";
    document.getElementById("drinkcount4").value = "0";
    document.getElementById("drinkcount5").value = "0";
    document.getElementById("sandcount1").value = "0";
    document.getElementById("sandcount2").value = "0";
    document.getElementById("sandcount3").value = "0";
    document.getElementById("sandcount4").value = "0";
    document.getElementById("sandcount5").value = "0";
    document.getElementById("descount1").value = "0";
    document.getElementById("descount2").value = "0";
    document.getElementById("descount3").value = "0";
    document.getElementById("descount4").value = "0";
    document.getElementById("descount5").value = "0";
}

function price() {
    let name = document.getElementById("name").value;
    let drink1 = parseFloat(document.getElementById("drinkcount1").value) 
    let drink2 = parseFloat(document.getElementById("drinkcount2").value) 
    let drink3 = parseFloat(document.getElementById("drinkcount3").value) 
    let drink4 = parseFloat(document.getElementById("drinkcount4").value) 
    let drink5 = parseFloat(document.getElementById("drinkcount5").value) 
    let sand1 = parseFloat(document.getElementById("sandcount1").value) 
    let sand2 = parseFloat(document.getElementById("sandcount2").value) 
    let sand3 = parseFloat(document.getElementById("sandcount3").value) 
    let sand4 = parseFloat(document.getElementById("sandcount4").value) 
    let sand5 = parseFloat(document.getElementById("sandcount5").value) 
    let des1 = parseFloat(document.getElementById("descount1").value) 
    let des2 = parseFloat(document.getElementById("descount2").value) 
    let des3 = parseFloat(document.getElementById("descount3").value) 
    let des4 = parseFloat(document.getElementById("descount4").value) 
    let des5 = parseFloat(document.getElementById("descount5").value) 

    let drinkCost = 3 * (drink1 + drink2 + drink3 + drink4 + drink5)
    let drinkTotal = drink1 + drink2 + drink3 + drink4 + drink5
    let sandCost = 10 * (sand1 + sand2 + sand3 + sand4 + sand5)
    let sandTotal = sand1 + sand2 + sand3 + sand4 + sand5
    let desCost = 5 * (des1 + des2 + des3 + des4 + des5)
    let desTotal = des1 + des2 + des3 + des4 + des5

    document.getElementById("subTotalDrink").innerHTML = ("Subtotal for drinks is $" + drinkCost + ", You ordered " + drinkTotal + " drinks at $3 each")
    document.getElementById("subTotalSand").innerHTML = ("Subtotal for sandwiches is $" + sandCost + ", You ordered " + sandTotal + " sandwiches at $10 each")
    document.getElementById("subTotalDes").innerHTML = ("Subtotal for desserts is $" + desCost + ", You ordered " + desTotal + " desserts at $5 each")

    var totalCost = drinkCost + sandCost + desCost;
    document.getElementById("totalPrice").innerHTML = (name + " , your total is $" + totalCost)
}