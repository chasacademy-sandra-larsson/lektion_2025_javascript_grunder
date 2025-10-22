// Objekt 
// kännetecknas av {} - key-value pairs

// CRUD

// CREATE
// Skapa ett objekt

const product = {
    name: "sneakers",
    quantity: 2,
    price: 1999 
}

// READ
// 1. Punktnotation
const product1 = product.quantity;
console.log(product1);

// 2. Bracketnotation 
const product2 = product["quantity"];
console.log(product2);

// 3. Objekt destructering - bonus - vi ska kolla på det senare
const { quantity } = product;
console.log(quantity);

// UPDATE 

// Uppdatera ett objekt med punktnotation
product.name = "cap";
product.price = 199;
product.quantity = 3;

// Uppdatera ett objekt med bracketnotation
product["name"] = "trousers";
product["price"] = 399;
product["quantity"] = 3;

console.log(`Uppdaterade produkten är ${product.name} ${product.price} ${product.quantity}`);

// Fokusera främst på punktnotation, men ha bracketnotationen i bakhuvudet!

// DELETE 
delete product.price;
delete product["name"];
console.log(product.price, product.name);

// Nästlade objekt
const userProfile = {
    name: "Alice",
    age: 30,
    // Ett objekt inuti ett annat objekt
    address: {
      street: "123 Main St",
      city: "Stockholm",
      country: "Sweden"
    },
    contact: {
      email: "alice@example.com",
      phone: {
        home: "08-1234567",
        mobile: "070-1234567"
      }
    },
    skills: ["JavaScript", "Node.js", "React"]
  };

  console.log(userProfile.address.street);
  console.log(userProfile.skills[2]);

  // For-in-loop för objekt
  console.log("Här  börjar for-in loopen")
  for(let key in userProfile) {
    console.log(`${key}: ${userProfile[key]}`);
  }