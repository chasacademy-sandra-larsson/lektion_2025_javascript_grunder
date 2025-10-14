// Variabler - behållare för data i Javascript och alla andra programmeringspråk

// 1. Deklarera en variabel gör med antingen "const" eller "let"
let myNumber; // variabeln har inget värde så den är undefined
console.log(myNumber);


// 2. Tilldela variabeln ett värde
let myNumber2 = 5;
console.log("myNumber2", myNumber2);

// 3. Tilldela en variabel en annan variabels värde
let anotherNumber = myNumber2;
console.log("anotherNumber", anotherNumber);

// 4. Uppdater variablens värde
myNumber = 10;
myNumber = myNumber + 3;
console.log("myNumber", myNumber);

// 5. Ta bort variabelns värde
myNumber = null;
console.log("myNumber", myNumber)

// 6. Att skriva variabelnamn 
// - var deskriptiv
// - använd engelska
// - konvention camelCase

// 7. Variabler kan deklareras med let eller const (ES6), var är old school 
// en let går att förändra
// en const går inte att förändra
// TIPS: Börja att deklarera en variable med const. Om du märker att variabelns värde kommer behöva att ändras, ändra då till let
const secretNumber = 1234;
console.log("secretNumber", secretNumber);
// Går inte att ändra då det är en const!
// secretNumber = "hej";
// console.log("secretNumber", secretNumber)

// 8. Datatyper. Javascript är ett löst typat språk. Det innebär att man inte behöver sätta datatyp från början. JS listar datatypen. (sen ska vi köra Typescript ;-)
const message = "hej";
const num = 10;
const bool = true;
let test; 

// 9. Kolla datatyp med typeof
console.log("message", message, typeof(message));
console.log("num", num, typeof(num));
console.log("bool", bool, typeof(bool));
console.log("undefined", test, typeof(test));

// 10. Operatorer (de som man räknar med)
// +, -, *, /, ()
const sum = 1 + 120 - 3;
let prod = 9 * 8;
console.log("sum", sum, "prod", prod);

// 11. Öka eller minska något med ett tal
let counter = 0;
// counter = counter + 1;
counter += 1; // samma som raden ovan, men kortare skrivsätt
console.log("counter", counter);
counter -= 2;
console.log("counter", counter);
counter *= 10;
console.log("counter", counter);

// 12. Modulo % - beräknar resten
let remainder = 100 % 3;
console.log("remainder", remainder);


// Är detta tal jämnt?
let number = 52;
const isEven = number % 2 === 0;
console.log("isEven", isEven);