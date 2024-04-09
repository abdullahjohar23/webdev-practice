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

// Logical Operators (&&, ||, !)

let temp = 23;

if (temp > 0 && temp <= 30) {
    console.log(`${temp} is a good temperature`);
} else if (temp == 0) {
    console.log(`${temp} is about to freez`);
} else {
    console.log(`${temp} is a bad temperature`);
}

let standard = 12;
if (standard == 11 || standard == 12) {
    console.log('You are in college');
} else {
    console.log('You are not in college');
}

let verrified = false;

if (!verrified) {
    console.log('you are not allowed here');
} else {
    console.log('you are allowed here');
}

// strict equal

let letter = '5';
let number = 5;

if (letter == number) {
    console.log('number and character are equal');
}

if (letter === number) {
    console.log('number and character are equal');
} else {
    console.log('number and character are not equal');
}