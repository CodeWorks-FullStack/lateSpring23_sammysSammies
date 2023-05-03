
const sandwiches = [
    {
        name: 'Caprese',
        price: 11,
        quantity: 0
    },
    {
        name: 'BLT',
        price: 10,
        quantity: 0
    },
    {
        name: 'Foie Gras on Focaccia',
        price: 21,
        quantity: 0
    },
    {
        name: 'Organic Guacamole Bacon Gouda',
        price: 19,
        quantity: 0
    },
    {
        name: 'Smoked Grilled Gouda Deluxe',
        price: 11,
        quantity: 0
    }
]


function buyCaprese() {
    // I need to know what sandwich I want to buy...find the caprese
    // 'purchase' the sandwich...increase the sandwich's quantity
    console.log('buying caprese')
    let foundSandwich = sandwiches[0]
    foundSandwich.quantity++
    drawCart()
    console.log(foundSandwich)
}

function buyBLT() {
    console.log('buying the BLT')
    let foundSandwich = sandwiches[1]
    foundSandwich.quantity++
    drawCart()
    console.log(foundSandwich)
}

// ANCHOR this function is the above two functions refactored
function buySandwich(sandwichName) {
    // ANCHOR debugger allows you to pause your code and debug it in real time
    // debugger
    console.log('buying sandwich', sandwichName)
    // I need to know what sandwich I want to buy...find the sandwich
    // 'purchase' the sandwich...increase the sandwich's quantity
    // after increases the quantity, show the change in my cart
    let foundSandwich = sandwiches.find(sandwich => sandwich.name == sandwichName)
    foundSandwich.quantity++
    console.log(foundSandwich)
    drawCart()
}

function drawCart() {
    console.log('drawing cart')
    // debugger
    // look at all the sandwiches
    // for each sandwich that I have purchased...draw it to my cart (check the quantity)
    // after checking all the sandwiches, update the DOM (draw it to the page)
    let template = ''
    sandwiches.forEach(s => {
        if (s.quantity > 0) {
            // NOTE if you want to do string interpolation, you must 
            template += `
                        <div class="d-flex justify-content-around align-items-baseline">
                            <p>${s.name}</p>
                            <p>x${s.quantity}</p>
                            <p>$${s.price}</p>
                            <button onclick="removeItem('${s.name}')" class="btn text-danger"><i class="mdi mdi-delete"></i></button>
                        </div>`
        }
    })
    document.getElementById('cart').innerHTML = template
    drawTotal()
}

function drawTotal() {
    // look at all of my sandwiches
    // for each sandwich that I have purchased (check the quantity)
    // if I purchased the sandwich, give me the total price of the quantity of that sandwich
    // take the price of each sandwich and its quantity, and add it to my total

    let total = 0
    sandwiches.forEach(s => s.quantity > 0 ? total += s.quantity * s.price : total += 0)
    console.log(total, 'total');

    document.getElementById('total').innerText = total.toString()
}


function checkout() {
    // look at all of the sandwiches
    // set each sandwich's quantity to 0
    // draw the change to page...draw the cart again

    if (window.confirm("Are you ready to checkout?")) {
        sandwiches.forEach(s => {
            s.quantity = 0
        })
        drawCart()
    }
}

function removeItem(sandwichName) {
    console.log('removing item', sandwichName)
    // find the sandwich I want to remove
    // after finding the sandwich, decrease its quantity
    // update the page

    let foundSandwich = sandwiches.find(s => s.name == sandwichName)
    foundSandwich.quantity--
    console.log(foundSandwich);
    drawCart()
}




