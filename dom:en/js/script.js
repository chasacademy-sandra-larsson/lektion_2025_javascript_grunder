

// DOM-variabler 
const form = document.getElementById("myForm");
const resultElement = document.getElementById("sum");



// Eventlyssnare på formuläret. Lyssnar på händelse av typen "submit" och kör funktionen getFormValues när detta händer
form.addEventListener("submit", getFormValues);

function getFormValues(event) {
    // Gör att sidan inte laddas om - vilket är egentligen ett formulärs natuliga beteende
    event.preventDefault();

    console.log("Formuläret har submittats!");
    const value1 = form["value1"].value;
    const value2 = form["value2"].value;

    console.log("value1", value1, typeof(value1));
    console.log("value2", value2, typeof(value2));

    // Typ-konvertera string => number. 1. parseInt() 2. Number()
    const parsedValue1 = parseInt(value1);
    const parsedValue2 = parseInt(value2);

    console.log("parsing....");
    console.log("parsedValue1", parsedValue1, typeof(parsedValue1));
    console.log("parsedValue2", parsedValue2, typeof(parsedValue2));

// obs!
//    "1" + "1" = "11" 
//    1 + 1 = 2

    const result = parsedValue1 + parsedValue2;
    
    // Visa variabbeln result i span-elementet
    resultElement.textContent = result;

}

