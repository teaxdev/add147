const magic1 = {
    name: "Prosper, Tome-Bound",
    color: "Rakdos",
    cost: "4",
    type: "Legendary Creature",
    use: "It is a great card to use as an engine (A card that you use as to gain value, like drawing cards or creating treasure)",
    img: "images/prosper.jpg"

}

const magic2 = {
    name: "Wilhelt, The Rotcleaver",
    color: "Dimir",
    cost: "4",
    type: "Legendary Creature",
    use: "He is like an insurance company, that gives you a zombie back when you lose one, and lets you draw cards every turn",
    img: "images/willy.jpg"

}

const magic3 = {
    name: "Yuriko, The Tigers Shadow",
    color: "Dimir",
    cost: "3",
    type: "Legendary Creature",
    use: "Yuriko does damage to all your opponents depending on the mana cost of the top card of your deck",
    img: "images/yuriko"

}

const magic4 = {
    name: "Satoru Umezawa",
    color: "Dimir",
    cost: "3",
    type: "Legendary Creature",
    use: "Satoru makes all of your other creatures have ninjutsu, so that you cansneak them in to attack your opponents",
    img: "images/satoru2"

}

const magic5 = {
    name: "Gray Merchant of Asphodel",
    color: "Black",
    cost: "4",
    type: "Creature",
    use: "'Gary' as he is often called, deals damage to your opponents based on how many black pips you have on your cards in play",
    img: "images/gary.jpg"

}

function display() {
    let html1 = `<h2>${magic1.name}</h2>` + `<h3>${magic1.color}</h3>` + `<img src=${magic1.img}>` +
    `<h3></h3>` + `<p>${magic1.cost}</p>` + `<p>${magic1.type}</p>` + `<p>${magic1.use}</p>`;

    let html2 = `<h2>${magic1.name}</h2>` + `<h3>${magic1.color}</h3>` + `<img src=${magic1.img}>` +
    `<h3></h3>` + `<p>${magic1.cost}</p>` + `<p>${magic1.type}</p>` + `<p>${magic1.use}</p>`;

    let html3 = `<h2>${magic1.name}</h2>` + `<h3>${magic1.color}</h3>` + `<img src=${magic1.img}>` +
    `<h3></h3>` + `<p>${magic1.cost}</p>` + `<p>${magic1.type}</p>` + `<p>${magic1.use}</p>`;

    let html4 = `<h2>${magic1.name}</h2>` + `<h3>${magic1.color}</h3>` + `<img src=${magic1.img}>` +
    `<h3></h3>` + `<p>${magic1.cost}</p>` + `<p>${magic1.type}</p>` + `<p>${magic1.use}</p>`;

    let html5 = `<h2>${magic1.name}</h2>` + `<h3>${magic1.color}</h3>` + `<img src=${magic1.img}>` +
    `<h3></h3>` + `<p>${magic1.cost}</p>` + `<p>${magic1.type}</p>` + `<p>${magic1.use}</p>`;

    document.getElementById('ob1').innerHTML = html1;
    document.getElementById('ob2').innerHTML = html2;
    document.getElementById('ob3').innerHTML = html3;
    document.getElementById('ob4').innerHTML = html4;
    document.getElementById('ob5').innerHTML = html5;
}