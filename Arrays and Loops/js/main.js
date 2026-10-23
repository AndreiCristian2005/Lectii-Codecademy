// Create a array
const hobbies = ['Keep a journal', 'Take a falconry class', 'Learn to juggle'];
console.log(hobbies);


// Accesing elements in an array
const famousSayings = ['Fortune favors the brave.', 'A joke is a very serious thing.', 'Where there is love there is life.'];
const listItem = famousSayings[0];
console.log(famousSayings[2]);


// Update elements in an array
let groceryList = ['bread', 'tomatoes', 'milk'];
groceryList[1] = 'avocados';
console.log(groceryList);


// Arrays with let and const
let condiments = ['Ketchup', 'Mustard', 'Soy Sauce', 'Sriracha'];

const utensils = ['Fork', 'Knife', 'Chopsticks', 'Spork'];
 condiments[0] = 'Mayo';
console.log(condiments);

condiments = ['Mayo'];
console.log(condiments);

utensils[3] = 'Spoon';
console.log(utensils);


// The .length property
const objectives = ['Learn a new language', 'Read 52 books', 'Run a marathon'];
console.log(objectives.length);


// The .push() Method
const chores = ['wash dishes', 'do laundry', 'take out trash'];
chores.push('nice', 'very nice');
console.log(chores);


// The .pop() Method
// const chores = ['wash dishes', 'do laundry', 'take out trash', 'cook dinner', 'mop floor'];
// chores.pop();
// console.log(chores);


// More Array Methods
// const groceryList = ['orange juice', 'bananas', 'coffee beans', 'brown rice', 'pasta', 'coconut oil', 'plantains'];
// groceryList.shift();

// groceryList.unshift('popcorn');

// console.log(groceryList.slice(1, 4));
// console.log(groceryList);
// const pastaIndex = groceryList.indexOf('pasta');
// console.log(pastaIndex);


// Arrays and Functions
const concept = ['arrays', 'can', 'be', 'mutated'];

function changeArr(arr){
  arr[3] = 'MUTATED';
}

changeArr(concept);
console.log(concept);
function removeElement (newArr) {
  newArr.pop()
}
removeElement(concept);
console.log(concept);


// Nested Arrays
const numberClusters = [[1, 2], [3, 4], [5, 6]];
const target = numberClusters[2][1];




// Loops 

// Repeating Tasks Manually
const vacationSpots = ['Los Angeles', 'New York', 'SpaceX'];
console.log(vacationSpots[0]);
console.log(vacationSpots[1]);
console.log(vacationSpots[2]);


// The For Loop
for ( let counter = 5; counter < 11; counter++) {
console.log(counter);
}


// Looping in Reverse
for (let counter = 3; counter >= 0; counter--){
  console.log(counter);
}

// Looping through Arrays
const vacation = ['Bali', 'Paris', 'Tulum'];

for (let i = 0; i < vacationSpots.length; i ++) {
  console.log('I would love to visit ' + vacation[ i ]);
}


// Nested Loops
const bobsFollowers = ['Mihaita', 'Vladut', 'Luci', 'Vasilica'];
const tinasFollowers = ['Vladut', 'Elisa', 'Mihaita'];
const mutualFollowers = [];
for (let i = 0; i < bobsFollowers.length; i ++) {
  for (let j = 0; j < tinasFollowers.length; j++) {
    if (bobsFollowers[i] === tinasFollowers[j])
   mutualFollowers.push(bobsFollowers [ i ])
  }
}


// The While Loop
const cards = ['diamond', 'spade', 'heart', 'club'];
let currentCard
while ( currentCard !== 'spade') {
  currentCard = cards[Math.floor(Math.random() * 4)];
  console.log(currentCard);
}
// Pentru distracție, poți rula codul de câteva ori și să vezi cum se schimbă rezultatul!


// Do...While Statements
const cupsOfSugarNeeded = 21;
let cupsAdded = 0;
do {
cupsAdded++
console.log(cupsAdded + ' cup was added')
} while (cupsAdded < cupsOfSugarNeeded)


    // The break Keyword
    