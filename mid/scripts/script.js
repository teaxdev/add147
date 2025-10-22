let steak = 0;

function addItem() {
    steak += 1;
    document.getElementById("steak").innerHTML = `${steak}x Steak`;
    console.log(steak);
    return steak;
}

let steakCount = addItem();
console.log(steakCount);