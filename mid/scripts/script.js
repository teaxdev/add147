// item stuff
const itemData = {
    'steak': { name: 'Steak', price: 18.99 },
    'chicken': { name: 'Chicken', price: 14.99 },
    'salmon': { name: 'Salmon', price: 16.99 },
    'pasta': { name: 'Pasta', price: 12.99 },
    'burger': { name: 'Burger', price: 11.99 },
    'pizza': { name: 'Pizza', price: 13.99 },
    'ribs': { name: 'Ribs', price: 19.99 },
    'mac': { name: 'Mac and Cheese', price: 11.99 },
    'stirfry': { name: 'Stir Fry', price: 13.99 },

    'fries': { name: 'French Fries', price: 4.99 },
    'chips': { name: 'Chips & Salsa', price: 4.99 },
    'caesar': { name: 'Caesar Salad', price: 6.99 },
    'bread': { name: 'Garlic Bread', price: 3.99 },
    'mashed': { name: 'Mashed Potatoes', price: 3.99 },
    'tots': { name: 'Tater Tots', price: 4.99 },
    'onions': { name: 'Onion Rings', price: 5.99 },
    'mushrooms': { name: 'Mushrooms', price: 4.99 },

    'cake': { name: 'Chocolate Cake', price: 6.99 },
    'pie': { name: 'Apple Pie', price: 5.99 },
    'icecream': { name: 'Ice Cream', price: 4.99 },
    'brownie': { name: 'Brownie', price: 4.99 },
    'cookie': { name: 'Cookie', price: 2.99 },
    'cheesecake': { name: 'Cheesecake', price: 7.99 },
    'pudding': { name: 'Chocolate Pudding', price: 3.99 },
    'sundae': { name: 'Ice Cream Sundae', price: 5.99 },
    'tart': { name: 'Fruit Tart', price: 6.99 },

    'soda': { name: 'Soda', price: 2.99 },
    'water': { name: 'Water', price: 1.99 },
    'juice': { name: 'Fresh Juice', price: 3.99 },
    'coffee': { name: 'Coffee', price: 2.99 },
    'tea': { name: 'Tea', price: 2.49 },
    'milk': { name: 'Milk', price: 2.99 },
    'beer': { name: 'Beer', price: 4.99 },
    'wine': { name: 'Wine', price: 7.99 },
    'cocktail': { name: 'Cocktail', price: 9.99 },

    'jsplushie': { name: 'JS Plushie', price: 12.99 },
    'jshat': { name: 'JS Hat', price: 15.99 },
    'jskeychain': { name: 'JS Keychain', price: 3.99 },
    'jsmug': { name: 'JS Coffee Mug', price: 8.99 },
    'jssocks': { name: 'JS Socks', price: 7.99 },
    'jsgiftcard': { name: 'JS Gift Card', price: 25.00 }
};
// cart array
let cart = [];

// so basically localStorarge saves the cart using JSON, which conveniently are similar to js objects
function loadCart() {
    const savedCart = localStorage.getItem('cart');
    if (savedCart) {
        const parsed = JSON.parse(savedCart);

        // error handling
        if (Array.isArray(parsed)) {
            cart = parsed;
        } else {
            // reset cart if its bad
            cart = [];
        }
    }
    showCart();
}

// saves the cart
function saveCart() {
    localStorage.setItem('cart', JSON.stringify(cart));
}

// addItem is the heart of the POS, it uses find to look to see if the item is already in the cart
// if it exists it adds to the quantity, if it doesnt, push will add it
function addItem(itemName) {
    if (itemData[itemName]) {
        const existingItem = cart.find(item => item.id === itemName);

        if (existingItem) {
            existingItem.quantity++;
        } else {
            const item = itemData[itemName];
            cart.push({
                id: itemName,
                name: item.name,
                price: item.price,
                quantity: 1
            });
        }

        showCart();
        saveCart();
    }
}

// show whats in the cart
function showCart() {
    const cartItemsContainer = document.getElementById("cart-items");
    let total = 0;

    // clears the container
    cartItemsContainer.innerHTML = "";

    //  loops through the items to make the divs
    cart.forEach(item => {
        if (item.quantity > 0) {
            const itemTotal = item.quantity * item.price;
            total += itemTotal;

            // creates the div
            const itemDiv = document.createElement("div");
            // sets the class to items and appends it
            itemDiv.className = "items";
            itemDiv.innerHTML = `${item.quantity}x ${item.name} - $${itemTotal.toFixed(2)}`;
            cartItemsContainer.appendChild(itemDiv);
        }
    });

    // updates the total
    document.getElementById("cart-total").innerHTML = total.toFixed(2);
}

// clears cart
function clearCart() {
    cart = [];
    showCart();
    saveCart();
}

// checkout function
function checkout() {
    // uses reduce to calculate total
    const total = cart.reduce((sum, item) => {
        return sum + (item.quantity * item.price)
    }, 0);

    // shows what the total of the purchase was
    if (total > 0) {
        alert(`Purchase Complete. Total: $${total.toFixed(2)}`);
        clearCart();
    } else {
        alert('yo its empty');
    }
}