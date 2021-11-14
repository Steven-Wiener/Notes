/////////////
// Basics //
///////////
console.log("Hello World."); // Prints 'Hello World.'
console.log("Hello".length); // Prints 5
console.log('Codecademy'.toUpperCase()); // Prints 'CODECADEMY'
console.log('    O   '.trim()); // Prints 'O'
console.log(Math.floor(43.8);	// Prints 43
console.log(Math.ceil(43.8));	// Prints 44
console.log(Number.isInteger(2017)); // Prints true

var myAge = 26; // Outdated since ES6
let myAge = 26; // Preferred since ES6
const myName = 'Steven'; // Constant, also post ES6

let myName = 'Nihilus';
let myCity = 'Madison';
// Prints 'My name is Nihilus. My favorite city is Madison.'
console.log(`My name is ${myName}. My favorite city is ${myCity}.`);

let newVariable = 'Playing around with typeof.';
console.log(typeof(newVariable)); // Prints 'string'
newVariable = 1;
console.log(typeof(newVariable)); // Prints 'number'


// If/else ----------------------------------------------------------------------------
let mood = 'sleepy';
let tirednessLevel = 6;

// "===" means same type and value, "==" means same value
if (mood === 'sleepy' && tirednessLevel > 8) {
	console.log('time to sleep');
} else {
	console.log('not bed time yet');
} // Prints 'not bed time yet'

// Shorthand
let defaultName;
if (username) {
	defaultName = username;
} else {
	defaultName = 'Stranger';
}
// ... is equivalent to ...
let defaultName = username || 'Stranger';

// Ternary
if (name === 'Nihilus') {
	console.log('Beast');
} else {
	console.log('Pleb');
}
// ... is equivalent to ...
(name === 'Nihilus') ? console.log('Beast') : console.log('Pleb');

// Switch/Case ------------------------------------------------------------------------
let groceryItem = 'papaya';

switch (groceryItem) {
	case 'tomato':
		console.log('Tomatoes are $0.49');
		break;
	case 'lime':
		console.log('Limes are $1.49');
		break;
	case 'papaya':
		console.log('Papayas are $1.29');
		break;
	default:
		console.log('Invalid item');
		break;
} // Prints 'Papayas are $1.29'

////////////////
// Functions //
//////////////
function makeShoppingList(item1 = 'milk', item2 = 'bread', item3 = 'eggs'){
  console.log(`Remember to buy ${item1}`);
  console.log(`Remember to buy ${item2}`);
  console.log(`Remember to buy ${item3}`);
} // Default values for items are milk, bread, and eggs, can be changed

// Function Expression (ES6)
const calculateArea = function(width, height) {
	const area = width * height;
	return area;
} // Unlike function declarations, function expressions are not hoisted so they cannot
	// be called before they are defined

// Same function using arrow function syntax (ES6)
const calculateArea = (width, height) => {
	const area = width * height;
	return area;
}

/*	Functions that take only a single parameter do not need that parameter to be
	enclosed in parentheses. However, if a function takes zero or muliple parameters,
 	parentheses are required  */
// Zero parameters
const functionName = () => {};
// one parameter
const functionName = paramOne => {};
// Two or more parameters
const functionName = (paramOne, paramTwo) => {};

/*	A function body composed of a single-block does not need curly braces. Without the
	curly braces, whatever that line evaluates will be automatically returned. The
	contents of the block should immediately follow the arrow *=>* and the return
	keyword can be removed. This is referred to as implicit return  */
// Single-line block
const sumNumbers = number => number + number;
// Multi-line block
const sumNumbers = number => {
	const sum = number + number;
	return sum;
}

/////////////
// Arrays //
///////////
let condiments = ['Ketchup', 'Mustard', 'Soy Sauce', 'Sriracha'];
const utensils = ['Fork', 'Knife', 'Chopsticks', 'Spork'];
condiments[0] = 'Mayo'; // condiments = ['Mayo', 'Mustard', 'Soy Sauce', 'Sriracha']
condiments = ['Mayo'];  // condiments = ['Mayo']
utensils[3] = 'Spoon';  // utensils = ['Fork', 'Knife', 'Chopsticks', 'Spoon']
utensils = ['Meat Fingers']; // ** DOES NOT WORK, TypeError **
// Elements in const array remain mutable, but cannot reassign a new array or variable

// Push, pop, shift, unshift
const list = ['A', 'B', 'C', 'D', 'E'];
list.push('F');			// list = ['A', 'B', 'C', 'D', 'E', 'F']
let F = list.pop();		// list = ['A', 'B', 'C', 'D', 'E']		, F = 'F'
let A = list.shift();	// list = ['B', 'C', 'D', 'E']			, A = 'A'
list.unshift('A', 'X'); // list = ['A', 'X', 'B', 'C', 'D', 'E']

// Join
var elements = ['Fire', 'Wind', 'Rain'];
console.log(elements.join());		// output: "Fire,Wind,Rain"
console.log(elements.join(''));		// output: "FireWindRain"
console.log(elements.join('-'));	// output: "Fire-Wind-Rain"

// Slice (Non-Mutating:animals remains unchanged after calling slice)
var animals = ['ant', 'bison', 'camel', 'duck', 'elephant'];
console.log(animals.slice(2));		// output: Array ["camel", "duck", "elephant"]
console.log(animals.slice(2, 4));	// output: Array ["camel", "duck"]
console.log(animals.slice(1, 5));	// output: Array ["bison", "camel", "duck", "elephant"]

// Splice
var months = ['Jan', 'March', 'April', 'June'];
months.splice(1, 0, 'Feb');	// inserts at 1st index position
console.log(months);		// output: Array ['Jan', 'Feb', 'March', 'April', 'June']
months.splice(4, 1, 'May');	// replaces 1 element at 4th index
console.log(months);		// output: Array ['Jan', 'Feb', 'March', 'April', 'May']

// Concat
var array1 = ['a', 'b', 'c'];
var array2 = ['d', 'e', 'f'];
console.log(array1.concat(array2)); // output: Array ["a", "b", "c", "d", "e", "f"]

// Functions as Parameters ------------------------------------------------------------
const addTwo = num => num + 2;
const checkConsistentOutput = (func, value) => {
	let res1 = func(value);
	let res2 = func(value);
	return (res1 != res2) ? 'This function returned inconsistent results' : res1;
}
console.log(checkConsistentOutput(addTwo, 5)); // output: 7
////////////////
// Iterators //
//////////////
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array
// .forEach() : Executes provided function once for each array element
const list = ['A', 'B', 'C'];
list.forEach(item => {
	console.log(item);
}); /* Output:
		'A'
		'B'
		'C' */
// Another method:
function printList(item) {
	console.log(item);
}
list.forEach(printList);

// .map() : Creates new array with results of calling function on every element in calling array
const numbers = [1, 2, 3, 4, 5];
const squareNumbers = numbers.map(number => {
	return number * number;
});
console.log(squareNumbers); // Output: [ 1, 4, 9, 16, 25 ]
// Another example:
const animals = ['Hen', 'elephant', 'llama', 'leopard', 'ostrich', 'Whale', 'octopus', 'rabbit', 'lion', 'dog'];
const secretMessage = animals.map(animal => {
	return animal[0];
});
console.log(secretMessage.join('')); // Output: 'HelloWorld'

// .filter() : Creates new array with all elements that pass test
const things = ['desk', 'chair', 5, 'backpack', 3.14, 100];
const onlyNumbers = things.filter(thing => {
	return typeof thing === 'number';
});
console.log(onlyNumbers); // Output: [ 5, 3.14, 100 ]

// .indexOf(item, start) : Searches array for specified item starting from 'start' if provided, default 0, and returning the position of the first occurance, or -1 if not found
// .lastIndexOf(item, start): Same as previous but words backward from 'start' or end of array
const fruits = ["Banana", "Apple", "Orange", "Apple", "Mango"];
const firstApple = fruits.indexOf("Apple"); // firstApple = 1
const lastApple = fruits.lastindexOf("Apple"); // lastApple = 3

// .findIndex() : Returns index of first element that satisfies test, -1 if nothing passed
const animals = ['hippo', 'tiger', 'lion', 'seal', 'cheetah', 'monkey', 'salamander', 'elephant'];
const foundAnimal = animals.findIndex(animal => {
	return animal === 'elephant';
});
console.log(foundAnimal); // Output: 7 
// Another example:
const startsWithS = animals.findIndex(animal => {
	return animal[0] === 's';
});
console.log(startsWithS); // Output: 3
// .find() : Same as previous, but returns actual value, not index
const seal = animals.find(animal => {
	return animal[0] === 's';
});
console.log(seal); // Output: seal

// .reduce() : Executes reducer function on each member of array from LEFT TO RIGHT resulting in single output
// .reduceRight() : Ditto last line but RIGHT TO LEFT
const numbers = [1, 2, 4, 10];
const summedNums = numbers.reduce((accumulator, currentValue) => {
	return accumulator + currentValue;
});
/*
Iteration	accumulator	currentValue	return value
First		1			2				3
Second		3			4				7
Third		7			10				17
*/
console.log(summedNums) // Output: 17

const summedNums = numbers.reduce((accumulator, currentValue) => {
	return accumulator + currentValue;
}, 100);  // <- Second argument for .reduce(), initial value for accumulator
/*
Iteration	accumulator	currentValue	return value
First		100			1				101
Second		101			2				103
Third		103			4				107
Fourth		107			10				117
*/
console.log(summedNums) // Output: 117

// .some() : Tests whether at least one element in the array passes the test
var array = [1, 2, 3, 4, 5];
var even = function(element) {	// checks whether an element is even
	return element % 2 === 0;
};
console.log(array.some(even)); // Output: true

// .every() : Tests whether all elements in array pass test
var lessThanSix = function(element) {	// checks whether all elements are less than six
	return element < 6;
};
console.log(array.some(even)); // Output: true

// Objects ----------------------------------------------------------------------------
let spaceship = {
	'Fuel Type': 'Turbo Fuel',
	'Active Duty': true,
	homePlanet: 'Earth',
	numCrew: 5
};
spaceship['Active Duty'];   // Returns true
spaceship['Fuel Type'];   // Returns  'Turbo Fuel'
spaceship.numCrew;   // Returns 5
spaceship['!!!!!!!!!!!!!!!'];   // Returns undefined

const spaceship = {type: 'shuttle'}; // Can't reassign object in const, but can mutate
spaceship = {type: 'alien'}; // TypeError: Assignment to constant variable.
spaceship.type = 'alien'; // Changes the value of the type property
spaceship.speed = 'Mach 5'; // Creates a new key of 'speed' with a value of 'Mach 5'
delete spaceship.speed; // Removes speed property

// Object Methods ---------------------------------------------------------------------
const alienShip = {
	invade: function () { 
		console.log('Hello! We have come to dominate your planet. Instead of Earth, it shall be called New Xaculon.')
	}
};
// New syntax in ES6:
const alienShip = {
	invade () { 
		console.log('Hello! We have come to dominate your planet. Instead of Earth, it shall be called New Xaculon.')
	}
};
alienShip.invade(); // Prints 'Hello! We have come to dominate your planet. Instead of Earth, it shall be called New Xaculon.'

// Nested methods ---------------------------------------------------------------------
let retreatMessage = 'We no longer wish to conquer your planet. It is full of dogs, which we do not care for.';
const alienShip = {
  retreat () {
    console.log(retreatMessage);
  }, // Must include this comma
  takeOff () {
    console.log('Spim... Borp... Glix... Blastoff!');
  }
};
alienShip.retreat(); // prints retreatMessage
alienShip.takeOff(); // prints takeoff message

// Pass by reference ------------------------------------------------------------------
let spaceship = {
	homePlanet : 'Earth',
	color : 'red'
}; // spaceship = { homePlanet: 'Earth', color: 'red' }
let tryReassignment = obj => {
	obj = {
		identified : false, 
		'transport type' : 'flying'
	}
	console.log(obj) // Prints { 'identified': false, 'transport type': 'flying' }
};
tryReassignment(spaceship)	// The attempt at reassignment does not work
							// spaceship = { homePlanet: 'Earth', color: 'red' }
spaceship = {
	identified : false, 
	'transport type': 'flying'
};	// Regular reassignment still works.
	// now spaceship = { 'identified': false, 'transport type': 'flying' }

// for...in ---------------------------------------------------------------------------
let spaceship = {
	crew: {
	captain: { 
		name: 'Lily', 
		degree: 'Computer Engineering', 
		cheerTeam() { console.log('You got this!') } 
		},
	'chief officer': { 
		name: 'Dan', 
		degree: 'Aerospace Engineering', 
		agree() { console.log('I agree, captain!') } 
		},
	medic: { 
		name: 'Clementine', 
		degree: 'Physics', 
		announce() { console.log(`Jets on!`) }
		},
	translator: {
		name: 'Shauna', 
		degree: 'Conservation Science', 
		powerFuel() { console.log('The tank is full!') } 
		}
	}
};
// Lists crew roles in format '[crew member's role]: [crew member's name]', e.g.,'chief officer: Dan'
for (let crewMember in spaceship.crew) {
  console.log(`${crewMember}: ${spaceship.crew[crewMember].name}`)
};
// List crew names and degrees as '[crew member's name]: [crew member's degree]', i.e.,'Lily: Computer Engineering'
for (let crewMember in spaceship.crew) {
  console.log(`${spaceship.crew[crewMember].name}: ${spaceship.crew[crewMember].degree}`)
};

// Advanced Objects -------------------------------------------------------------------
const goat = {
	dietType: 'herbivore',
	makeSound() {
		// Calling goat.makeSound() from outside object would output 'Baa'
		console.log('baaa');
	},
	diet() {
		// Doesn't have access to dietType, output would be ReferenceError
		console.log(dietType);
		// goat.diet() would now output 'herbivore'
		console.log(this.dietType);
	}
};

/*
Arrow functions '=>' inherently bind an already defined 'this' value to the function
itself that is NOT the calling object. In the following code, the value of 'this' is
the global object, which doesn't have a dietType property and therefore returns undef.
Key point: avoid using arrow functions when using 'this' in a method
*/
const goat = {
	dietType: 'herbivore',
	makeSound() {
		console.log('baaa');
	},
	diet: () => { // Arrow function here
		console.log(this.dietType);
	}
};
goat.diet(); // Prints undefined

// Getters & Setters ------------------------------------------------------------------
const robot = {
	_model: '1E78V2', // Use '_' to indicate this shouldn't be altered
	_energyLevel: 100,
	_numOfSensors: 15,
	get numOfSensors() { // Getter method
		if (typeof this._numOfSensors === 'number') {
			return this._numOfSensors;
		} else {
			return 'Sensors are currently down.'
		}
	},
	set numOfSensors(num) { // Setter method
		if (typeof num === 'number' && num >= 0) {
			this._numOfSensors = num;
		} else {
			console.log('Pass in a number that is greater than or equal to 0');
		}
	}
};
robot.numOfSensors = 100; // Use setter method to change numOfSensors
console.log(robot.numOfSensors); // Use getter to check value (Output: 100)

// Factory functions ------------------------------------------------------------------
const robotFactory = (model, mobile) => {
	return {
		model : model,
		mobile : mobile,
		beep() {
			console.log('Beep Boop');
		}
	}
}
const tinCan = robotFactory('P-500', true); // Creates tinCan robot
tinCan.beep(); // Prints Beep Boop to notify new robot has been created

// Property Value Shorthand -----------------------------------------------------------
// Introduced in ES6, the following:..
const monsterFactory = (name, age) => {
	return { 
		name: name,
		age: age
	}
};
// ..Is equivalent to the following:
const monsterFactory = (name, age) => {
	return { 
		name,
		age 
	}
};

/* Destructured Assignment ------------------------------------------------------------
In destructured assignment, we create a variable with the name of an objects key that
is wrapped in '{ }' and assign it to the object...
*/
const vampire = {
	name: 'Dracula',
	residence: 'Transylvania',
	preferences: {
		day: 'stay inside',
		night: 'satisfy appetite'
	}
};
// So the following:..
const residence = vampire.residence; 
console.log(residence); // Prints 'Transylvania'
// ..Is equivalent to the following:
const { residence } = vampire; 
console.log(residence); // Prints 'Transylvania'
// We can even use destructured assignment to grab nested properties:
const { day } = vampire.preferences; 
console.log(day); // Prints 'stay inside'
// Also with the following (accessing functions):
const robot = {
	model: '1E78V2',
	functionality: {
		beep() {
			console.log('Beep Boop');
		},
	}
};
const { functionality } = robot;
functionality.beep(); // Prints 'Beep Boop'

// Built-in Object Methods ------------------------------------------------------------
const robot = {
	model: 'SAL-1000',
	mobile: true,
	sentient: false,
	armor: 'Steel-plated',
	energyLevel: 75
};
// Object.keys() returns array of object's property names, in same order as normal loop
const robotKeys = Object.keys(robot); // [ 'model', 'mobile', 'sentient', 'armor', 'energyLevel' ]
// Object.entries() returns array of the [key, value] pairs of objects own strings
const robotEntries = Object.entries(robot); // Output:
/*
[ [ 'model', 'SAL-1000' ],
  [ 'mobile', true ],
  [ 'sentient', false ],
  [ 'armor', 'Steel-plated' ],
  [ 'energyLevel', 75 ] ]
*/
// Object.assign(target, source) copies values of all properties from source object(s)
// to target object, returning target object
const newRobot = Object.assign({laserBlaster: true, voiceRecognition: true}, robot); // Output:
/*
{ laserBlaster: true,
  voiceRecognition: true,
  model: 'SAL-1000',
  mobile: true,
  sentient: false,
  armor: 'Steel-plated',
  energyLevel: 75 }
*/

// Classes ----------------------------------------------------------------------------
// Class method and getter syntax is the same as for objects, except you cannot include
// commas between methods
class Animal {
	constructor(name) {
		this._name = name; // Prepended with underscores, indicating these properties 
		this._behavior = 0; // should not be accessed directly
	}
	get name() {
		return this._name;
	}
	get behavior() {
		return this._behavior;
	}   
	incrementBehavior() { // Notice this doesn't need 'const' or 'let' in front
		this._behavior ++;
	}
}
const halley = new Animal('Halley');
// Notice there are no '()' after calls to get methods
console.log(halley.name); // Print name value to console: 'Halley'
console.log(halley.behavior); // Print behavior value to console: 0
halley.incrementBehavior(); // Add one to behavior
console.log(halley.name); // Print name value to console: 'Halley'
console.log(halley.behavior); // Print behavior value to console: 1

// Super Class (extends Animal), adds usesLitter property -----------------------------
class Cat extends Animal {
	constructor(name, usesLitter) {
		super(name);
		this._usesLitter = usesLitter;
	}
	static generateName() { // Static methods can be called from the class, but not from an instance of the class
		const moods = ['Huey', 'Dewey', 'Louie', 'Scrooge']
		return moods[Math.floor(Math.random() * 4)];
	}
}
console.log(Cat.generateMood()); // Returns name from array
const tyson = new Cat('Tyson');
console.log(tyson.generateMood()); // TypeError since method is static

/////////////////////////////////////////////
// Brower Compatibility and Transpilation //
///////////////////////////////////////////
// Babel helps transpose from ES6 to ES5. The following two lines install Babel
$ npm install babel-cli
$ npm install babel-preset-env
$ npm run build // Creates following projuct file structure:
/* 
project
|_ src
|___ main.js
*/
$ npm init --name 'learning-babel' --description 'Use Babel to transpile JavaScript ES6 to ES5'
// File structure now looks like this:
/* 
project
|_ src
|___ main.js
|_ package.json
*/
/*
-D tag instructs npm to add each package to property called devDependencies in
package.json. Once the project's dependencies are listed in devDependencies, other
developers can run project without installing each package separately. Instead, one
can simply run 'npm install', and it instructs npm to look inside package.json and
download all packages listed in devDependencies
*/
$ npm install babel-cli -D 
$ npm install babel-preset-env -D
// File structure now looks like this:
/* 
|_ node_modules
|___ .bin
|___ ...  // 100+ packages that npm installed
|_ src
|___ main.js
|_ package.json
*/

$ touch .babelrc // Creates .babelrc file to determine version of JS file
$ vim .babelrc // Edit file and add { "presets": ["env"] }
$ vim package.json // add "build": "babel src -d lib" line to scripts object
$ npm run build // Will now transpile all JS files inside src folder
//////////////////////////////////////
// Intermediate JavaScript Modules //
////////////////////////////////////
// File: menu.js:
let Menu = {}; // Creates object that represents Menu module
Menu.specialty = "Roasted Beet Burger with Mint Sauce";
module.exports = Menu; // Exports Menu object as module, a var that represents the module

// File: order.js:
const Menu = require('./menu.js'); // Import module from menu.js using require()
function placeOrder() {
	console.log('My order is: ' + Menu.specialty); // Call specialty property from menu
}
placeOrder(); // Call function and print specialty

// Can also wrap any collection of data and functions in object: ----------------------
// File: menu.js:
let Menu = {};
module.exports = { // Exports current module as object
	// specialty and getSpecialty are properties on the object
	specialty: "Roasted Beet Burger with Mint Sauce",
	getSpecialty: function() { // Anonymous function
		return this.specialty;
	}
};
// File: order.js:
const Menu = require('./menu.js');
console.log(Menu.getSpecialty());

// Export Default ---------------------------------------------------------------------
const Airplane = {};
Airplane.availableAirplanes = [ // Add two airplane objects to available airplanes
	{
		name: 'AeroJet',
		fuelCapacity: 800
	},
	{
		name: 'SkyJet',
		fuelCapacity: 500
	}
];
export default Airplane; // Export JavaScript objects, functions, and primative data types

// Import -----------------------------------------------------------------------------
import Airplane from './airplane'; // Import Airplane module
function displayFuelCapacity() {
	Airplane.availableAirplanes.forEach(function(element) {
		console.log(`Fuel Capacity of ${element.name} : ${element.fuelCapacity}`);
	});
}
displayFuelCapacity();

// Named Exports ----------------------------------------------------------------------
let availableAirplanes = [
	{
		name: 'AeroJet',
		fuelCapacity: 800,
		availableStaff: ['pilots', 'flightAttendants', 'engineers', 'medicalAssistance', 'sensorOperators']
	},
	{
		name: 'SkyJet',
		fuelCapacity: 500,
		availableStaff: ['pilots', 'flightAttendants']
	}
];
let flightRequirements = {
	requiredStaff: 4
};
function meetsStaffRequirements(availableStaff, requiredStaff) {
	return (availableStaff.length >= requiredStaff);
}
// Not  setting properties on object, each export is stored in own variable
// Can export functions, because  every function is a function object
export { availableAirplanes, flightRequirements, meetsStaffRequirements };
// Could also export using alias as follows:
export { availableAirplanes as availPlanes, flightRequirements as flightReqs, meetsStaffRequirements };
// Would then need to import using provided alias as follows:
import { availPlanes, flightReqs, meetsStaffRequirements } from './airplane';
// Another method:
import * as Plane from './airplane';
Plane.availPlanes; // Returns the two objects from earlier this section
Plane.flightReqs; // Returns requiredStaff: 4
Plane.meetsStaffRequirements(); // Call function

// Named Imports ----------------------------------------------------------------------
// Import only objects we need from ./airplane
import { availableAirplanes, flightRequirements, meetsStaffRequirements } from './airplane';
function displayFuelCapacity() {
	availableAirplanes.forEach(function(element) {
		console.log(`Fuel Capacity of ${element.name} : ${element.fuelCapacity}`);
	});
}
// Displays 'Fuel Capacity of AeroJet : 800' + 'Fuel Capacity of SkyJet : 500'
displayFuelCapacity();
function displayStaffStatus() {
	availableAirplanes.forEach(function(element) {
		console.log(`${element.name} meets staff requirements: ${meetsStaffRequirements(element.availableStaff, flightRequirements.requiredStaff)}`);
	});
}
// Displays 'AeroJet meets staff requirements: true' + 'SkyJet meets staff requirements: false'
displayStaffStatus();

// Export Named Exports ---------------------------------------------------------------
// export keyword allows us to export objects upon declaration, so we don't need an
// export statement at the bottom of the file
export let availableAirplanes = [
	{
		name: 'AeroJet',
		fuelCapacity: 800,
		availableStaff: ['pilots', 'flightAttendants', 'engineers', 'medicalAssistance', 'sensorOperators'],
		maxSpeed: 1200,
		minSpeed: 300
	}, 
	{
		name: 'SkyJet',
		fuelCapacity: 500,
		availableStaff: ['pilots', 'flightAttendants'],
		maxSpeed: 800,
		minSpeed: 200
	}
];
export let flightRequirements = {
	requiredStaff: 4,
	requiredSpeedRange: 700
};
export function meetsStaffRequirements(availableStaff, requiredStaff) {
	return (availableStaff.length >= requiredStaff);
};
export function meetsSpeedRangeRequirements(maxSpeed, minSpeed, requiredSpeedRange) {
	return ((maxSpeed - minSpeed) > requiredSpeedRange);
};

// Import Named Imports ---------------------------------------------------------------
import { availableAirplanes, flightRequirements, meetsStaffRequirements, meetsSpeedRangeRequirements } from './airplane';
function displayFuelCapacity() {
	availableAirplanes.forEach(function(element) {
		console.log(`Fuel Capacity of ${element.name} : ${element.fuelCapacity}`);
	});
}
// Displays 'Fuel Capacity of AeroJet : 800' + 'Fuel Capacity of SkyJet : 500'
displayFuelCapacity();
function displayStaffStatus() {
	availableAirplanes.forEach(function(element) {
		console.log(`${element.name} meets staff requirements: ${meetsStaffRequirements(element.availableStaff, flightRequirements.requiredStaff)}`);
	});
}
// Displays 'AeroJet meets staff requirements: true' + 'SkyJet meets staff requirements: false'
displayStaffStatus();
function displaySpeedRangeStatus() {
	availableAirplanes.forEach(function(element) {
		console.log(`${element.name} meets speed range requirements: ${meetsSpeedRangeRequirements(element.maxSpeed, element.minSpeed, flightRequirements.requiredSpeedRange)}`);
	});
}
// Displays 'AeroJet meets speed range requirements: true ' + 'SkyJet meets speed range requirements: false'
displaySpeedRangeStatus();
///////////////////////////////////
// Promises (Introduced in ES6) //
/////////////////////////////////
/*
Asynchronous operation: one that allows the computer to "move on" to other tasks while
waiting for the asynchronous operation to complete.
Promise object can be in one of three states:
Pending: Initial state, operation has not completed yet
Fulfilled: Operation has completed successfully and promise now has a resolved value. 
	For example, a request's promise may resolve with JSON object as its value
Rejected: The operation has failed and the promise has a reason for the failure.
	This reason is usually an Error of some kind
*/
const executorFunction = (resolve, reject) => {
	if (someCondition) {
		resolve('I resolved!');
	} else {
		reject('I rejected!');
	}
};
const myFirstPromise = new Promise(executorFunction);
// Complete example: ------------------------------------------------------------------
const inventory = {
	sunglasses: 1600,
	pants: 1088,
	bags: 1344
};
const myExecutor = (resolve, reject) => {
	if (inventory.sunglasses > 0) {
		resolve('Sunglasses order processed.');
	} else {
		reject('That item is sold out.');
	}
};
const orderSunglasses = () => {
	return new Promise(myExecutor);
}
const orderPromise = orderSunglasses();
console.log(orderPromise);
// When code is called, if sunglasses are in stock, output:
//	Promise { 'Sunglasses order processed.' }
// If sunglasses = 0:
//	Promise { <rejected> 'That item is sold out.' }
//	(node:433) UnhandledPromiseRejectionWarning: Unhandled promise rejection (rejection id: 1): That item is sold out.
//	(node:433) DeprecationWarning: Unhandled promise rejections are deprecated. In the future, promise rejections that are not handled will terminate the Node.js process with a non-zero exit code.

// Node setTimeout() Function ---------------------------------------------------------
const delayedHello = () => {
	console.log('Hi! This is an asynchronous greeting!');
};
// delayedHello will be added to the instruction queue in 2000 milliseconds
// Before it runs, any synchronous code will be run, followed by any code in queue
setTimeout(delayedHello, 2000);
// Example with asynchronous primises:
const returnPromiseFunction = () => {
	return new Promise((resolve, reject) => {
		setTimeout(( ) => {resolve('I resolved!')}, 1000);
	});
};
const prom = returnPromiseFunction();

// Consuming Promises -----------------------------------------------------------------
let prom = new Promise((resolve, reject) => {
	let num = Math.random();
	if (num < .5 ){
		resolve('Yay!');
	} else {
		reject('Ohhh noooo!');
	}
});
const handleSuccess = (resolvedValue) => {
	console.log(resolvedValue);
};
const handleFailure = (rejectionReason) => {
	console.log(rejectionReason);
};
// Call handleSuccess if prom is resolved, handleFailure if prom fails
prom.then(handleSuccess, handleFailure);

// Larger example:
// library.js: underlying inventory
const inventory = {
	sunglasses: 1900,
	pants: 1088,
	bags: 1344
};
const checkInventory = (order) => {
	return new Promise((resolve, reject) => {
		setTimeout(() => {
			let inStock = order.every(item => inventory[item[0]] >= item[1]);
			if (inStock) {
				resolve(`Thank you. Your order was successful.`);
			} else {
				reject(`We're sorry. Your order could not be completed because some items are sold out.`);
			}
		}, 1000);
	})
};
module.exports = { checkInventory };
// app.js: Calls checkInventory
const {checkInventory} = require('./library.js');
function handleSuccess(resolvedValue) {
	console.log(resolvedValue);
}
function handleFailure(rejectionReason) {
	console.log(rejectionReason);
}
const order = [['sunglasses', 1], ['bags', 2]];
checkInventory(order).then(handleSuccess, handleFailure);
// Running "$ node app.js" returns "Thank you, Your order was successful" because
// order contained 1 pair of sunglasses and 2 bags, However if bags were > 1344,
// $ node app.js would return rejectionReason

// Using .catch() ---------------------------------------------------------------------
let prom = new Promise((resolve, reject) => {
	let num = Math.random();
	if (num < .5 ){
		resolve('Yay!');
	} else {
		reject('Ohhh noooo!');
	}
});

const handleSuccess = (resolvedValue) => {
	console.log(resolvedValue);
};
const handleFailure = (rejectionReason) => {
	console.log(rejectionReason);
};
prom.then(handleSuccess, handleFailure);
// Is equivalent to...
prom // Expanded
	.then((resolvedValue) => {
		console.log(resolvedValue);
	})
	.then(null, (rejectionReason) => {
		console.log(rejectionReason);
	}
);
// Is equivalent to...
prom // Using catch to remove null in previous example
	.then((resolvedValue) => {
		console.log(resolvedValue);
	})
	.catch((rejectionReason) => {
		console.log(rejectionReason);
	}
);

// Chaining Promises ------------------------------------------------------------------
firstPromiseFunction() // returns promise
.then((firstResolveVal) => {
	return secondPromiseFunction(firstResolveVal); // adds next promise to chain
})
.then((secondResolveVal) => {
	console.log(secondResolveVal); // Prints result of second resolution
});
// Further complete example is in "./Chaining Promises Example"

// Using Promise.all() ----------------------------------------------------------------
/*
Use when dealing with multiple promises, but don't care about order.
Accepts array of promises as argument and returns single promise,
If every promise in array resolves, single promise returned from Promise.all() will
	resolve with array containing resolve value from each promise in argument array
If any promise in array rejects, single promise returned will immediately reject with
	reason that promise rejected. Referred to as failing fast
*/
const {checkAvailability} = require('./library.js');
const onFulfill = (itemsArray) => {
	console.log(`Items checked: ${itemsArray}`);
	console.log(`Every item was available from the distributor. Placing order now.`);
};
const onReject = (rejectionReason) => {
	console.log(rejectionReason);
};
const checkSunglasses = checkAvailability('sunglasses', 'Favorite Supply Co.');
const checkPants = checkAvailability('pants', 'Favorite Supply Co.');
const checkBags = checkAvailability('bags', 'Favorite Supply Co.');
Promise.all([checkSunglasses, checkPants, checkBags])
	.then(onFulfill)
	.catch(onReject);
// Or, expanded but without as many variables:
const {checkAvailability} = require('./library.js');
Promise.all([
	checkAvailability('sunglasses', 'Favorite Supply Co.'),
	checkAvailability('pants', 'Favorite Supply Co.'),
	checkAvailability('bags', 'Favorite Supply Co.')
	])
	.then((itemsArray) => {
		console.log(`Items checked: ${itemsArray}`);
		console.log(`Every item was available from the distributor. Placing order now.`);
	})
	.catch((rejectionReason) => {
		console.log(rejectionReason);
	});

// Running "$ node app.js" will return either 'sunglasses, bags, or pants' are
// unavailable, or it will return every item was availble, depending on response

//////////////////
// Async Await //
////////////////
/* JavaScript is non-blocking: instead of stopping the execution of code while it
	waits, it uses an event-loop so it executes other tasks while it awaits the
	completion of the asynchronous actions.
   With ES6, asynch...await is introduced which improves readability from original JS */
// Read and print from two files in a specified order (Three methods):
const fs = require('fs');
const promisifiedReadfile = (file, encoding) => // Methods 2 & 3
	new Promise((resolve, reject) => {
		fs.readFile(file, encoding, (err, text) => {
			if (err) {
				return reject(err.message);
			}
			resolve(text);
		});
	});

// Method 1: Here we use fs.readfile() and callback functions:
fs.readFile('./file.txt', 'utf-8', (err, data) => {
	if (err) throw err;
	let firstSentence = data;
	fs.readFile('./file2.txt',  'utf-8', (err, data) => {
		if (err) throw err;
		let secondSentence = data;
		console.log(firstSentence, secondSentence)
	});
});

// Method 2: Here we use native promises with our "promisified" version of readfile:
let firstSentence
promisifiedReadfile('./file.txt', 'utf-8')
	.then((data) => {
		firstSentence = data;
		return promisifiedReadfile('./file2.txt', 'utf-8')
	})
	.then((data) => {
		let secondSentence = data;
		console.log(firstSentence, secondSentence)
	})
	.catch((err) => {console.log(err)});

// Method 3: Here we use promisifiedReadfile() again but instead of using the native promise .then() syntax, we declare and invoke an async/await function:
async function readFiles() {
	let firstSentence = await promisifiedReadfile('./file.txt', 'utf-8')
	let secondSentence = await promisifiedReadfile('./file2.txt', 'utf-8')
	console.log(firstSentence, secondSentence)
}
readFiles()

// The async Keyword ------------------------------------------------------------------
/* async will always return a Promise, so we can use .then() and .catch() on the return
   If there's nothing returned from the function, it will return a promise with a
	resolved value of undefined
   If there's a non-promise value returned from the function, it will return a promise
	resolved to that value
   If a promise is returned from the function, it will return that promise */
function withConstructor(num) {
	return new Promise((resolve, reject) => {
		if (num === 0){
			resolve('zero');
		} else {
			resolve('not zero');
		}
	})
}
withConstructor(0)
	.then((resolveValue) => {
	console.log(`withConstructor(0) returned a promise which resolved to: ${resolveValue}.`);
}) // resolveValue returns 'zero', so console prints 'withConstructor(0)... zero'

async function withAsync(num) { // Could also do const myFunc = asynch () => {
	if (num == 0){
		return 'zero';
	} else {
		return 'not zero';
	}
}
withAsync(100)
	.then((resolveValue) => {
	console.log(`withAsync(100) returned a promise which resolved to: ${resolveValue}.`);
}) // resolveValue returns 'not zero', so console prints 'withAsynch(100)... not zero'

// The await Operator ----------------------------------------------------------------
// await can only be used inside an async function. It is an operator that returns the
// resolved value of a promise, after halting until the promise is resolved
/*
this is the brainstormDinner function. It's a little silly. It returns a promise that
uses a series of setTimeout() functions to simulate a time-consuming asynchronous
action. It's a good example of "callback hell" or "the pyramid of doom," two ways
people describe how confusing a bunch of nested callback functions can become.
*/
const brainstormDinner = () => {
	return new Promise((resolve, reject) => {
	console.log(`I have to decide what's for dinner...`)
	setTimeout(() => {
		console.log('Should I make salad...?')
		setTimeout(() => {
			console.log('Should I make ramen...?')
			setTimeout(() => {
				console.log('Should I make eggs...?')
				setTimeout(() => {
					console.log('Should I make chicken...?')
					resolve('beans')
				}, 1000)
			}, 1000)
		}, 1000)
	}, 1000)
	})
}
function nativePromiseDinner() { // Native promise version:
	brainstormDinner().then((meal) => {
		console.log(`I'm going to make ${meal} for dinner.`);
	})
}
async function announceDinner() { // async/await version:
	let meal = await brainstormDinner();
	console.log(`I'm going to make ${meal} for dinner.`);
} // Both will print all four 'Should I make...' strings followed by '...beans'

// Handling Dependent Promises -------------------------------------------------------
function nativePromiseVersion() {
	returnsFirstPromise()
	.then((firstValue) => {
		console.log(firstValue);
		return returnsSecondPromise(firstValue);
	})
	.then((secondValue) => {
		console.log(secondValue);
	});
} // Is equivalent to...
async function asyncAwaitVersion() {
	let firstValue = await returnsFirstPromise();
	console.log(firstValue);
	let secondValue = await returnsSecondPromise(firstValue);
	console.log(secondValue);
}

// Handling errors -------------------------------------------------------------------
async function usingTryCatch() {
	try {
		let resolveValue = await asyncFunction('thing that will fail');
		let secondValue = await secondAsyncFunction(resolveValue);
	} catch (err) {
		console.log(err);
	}
} // Is equivalent to...
async function usingPromiseCatch() {
	let resolveValue = await asyncFunction('thing that will fail');
}
let rejectedPromise = usingPromiseCatch();
rejectedPromise.catch((rejectValue) => {
	console.log(rejectValue);
})

// Handling Independent Promises -----------------------------------------------------
async function waiting() { // Waits for first value before calculating second
	const firstValue = await firstAsyncThing();
	const secondValue = await secondAsyncThing();
	console.log(firstValue, secondValue);
}
async function concurrent() { // Executes both promises simultaneously
	const firstPromise = firstAsyncThing();
	const secondPromise = secondAsyncThing();
	console.log(await firstPromise, await secondPromise);
}
// If we have multiple truly independent promises that we would like to execute fully
// in parallel, we must use individual .then() functions and avoid halting with await

// Using Promise.all() ---------------------------------------------------------------
// Good choice if multiple async tasks are all required, but none must wait for any
// other before executing. If one promise in array rejects, will stop waiting for all
async function serveDinner() {
	let vegetablePromise = steamBroccoli();
	let starchPromise = cookRice();
	let proteinPromise = bakeChicken();
	let sidePromise = cookBeans();
	console.log(`Dinner is served. We're having ${await vegetablePromise}, ${await starchPromise}, ${await proteinPromise}, and ${await sidePromise}.`)
} // Is equivalent to...
async function serveDinnerAgain() {
	let foodArray = await Promise.all([steamBroccoli(), cookRice(), bakeChicken(), cookBeans()]);
	console.log(`Dinner is served. We're having ${foodArray[0]}, ${foodArray[1]}, ${foodArray[2]}, and ${foodArray[3]}.`)
}

/////////////////
// Requests I //
///////////////
// Boilerplate code for AJAX GET request
const xhr = new XMLHttpRequest(); // Creates new object
const url = 'https://api-to-call.com/endpoint';
xhr.responseType = 'json';
xhr.onreadystatechange = () => { // handles response
	if (xhr.readyState === XMLHttpRequest.DONE) {
		// Code to execute with response:
		return xhr.response;
	}
}
// Open request and send object
xhr.open('GET', url);
xhr.send();

// AJAX function ---------------------------------------------------------------------
// Information to reach API
const url = 'https://api.datamuse.com/words?';
const queryParams = 'rel_rhy='

// Selecting page elements
const inputField = document.querySelector('#input');
const submit = document.querySelector('#submit');
const responseField = document.querySelector('#responseField');

// Function
const getSuggestions = () => {
	const wordQuery = inputField.value;
	const endpoint = url + queryParams + wordQuery; // Following commented line is equivalent
	//const endpoint = ${url}${queryParams}${wordQuery};
	const xhr = new XMLHttpRequest();
	xhr.responseType = 'json';
	xhr.onreadystatechange = () => {
		if (xhr.readyState === XMLHttpRequest.DONE) {
			renderResponse(xhr.response);
		}
	}
	xhr.open('GET', endpoint);
	xhr.send();
}

// Clear previous results and display results to webpage
const displaySuggestions = (event) => {
	event.preventDefault();
	while(responseField.firstChild) {
		responseField.removeChild(responseField.firstChild);
	};
	getSuggestions();
}

submit.addEventListener('click', displaySuggestions);

// GET Requests continued ------------------------------------------------------------
// Query string is separated from URL using '?' char :
'https://api.datamuse.com/words?key=value&anotherKey=anotherValue'
// FULL EXAMPLE
// Information to reach API
const url = 'https://api.datamuse.com/words?';
const queryParams = 'rel_jjb=';
const additionalParams = '&topics=';
// Selecting page elements
const inputField = document.querySelector('#input');
const topicField = document.querySelector('#topic');
const submit = document.querySelector('#submit');
const responseField = document.querySelector('#responseField');
// AJAX function
const getSuggestions = () => {
	const wordQuery = inputField.value;
	const topicQuery = topicField.value;
	const endpoint = `${url}${queryParams}${wordQuery}${additionalParams}${topicQuery}`;
	const xhr = new XMLHttpRequest();
	xhr.responseType = 'json';
	xhr.onreadystatechange = () => {
		if (xhr.readyState === XMLHttpRequest.DONE) {
			// Formats response to look presentable on webpage
			const res = xhr.response;
			if(!res){
				console.log(res.status)
			}
			// in case res comes back as a blank array
			if(!res.length){
				responseField.innerHTML = "<p>Try again!</p><p>There were no suggestions found!</p>"
				return
			}
			// creating an array to contain the HTML strings
			let wordList = []
			// looping through the response and maxxing out at 10
			for(let i = 0; i < Math.min(res.length, 10); i++){
				// creating a list of words
				wordList.push(`<li>${res[i].word}</li>`)
			}
			// joins the array of HTML strings into one string
			wordList = wordList.join("")
			// manipulates responseField to render the modified response
			responseField.innerHTML = `<p>You might be interested in:</p><ol>${wordList}</ol>`
			return
		}
	}
	xhr.open('GET', endpoint);
	xhr.send();
}
// Clear previous results and display results to webpage
const displaySuggestions = (event) => {
	event.preventDefault();
	while(responseField.firstChild){
		responseField.removeChild(responseField.firstChild);
	}
	getSuggestions();
}
submit.addEventListener('click', displaySuggestions);

// XMLHttpRequest POST function ------------------------------------------------------
const xhr = new XMLHttpRequest(); // Create new object
const url = 'http://api-to-call.com/endpoint';
// converts value to a JSON string, which can then be sent to server
const data = JSON.stringify({id: '200'});
// Handles response
xhr.responseType = 'json';
xhr.onreadystatechange = () => {
	if (xhr.readyState === XMLHttpRequest.DONE) {
		// Code to execute with response
		return xhr.response; // Contains data received from POST request
	}
};
// Opens request and sends object
xhr.open('POST', url);
xhr.send(data);

// Using Rebrandly API to shorten URL ------------------------------------------------
// Information to reach API
const apiKey = 'a838810d489841c7aee685d97f5fb728';
const url = 'https://api.rebrandly.com/v1/links';
// Some page elements
const inputField = document.querySelector('#input');
const shortenButton = document.querySelector('#shorten');
const responseField = document.querySelector('#responseField');
// AJAX functions
const shortenUrl = () => {
	const urlToShorten = inputField.value;
	const data = JSON.stringify({destination: urlToShorten});
	const xhr = new XMLHttpRequest();
	xhr.responseType = 'json';
	xhr.onreadystatechange = () => {
		if (xhr.readyState === XMLHttpRequest.DONE) {
			renderResponse(xhr.response);
		}
	}
	xhr.open('POST', url);
	// To access Rebrandly API, need header with two key-value pairs
	xhr.setRequestHeader('Content-type', 'application/json');
	xhr.setRequestHeader('apikey', apiKey);
	xhr.send(data);
}
// Clear page and call AJAX functions
const displayShortUrl = (event) => {
	event.preventDefault();
	while(responseField.firstChild){
		responseField.removeChild(responseField.firstChild);
	}
	shortenUrl();
}
shortenButton.addEventListener('click', displayShortUrl);

// GET & POST combined ---------------------------------------------------------------
// NOTE: wordSmith functions from lines 4 - 39
// NOTE: byteSize functions from lines 41 - 76 (remember to add your API key!)
// information to reach API
const dataMuseUrl = 'https://api.datamuse.com/words?';
const queryParams = 'rel_jjb=';
// selecting page elements
const inputField = document.querySelector('#input');
const submit = document.querySelector('#submit');
const responseField = document.querySelector('#responseField');
// AJAX function
const getSuggestions = () => {
	const wordQuery = inputField.value;
	const endPoint = dataMuseUrl + queryParams + wordQuery;
	const xhr = new XMLHttpRequest();
	xhr.responseType = 'json';
	xhr.onreadystatechange = () => {
		if (xhr.readyState === XMLHttpRequest.DONE) {
			renderWordResponse(xhr.response);
		}
	};
	xhr.open('GET', endPoint);
	xhr.send();
}
// clear previous results and display results to webpage
const displaySuggestions = (event) => {
	event.preventDefault();
	while(responseField.firstChild){
		responseField.removeChild(responseField.firstChild);
	};
	getSuggestions();
};
submit.addEventListener('click', displaySuggestions);
// information to reach Rebrandly API
const apiKey = 'a838810d489841c7aee685d97f5fb728';
const rebrandlyUrl = 'https://api.rebrandly.com/v1/links';
// element selector
const shortenButton = document.querySelector('#shorten');
// AJAX functions
const shortenUrl = () => {
	const urlToShorten = inputField.value;
	const data = JSON.stringify({destination: urlToShorten});
	const xhr = new XMLHttpRequest();
	xhr.responseType = 'json';
	xhr.onreadystatechange = () => {
		if (xhr.readyState === XMLHttpRequest.DONE) {
			renderByteResponse(xhr.response);
		}
	};
	xhr.open('POST', rebrandlyUrl);
	xhr.setRequestHeader('Content-type', 'application/json');
	xhr.setRequestHeader('apikey', apiKey);
	xhr.send(data);
}
// Clear page and call AJAX functions
const displayShortUrl = (event) => {
	event.preventDefault();
	while(responseField.firstChild){
		responseField.removeChild(responseField.firstChild);
	};
	shortenUrl();
};
shortenButton.addEventListener('click', displayShortUrl);

//////////////////
// Requests II //
////////////////
// helperFunction.js for next few examples............................................
// wordSmith helperFunctions are on lines 4 - 50
// byteSize helperFunctions are on lines 52 - 76

// Formats Response to look presentable on webpage
const renderWordResponse = (res) => {
	// Handles if res is falsey
	if(!res){
		console.log(res.status);
	}
	// In case res comes back as a blank array
	if(!res.length){
		responseField.innerHTML = "<p>Try again!</p><p>There were no suggestions found!</p>";
		return;
	}

	// Creates an array to contain the HTML strings
	let wordList = []
	// Loops through the response and maxxing out at 10
	for(let i = 0; i < Math.min(res.length, 10); i++){
		// Creates a list of words
		wordList.push(`<li>${res[i].word}</li>`);
	}
	// Joins the array of HTML strings into one string
	wordList = wordList.join("");

	// Manipulates responseField to render the modified response
	responseField.innerHTML = `<p>You might be interested in:</p><ol>${wordList}</ol>`;
	return;
}

// Renders response before it is modified
const renderRawWordResponse = (res) => {
	// Takes the first 10 words from res
	let trimmedResponse = res.slice(0, 10);
	// Manipulates responseField to render the unformatted response
	responseField.innerHTML = `<text>${JSON.stringify(trimmedResponse)}</text>`;
}

// Renders the JSON that was returned when the Promise from fetch resolves.
const renderJsonWordResponse = (res) => {
	// Creating an empty object to store the JSON in key-value pairs
	let rawJson = {};
	for(let key in response){
		rawJson[key] = response[key];
	}
	// Converting JSON into a string and adding line breaks to make it easier to read
	rawJson = JSON.stringify(rawJson).replace(/,/g, ", \n");
	// Manipulates responseField to show the returned JSON.
	responseField.innerHTML = `<pre>${rawJson}</pre>`;
}

// Manipulates responseField to render a formatted and appropriate message
const renderByteResponse = (res) => {
	if(res.errors){
		// Will change the HTML to show this error message if the response had an error
		responseField.innerHTML = "<p>Sorry, couldn't format your URL.</p><p>Try again.</p>";
	} else {
		// If there was no error, then the HTML will show this message
		responseField.innerHTML = `<p>Your shortened url is: </p><p> ${res.shortUrl} </p>`;
	}
}

// Manipulates responseField to render an unformatted response
const renderRawByteResponse = (res) => {
	if(res.errors){
		// Changes the HTML to show this error message if the response had an error
		responseField.innerHTML = "<p>Sorry, couldn't format your URL.</p><p>Try again.</p>";
	} else {
		// Changes the HTML to show this raw response if there was no error
		// Formats the response into a more organized structure
		let structuredRes = JSON.stringify(res).replace(/,/g, ", \n");
		structuredRes = `<pre>${structuredRes}</pre>`;
	
		responseField.innerHTML = `${structuredRes}`;
	}
}
// end helperFunction.js .............................................................

// Fetch API: https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API
// fetch GET Boilerplate -------------------------------------------------------------
fetch('http://api-to-call.com/endpoint').then(response => { // First 'response' argument handles success
	if (response.ok) {
		return response.json();
	}
	throw new Error('Request failed!');
}, networkError => console.log(networkError.message) // Add second argument to handle failures
).then(jsonResponse => { // This will not run if there was an error thrown
	return jsonResponse;
});

// Datamuse API example --------------------------------------------------------------
// Information to reach API
const url = 'https://api.datamuse.com/words';
const queryParams = '?sl=';

// Selects page elements
const inputField = document.querySelector('#input');
const submit = document.querySelector('#submit');
const responseField = document.querySelector('#responseField');

// AJAX function
const getSuggestions = () => {
	const wordQuery = inputField.value;
	const endpoint = `${url}${queryParams}${wordQuery}`;
	fetch(endpoint).then(response => {
		if (response.ok) {
			return response.json();
		}
		throw new Error('Request failed!');
	}, networkError => console.log(networkError.message)
	);
}

// Clears previous results and display results to webpage
const displaySuggestions = (event) => {
	event.preventDefault();
	while(responseField.firstChild){
		responseField.removeChild(responseField.firstChild);
	}
	getSuggestions();
};
submit.addEventListener('click', displaySuggestions);

// fetch POST Boilerplate ------------------------------------------------------------
// Send request
fetch('http://api-to-call.com/endpoint', {
	method: 'POST',
	body: JSON.stringify({id: '200'})
}).then(response => {
	if (response.ok) {
		return response.json(); // Convert response object to JSON
	}
	throw new Error('Request failed!'); // Handle errors
}, networkError => console.log(networkError.message)
).then(jsonResponse => { // Handle success
	jsonResponse();
});

// Example: Shorten URL using Rebrandly URL Shortener API ----------------------------
// Information to reach API
const apiKey = 'a838810d489841c7aee685d97f5fb728';
const url = 'https://api.rebrandly.com/v1/links';

// Some page elements
const inputField = document.querySelector('#input');
const shortenButton = document.querySelector('#shorten');
const responseField = document.querySelector('#responseField');

// AJAX functions
const shortenUrl = () => {
	const urlToShorten = inputField.value;
	const data = JSON.stringify({destination: urlToShorten});
	fetch(url, {
		method: 'POST',
		headers: {
			'Content-type': 'application/json',
			'apikey': apiKey
		},
		body: data
	}).then(response => {
		if (response.ok) {
			return response.json();
		}
		throw new Error('Request failed!');
	}, networkError => (console.log(networkError.message))
	).then(jsonResponse => {
		renderResponse(jsonResponse);
	});
}

// Clear page and call AJAX functions
const displayShortUrl = (event) => {
	event.preventDefault();
	while(responseField.firstChild){
		responseField.removeChild(responseField.firstChild)
	}
	shortenUrl();
}
shortenButton.addEventListener('click', displayShortUrl);

// async await GET Boilerplate -------------------------------------------------------
// async & await Introduced in ES8
async function getData() {
	try {
		const response = await fetch('https://api-to-call.com/endpoint'); // Send request
		if (response.ok) {
			const jsonResponse = await response.json();
			return jsonResponse;
		}
		throw new Error('Request Failed!);
	} catch (error) {
		console.log(error);
	}
}

// Another way of writing...
const getData = async () => {
	try {
		const response = await fetch('https://api-to-call.com/endpoint');
		if (response.ok) {
			const jsonResponse = await response.json();
			return jsonResponse;
		}
		throw new Error('Request failed!');
	} catch(error) {
		console.log(error);
	}
};

// Full async await example ----------------------------------------------------------
// Information to reach API
const url = 'https://api.datamuse.com/words?';
const queryParams = 'rel_jja=';

// Selecting page elements
const inputField = document.querySelector('#input');
const submit = document.querySelector('#submit');
const responseField = document.querySelector('#responseField');

// AJAX function
const getSuggestions = async () => {
	const wordQuery = inputField.value;
	const endpoint = `${url}${queryParams}${wordQuery}`;
	try {
		const response = await fetch(endpoint);
		if (response.ok) {
			const jsonResponse = await response.json();
			renderResponse(jsonResponse);
		}
	} catch(error) {
		console.log(error);
	}
}

// Clear previous results and display results to webpage
const displaySuggestions = (event) => {
	event.preventDefault();
	while(responseField.firstChild){
		responseField.removeChild(responseField.firstChild)
	}
	getSuggestions();
}
submit.addEventListener('click', displaySuggestions);

// async await POST Boilerplate ------------------------------------------------------
async function getData() {
	try {
		const response = await fetch('https://api-to-call.com/endpoint', {
			method: 'POST',
			body: JSON.stringify({id: '200'})
		});
		if (response.ok) {
			const jsonResponse = await response.json();
			// Code to execute with jsonResponse
		}
		throw new Error('Request Failed!');
	} catch (error) {
		console.log(error);
	}
}

// Another way of writing...
const getData = async () => {
	try {
		const response = await fetch('https://api-to-call.com/endpoint', {
			method: 'POST',
			body: JSON.stringify({id: 200})
		});
		if (response.ok) {
		const jsonResponse = await response.json();
		return jsonResponse;
		}
		throw new Error('Request failed!');
	} catch(error) {
		console.log(error);
	}
}

// Full example ----------------------------------------------------------------------
// information to reach API
const apiKey = 'a838810d489841c7aee685d97f5fb728';
const url = 'https://api.rebrandly.com/v1/links';

// Some page elements
const inputField = document.querySelector('#input');
const shortenButton = document.querySelector('#shorten');
const responseField = document.querySelector('#responseField');

// AJAX functions
const shortenUrl = async () => {
	const urlToShorten = inputField.value;
	const data = JSON.stringify({destination: urlToShorten});
	try {
		const response = await fetch(url, {
			method: 'POST',
			body: data,
			headers: {
				'Content-type': 'application/json',
				'apikey': apiKey
			}
		});
		if (response.ok) {
			const jsonResponse = await response.json();
			renderResponse(jsonResponse);
		}
	} catch(error) {
		console.log(error);
	}
}

// Clear page and call AJAX functions
const displayShortUrl = (event) => {
	event.preventDefault();
	while(responseField.firstChild){
		responseField.removeChild(responseField.firstChild);
	}
	shortenUrl();
}
shortenButton.addEventListener('click', displayShortUrl);


//////////////////////////////////////////////////////////////////////////////////////
// CODECADEMY COURSE COMPLETE ///////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////////

////////////////////////
// Mutation Observer //
//////////////////////
/*
Provides ability to watch for changes being made to the Document Object Model (DOM)
tree. Designed as replacement for older Mutation Events feature.
*/
// Select the node that will be observed for mutations
var targetNode = document.getElementById('some-id');
// Alternatively...
var targetNode = document.querySelector('#some-id');

// Options for the observer (which mutations to observe)
// Minimum, one of childList, attributes, and/or characterData must be true when you call observe(). Otherwise, a TypeError exception will be thrown.
var config = {
	// Array of attribute names to be monitored. Makes 'attributes' option unnecessary
	attributeFilter: [ 'status', 'username', 'etc' ],
	// Set true to record prev value of any attribute that changes when monitoring the node(s) for attribute changes. Also makes 'attributes' option unnecessary
	attributeOldValue: true,
	// Set to true to watch for changes to value of attributes on node(s) being monitored
	attributes: true,
	// If true, callback function is called any time contents of text node are changed, including nodes based on the Text, ProcessingInstruction, and Comment interfaces
	characterData: true,
	// Similar to attributeOldValue
	characterDataOldValue: true,
	// Set to true to monitor target node (and, if subtree is true, its decendants) for the addition or removal of new child nodes
	childList: true,
	// Set to true to extend monitoring to the entire subtree of nodes rooted at target. All other options are then extended to all nodes in subtree
	subtree: true
};

// Callback function to execute when mutations are observed
var callback = function(mutationsList) {
    mutationsList.forEach(function(mutation) {
		switch (mutation.type) {
			case 'attributes':
				switch (mutation.attributeName) {
					case 'status':
						// example function :
						userStatusChanged(mutation.target.username, mutation.target.status);
						break;
					case 'username':
						// Uses 'attributeOldValue' option to get previous value of mutation
						console.log(`Attribute name ${mutation.attributeName} changed to ${mutation.target[attributeName]} (was ${mutation.oldValue})`);
						break;
					default:
						// Still valid since 'attributes' is true when 'attributeFilter' is nonempty
						console.log(`The ${mutation.attributeName} attribute was modified.`);
						break;
				}
				break;
			case 'childList':
				console.log('A child node has been added or removed.');
				break;
        }
    });
};
// Create an observer instance linked to the callback function
var observer = new MutationObserver(callback);

// Start observing the target node for configured mutations
observer.observe(targetNode, config);

// Later, you can stop observing
observer.disconnect();