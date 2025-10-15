// Strängar i Javascript - 3 olika sätt

const s1 = "Sandra";
const s2 = 'Sandra';
const s3 = `Sandra`; // Backticks - template string

// Variabler i strngs;
const age = 30;
const name = "John Doe";


// Konkatinera strängar på 2 olika sätt

// 1. Strängkonkatinering
const greeting1 = "Hello my name is " + name + " and is " + age + " years old";
console.log(greeting1);


// 2. Template strings (ES6)
const greeting2 = `Hello my name is ${name} and is ${age} years old`; // öva på denna!
console.log(greeting2);