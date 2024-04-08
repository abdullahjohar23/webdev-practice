let firstname = 'Abdullah';
let age = 25;
let temperature = 22.3;
let isApproved = false;
let lastname = undefined;
let selectedColor = null;

// how to see types of variables
console.log(typeof(firstname));
console.log(typeof(age));
console.log(typeof(temperature));
console.log(typeof(isApproved));
console.log(typeof(lastname));
console.log(typeof(selectedColor));

// how to print a variable within a string
console.log(`My first name is ${firstname} and I am ${age} years old`);

// Object

let person = {
    name: 'Abdullah',
    age: 25
}

console.log(person);

// Dot Notation
person.name = 'Johar';
console.log(person.name);

// Bracket Notation
person['name'] = 'Abdullah Johar';
console.log(person.name);

let change = person['name'];
person[change] = 'Ali Johar';
console.log(person[change]);

// Array

let colors = ['red', 'green', 'blue'];
console.log(colors);
console.log(colors[1]);

colors[1] = 23;
console.log(colors[1]);
console.log(colors);

console.log(`length of the array: ${colors.length}`);

// Function

function greet1 () {
    console.log('Hello');
}

greet1();

function greet2 (firstName, lastName) {
    console.log(`Hello ${firstName} ${lastName}`);
}

greet2('Abdullah', 'Johar');