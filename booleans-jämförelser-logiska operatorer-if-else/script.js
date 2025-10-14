debugger; // öppnar debugger i dev-tools
/* 1. Boolean (sant eller falskt, true eller false)*/
let myBool = true;
console.log("myBool", myBool, typeof(myBool));
myBool = false;


// 2. Jämförelseoperatorer 
// - Likhet (==): Används för att kontrollera om två värden är lika.
// - Olikhet (!=): Används för att kontrollera om två värden inte är lika.
// - Strikt likhet (===): Kontrollerar likhet, men inkluderar även datatypskontroll.
// - Strikt olikhet (!==): Kontrollerar olikhet, inklusive datatypskontroll.
// - Större än (>): Används för att kontrollera om ett värde är större än ett annat.
// - Mindre än (<): Används för att kontrollera om ett värde är mindre än ett annat.
// - Större än eller lika med (>=): Används för att kontrollera om ett värde är större än eller lika med ett annat.
// - Mindre än eller lika med (<=): Används för att kontrollera om ett värde är mindre än eller lika med ett annat.

const age = 55;

const isSenior = age >= 65;
console.log("isSenior", isSenior);

const isJunior = age < 18;
console.log("isJunior", isJunior);

// == ger lika även om datatyperna inte är samma
let is18 = (age == '18');
console.log("is18", is18);

// 3. Strikt likhet === . Både värdet och dataypen ska vara samma!
let is65 = (age === 65);
console.log("is65", is65);
// Best practice är att använda strikt likhet === i JS!


// 4. Logiska operatorer 
// - Och (&&): Används för att kontrollera om båda uttrycken är sanna.
// - Eller (||): Används för att kontrollera om minst ett av uttrycken är sant.
// - Inte (!): Används för att invertera ett booleskt värde (sant blir falskt och vice versa).

// Är kunden medlem? 
let isMember = false;

// Kunden har seniorrabatt om den är medlem och över 65 - isSenior
const isQualifiedForSeniorDiscount = isMember && isSenior;
console.log("isQualifiedForSeniorDiscount", isQualifiedForSeniorDiscount);

// Kunden har seniorrabatt om den är medlem och över 65 - isSenior
const isQualifiedForJuniorDiscount = isMember && isJunior;
console.log("isQualifiedForJuniorDiscount", isQualifiedForJuniorDiscount);

const isQualifiedForAnyDiscount = isMember || isQualifiedForSeniorDiscount || isQualifiedForJuniorDiscount;
console.log("isQualifiedForAnyDiscount", isQualifiedForAnyDiscount);

// Negation NOT medn !
// isMember = !isMember;
// console.log("isMember", isMember);

// Villkor if/else, if/else if/else

if(isQualifiedForSeniorDiscount) {
    console.log("Du får seniorrabbat");
} else if(isQualifiedForJuniorDiscount) {
    console.log("Du får juniorrabatt");
} else if(isQualifiedForAnyDiscount) {
    console.log("Du får rabbat för att du är medlem på något");
} else {
    console.log("Du har ingen kundrabatt");
}

// Controlflow - hur programmet styrs, i vilken ordning och på vilket sätt olika delar av koden körs
// Programmet flyttar sug från en instruktion till en annan beroende på villkor och andra strukturer.

// Testa controlflow genom att använda debugger i consolen