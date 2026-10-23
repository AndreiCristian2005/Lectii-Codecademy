// Lessons Codecademy

// Console
console.log(21);
console.log(3.7);

// Comments
console.log("Hello World!"); // This is a comment
/*
This is a multi-line comment
*/

// Data Types
console.log("JavaScript");
console.log(2026);
console.log("Woohoo! I love to code! #codecademy");
console.log(50.03);

// Arithmetic Operators
console.log(3.7 + 4.2);
console.log(5 - 4.8);
console.log(3 * 4);
console.log(4 / 2);
console.log(5 % 2);

// String Concatenation
console.log("Hello" + "World");
console.log("Hello " + "World");

// Properties
console.log("Hello, my name is Andrei".length);

// Methods
console.log("Hello, my name is Andrei".toUpperCase());
console.log("   Remove whitespace   ".trim());

// Built-in Objects
console.log(Math.floor(Math.random() * 100));
console.log(Math.floor(Math.random() * 100));
console.log(Math.ceil(43.8));
console.log(Number.isInteger(2017));

// Variables
let favoriteFood = "pizza";
let numOfSlices = 8;
console.log(favoriteFood);
console.log(numOfSlices);

// Variable let
let changeMe = true;
changeMe = false;
console.log(changeMe);

// Variable const
const entree = "Enchiladas";
console.log(entree);
// entree = 'Tacos';

// Matematical Assignment Operators
let levelUp = 10;
levelUp += 5;
let powerLevel = 9001;
powerLevel -= 100;
let multiplyMe = 32;
multiplyMe *= 11;
let quarterMe = 1152;
quarterMe /= 4;

console.log("The value of levelUp:", levelUp);
console.log("The value of powerLevel:", powerLevel);
console.log("The value of multiplyMe:", multiplyMe);
console.log("The value of quarterMe:", quarterMe);

// The increment and decrement operator
let gainedDollar = 3;
gainedDollar++;
let lostDollar = 50;
lostDollar--;

console.log(gainedDollar);
console.log(lostDollar);

// String Concatenation with Variables
let favoriteAnimal = "Cutu";
console.log("My favorite animal: " + favoriteAnimal);

// String Interpolation
let myName = "Andrei";
let myCity = "Los Angeles";
console.log(`My name is ${myName}. My favorite city is ${myCity}.`);

// typeof operator
let newVariable = "Playing around with typeof.";
console.log(typeof newVariable);
newVariable = 1;
console.log(typeof newVariable);

const unknown1 = "foo";
console.log(typeof unknown1); // Output: string (pentru text)

const unknown2 = 10;
console.log(typeof unknown2); // Output: number (pentru numere)

const unknown3 = true;
console.log(typeof unknown3); // Output: boolean (pentru valori adevarate sau false)

// Weather Kelvin

// Prognoza de astazi este in Kelvin
const kelvin = 0;

// Am convertit grade Kelvin in grade Celsius
const celsius = kelvin - 273;

// Am calculat fahrenheit
let fahrenheit = celsius * (9 / 5) + 32;

// Am rotunjit temperatura in Fahrenheit
fahrenheit = Math.floor(fahrenheit);
console.log(`The temperature is ${fahrenheit} degrees Fahrenheit.`);

// Convert to Newton
let newton = celsius * (33 / 100);

// Round down
newton = Math.floor(newton);

console.log(`The temperature is ${newton} degrees Newton.`);

// Dog Years
const myAge = 21; // This is my age
let earlyYears = 2; // This is age my dog
earlyYears *= 10.5;
let laterYears = myAge - 2; // Am scazut din varsta myAge
laterYears *= 4; // Am inmultit cu 4
console.log(earlyYears, laterYears);
const myAgeInDogYears = earlyYears + laterYears;
let myNames = "Andrei".toLowerCase();
console.log(
  `My name is ${myNames}. I am ${myAge} years old in human years, which is ${myAgeInDogYears} years old in dog years.`,
);

// Conditional Statements
// if, else if, și else declarații
let sale = true;
sale = false; // Codul nu se va afisa deoarece sale este fals
if (sale) {
  console.log("Time to buy!");
}

// Instructions If....Else
// let sale = true;
// sale = false;
if (sale) {
  console.log("Time to buy!");
} else {
  console.log("Time to wait for a sale.");
}

// Comparison Operators

// mai puțin decât: <
// mai mare decât: >
// mai mic sau egal cu: <=
// mai mare sau egal cu: >=
// este egal cu: ===
// nu este egal cu: !==

let hungerLevel = 7;
if (hungerLevel > 7) {
  console.log("Time to eat!");
} else {
  console.log("We can eat later!");
}

// Logical Operators

// operatorul și ( &&) => trebuie sa fie adevărat ambele condiții pentru ca rezultatul să fie adevărat

// operatorul sau ( ||) => trebuie să fie adevărată cel puțin o condiție pentru ca rezultatul să fie adevărat

// operatorul not , cunoscut și sub numele de operatorul bang ( !) =>

let mood = 'sleepy';
let tirednessLevel = 6;
if(mood === 'sleepy' && tirednessLevel > 8) {
console.log('time to sleep');
} else {
console.log('not bedtime yet');
}

// Puteți chiar adăuga paranteze opționale pentru a fi mai clar pentru alți dezvoltatori:
// if(('apples' === 'oranges') && (10 > 5)) {
//   console.log('Both statements are true!')
// } else {
//   console.log('At least one statement is false!')
// }


// True and False

// Lista valorilor false include:
// 0
// - șiruri goale precum ""sau''
// - null, care reprezintă momentul în care nu există nicio valoare
// - undefined, care reprezintă momentul în care unei variabile declarate îi lipsește o valoare
// - NaN, sau Nu este un număr

let wordCount = 21;

if (wordCount) {
  console.log("Great! You've started your work!");
} else {
  console.log('Better get to work!');
}


let favoritePhrase = '';

if (favoritePhrase) {
  console.log("This string doesn't seem to be empty.");
} else {
  console.log('This string is definitely empty.');
}


// Truthy and Falsy Assignment
let tool = 'marker'; // Daca nu am fi definit tool, atunci writingUtensil va fi egal cu 'pen'

// Use short-circuit evaluation to assign  writingUtensil variable below:
let writingUtensil = tool || 'pen';

console.log(`The ${writingUtensil} is mightier than the sword.`);


// Ternary Operator
// let isLocked = false;

// isLocked ? console.log('You will need a key to open the door.') : console.log('You will not need a key to open the door.');

// let isCorrect = true;

// isCorrect ? console.log('Correct!') : console.log('Incorrect!');

// let favoritePhrase = 'Love That!';

// favoritePhrase === 'Love That!' ? console.log('I love that!') 
// : console.log("I don't love that!");


// Else If Statements
let season = 'summer';

if (season === 'spring') {
  console.log('It\'s spring! The trees are budding!');
} else if(season === 'winter') {
  console.log('It\'s winter! Everything is covered in snow.');
} else if(season === 'fall') {
  console.log('It\'s fall! Leaves are falling!');
} else if(season === 'summer') {
  console.log('It\'s sunny and warm because it\'s summer!')
} else {
  console.log('Invalid season.');
}

// The Switch Statement
let athleteFinalPosition = 'first place';
switch (athleteFinalPosition) {
  case 'first place':
  console.log('You get the gold medal!');
  break;
  case 'second place':
  console.log('You get the silver medal!');
  break;
  case 'third place':
  console.log('You get the bronze medal!');
  break;
  default:
  console.log('No medal awarded.');
  break;
}


