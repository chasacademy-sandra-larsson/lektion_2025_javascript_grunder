
// Varför arrayer?

// Istället för att ha flera variabler...
// const fruit1 = "apple";
// const fruit2 = "banana";
// const fruit3 = "orange";

// Så kan vi ha alla värden kopplade till en array. Och man kan enkelt iterera kring en array! (vi ska kolla på det strax)
//const fruit = ["apple", "banana", "orange"];
//Index           0.        1.       2


// CRUD - CREATE, READ, UPDATE, DELETE 

// CREATE 
const fruit = ["apple", "banana", "orange"]; // Skapa en array med fördefinerade värden
const numbers = [] // Skapa en tom array

// READ 
// Att access index för arrayen
//console.log(fruit[0]);
//console.log(fruit[1]);
//console.log(fruit[2]);
//console.log(fruit[3]); // undefined;

// ES6 Desctructering är också ett sätt - men vi tar senare!

// UPDATE 
fruit[2] = "kiwi";
//console.log(fruit[0], fruit[1], fruit[2]);
// uppdatera sista index i en array
const lastFruit = fruit[fruit.length - 1];
//console.log(lastFruit);

console.log(numbers);
numbers.push(99);       // Lägger till värdet i slutet av en array 
console.log(numbers);
numbers.push(48);
console.log(numbers);
numbers.pop(); // Tar bar det sista värdet
console.log(numbers);
numbers.push(33);
numbers.push(22);
numbers.push(11);
console.log(numbers);


// DELETE

// Ta bort specifikt värde eller värden med splice
const splicedArray = numbers.splice(1, 2);
console.log("splicedArray", splicedArray);
console.log("numbers", numbers);

// Ta bort en array med null
// numbers = null;
console.log(numbers);
