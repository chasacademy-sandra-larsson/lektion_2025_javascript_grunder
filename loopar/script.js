

const myArray = [2, 3, 4, 6, 78, 100];

// krångligt att läsa ut var värde för sig
const val1 = myArray[0]; 
const val2 = myArray[1]; 
const val3 = myArray[2];
const val4 = myArray[3]; 
const val5 = myArray[4];
const val6 = myArray[5];

// for loop
//.   start.    så länge sant?     hur vi räknar upp/ner
for(let i = 0; i < myArray.length; i++) {
    console.log(myArray[i]);
}

// forEach-loop - förenkling av for. Den itererar varje värde i en array
console.log("forEach-loop");
myArray.forEach(function(item) {
    console.log(item);
});

// while-loop
let gameOver = true;

// Så länge något utrryck är sant
while(gameOver) {
    console.log("Game over!");
    break;
}


