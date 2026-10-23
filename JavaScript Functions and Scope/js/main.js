// What are functions in JavaScript?

// Când înveți pentru prima dată cum să calculezi aria unui dreptunghi,
//  există o secvență de pași pentru a calcula răspunsul corect:

// 1. Măsurați lățimea dreptunghiului.
// 2. Măsurați înălțimea dreptunghiului.
// 3. Înmulțiți lățimea și înălțimea dreptunghiului.

// Putem calcula aria unui dreptunghi cu următorul cod:
const width = 10;
const height = 6;
const area = width * height;
console.log(area); // Output: 60

// Imaginează-ți că ți se cere să calculezi aria a trei dreptunghiuri diferite:
// Area of the first rectangle
const width1 = 10;
const height1 = 6;
const area1 = width1 * height1;

// Area of the second rectangle
const width2 = 4;
const height2 = 9;
const area2 = width2 * height2;

// Area of the third rectangle
const width3 = 10;
const height3 = 10;
const area3 = width3 * height3;

// Function declaration
function getReminder() {
  console.log("Water the plants.");
}

function greetInSpanish() {
  console.log("Buenas tardes.");
}

// Calling a function
function sayThanks() {
  console.log("Thank you for your purchase! We appreciate your business.");
}
sayThanks();
sayThanks();
sayThanks();

// Parameters and arguments
function sayThanks(name) {
  console.log(
    "Thank you for your purchase, " + name + "! We appreciate your business.",
  );
}
sayThanks("Cole");

// Default parameters
function makeShoppingList(item1 = "milk", item2 = "bread", item3 = "eggs") {
  console.log(`Remember to buy ${item1}`);
  console.log(`Remember to buy ${item2}`);
  console.log(`Remember to buy ${item3}`);
}
// makeShoppingList(); cu asta activez toate itemele default

// Return
function monitorCount(rows, columns) {
  return rows * columns;
}
const numOfMonitors = monitorCount(5, 4);
console.log(numOfMonitors);

// Auxiliary function
function monitorCount(rows, columns) {
  return rows * columns;
}
function costOfMonitors(rows, columns) {
  return monitorCount(rows, columns) * 200;
}
const totalCost = costOfMonitors(5, 4);
console.log(totalCost);

// Function expressions
const plantNeedsWater = function (day) {
  if (day === "Wednesday") {
    return true;
  } else {
    return false;
  }
};
plantNeedsWater("Tuesday");
console.log(plantNeedsWater("Tuesday"));

// Arrow functions
// const plantNeedsWater = (day) => {
//   if (day === 'Wednesday') {
//     return true;
//   } else {
//     return false;
//   }
// };

// Concise body arrow functions
// const plantNeedsWater = day => day === 'Wednesday' ? true : false;

// Deci, dacă avem o funcție:

// const squareNum = (num) => {
//   return num * num;
// };

// Copy to Clipboard

// Putem refactoriza funcția astfel:

// const squareNum = num => num * num;

// Copy to Clipboard

// Observați următoarele modificări:

// - Parantezele din jurul num au fost eliminate, deoarece are un singur parametru.
// - Acoladele { }au fost eliminate, deoarece funcția constă dintr-un bloc pe o singură linie.
// - Cuvântul returncheie a fost eliminat deoarece funcția constă dintr-un bloc pe o singură linie.

// Scope
// Block and scope

const city = "New York City";
function logCitySkyline() {
  let skyscraper = "Empire State Building";
  return "The stars over the " + skyscraper + " in " + city;
}
console.log(logCitySkyline());

// Global scope
const satellite = "The Moon";
const galaxy = "The Milky Way";
const stars = "North Star";
function callMyNightSky() {
  return "Night Sky: " + satellite + ", " + stars + ", and " + galaxy;
}
console.log(callMyNightSky());

// Block scope
const logVisibleLightWaves = () => {
  const lightWaves = "Moonlight";
  console.log(lightWaves);
};
logVisibleLightWaves();
// console.log(lightWaves) //Vei observa că înregistrează o valoare, 
// ReferenceError deoarece variabila este legată de domeniul de aplicare al blocului funcției!


// Scope pollution
// const satellite = "The Moon";
// const galaxy = "The Milky Way";
// let stars = "North Star";

// const callMyNightSky = () => {
//   stars = "Sirius";
// 	return "Night Sky: " + satellite + ", " + stars + ", and " + galaxy;
// };

// console.log(callMyNightSky());
// console.log(stars);
// În acest exemplu, am declarat o variabilă globală stars și am modificat valoarea acesteia în 
// interiorul funcției callMyNightSky.


// Practice Good Scoping
// const logVisibleLightWaves = () => {
//   let lightWaves = 'Moonlight';
// 	let region = 'The Arctic';
//   // Add if statement here:
//   if(region === 'The Arctic'){
//     let lightWaves = 'Northern Lights';
//     console.log(lightWaves);
//   }
//   console.log(lightWaves);
// };
// logVisibleLightWaves();


// 