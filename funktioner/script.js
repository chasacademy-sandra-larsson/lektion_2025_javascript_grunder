
// Deklarerar en funktion 

// Med argument och return
function addTen(num1, num2) {
    return num1 + num2 + 10;
}

const result = addTen(2, 4);
console.log(result);


// Med argument men utan return
function fruitJuicer(fruit) {
    console.log(fruit + "-juice");
}

fruitJuicer("lime");
fruitJuicer("peach");

// Functionsutryck (function expression)
const subtract = function(num1, num2) {
    return num2 - num1;
}

const diff = subtract(5,4);
console.log(diff);


// Skriva villkor i en funktion - return avslutar funtkion omedelbart

function checkAvailability(stock) {
    if(stock <= 0) {
        return "Varan är slut";
    } else if(stock <= 10) {
        return "Det finns få kvar";
    } else if(stock > 10) {
        return "Det finns många kvar";
    } else {
        return "Något gick fel";
    }
}

const tShirtInStock = 5;
const jeansInStock = 11;
console.log(`${checkAvailability(tShirtInStock)} T-shirts`);
console.log(`${checkAvailability(jeansInStock)} jeans`);

// Arrow-function - pilfunktioner - endast ett komprimerat skrivsätt!
 const multiply = (num1, num2) => {
    return num2 * num1;
}