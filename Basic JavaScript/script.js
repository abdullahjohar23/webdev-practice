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

// normal for loop
for (let i = 1; i <= 10; i++) {
    console.log('what up folks');
}

// for-of loop (used for string & arrays)
let s = "abullah";
for (let i of s) {
    console.log(`i = ${i}`);
}

// for-in loop (used for objects)
let student = {
    Name: "Abdullah",
    age: 24,
    cgpa: 3.30,
    isPassed: true
};

for (let key in student) {
    console.log(`key = ${key} & value = ${student[key]}`);
}

// A simple guessing game
let correctAnswer = 5;
let userNInput = prompt('Guessa a number between 1 to 20');

// don't put !== becase prompt always works as string
while (userNInput != correctAnswer) {
    userNInput = prompt('Wrong guess, try again');
}

console.log(`Yes! ${userNInput} is the correct answer`);

// Mutable vs Immutable

// Strings are immutable
let str = 'abc';
console.log(str[1]);
str[1] = 'c'; // s[1] won't convertt into c
console.log(s[1]);

// Arrays are mutable
let arr = [1, 2, 'a'];
console.log(arr[1]);
arr[1] = 5;
console.log(arr[1]);

// Array Methods
let food = ["potato", "cheese", "tomato", "butter"];
console.log(food);

food.push("eggplant")
console.log(food);

food.pop();
console.log(food);

console.log(food.toString());

let bucket = ["honey", "ketchup"];
let allFood = food.concat(bucket);
console.log(allFood);

food.push("mayo");

// (push vs unshift) & (pop vs shift)
let list = ["potato", "cheese", "tomato"];
console.log(list);

list.push("butter"); // pushes from end
console.log(list);

list.unshift("honey"); // pushes from start
console.log(list);

list.pop(); // pops from end
console.log(list);

list.shift(); // pops from start
console.log(list);

// slice()d splice()
let nums = [0, 1, 2, 3, 4, 5, 6, 7];
console.log(nums);

// slice(start, end)
console.log(nums.slice(1, 4));

console.log(nums);

// splice(startIndex, deleteCount, newElements)

// delete and add using splice()
nums.splice(2, 3, 101, 102); // go to index 2 & delete index 2, 3, 4 and add 101, 102 from index 2
console.log(nums);

// add using splice()
nums.splice(4, 0, 103, 104); // go to index 4 & delete nothing and add 103, 104 from index 4
console.log(nums);

// delete using splice()
nums.splice(2, 4); // go to index 4 & delete nothing
console.log(nums);

// Function vs Arrow Function
function sum (a, b) {
    return a + b;
}

const arrowSum = (a, b) => {
    return a + b;
}

// forEach (it takes a function as its parameter)
let arr = [1, 2, 3, 4, 5, 6, 7, 8];

// val means each value at each index
arr.forEach (function printVal(val) {
    console.log(val);
})

// this is how you can code using arrow functions
arr.forEach ((val) => {
    console.log(val);
})

// arr.forEach(callback)
// callback function has 3 parameters (value, index, array)
arr.forEach (function printVal(val, ind, arr) {
    console.log(val, ind, arr);
})

// writing the function outside
let printVal = (val) => {
    console.log(val);
}

arr.forEach(printVal);

// Dom Manipulation
// getElementById
let myButton = document.getElementById('my-btn');
console.log(myButton);
console.dir(myButton);

// getElementsByClassName
let headings = document.getElementsByClassName('heading-class');
console.log(headings)
console.dir(headings)

// getElementsByTagName
let paras = document.getElementsByTagName('p');
console.dir(paras);

// example for getElementsByTagName
let firstElement_P = document.querySelector('p'); // first p tag
console.dir(firstElement_P);

let allElements = document.querySelectorAll('p'); // all p tags
console.dir(allElements);

// querySelector: is alternative way of all getElementsBys
// example for getElementById
let firstElement_btn = document.querySelector('#my-btn');
console.dir(firstElement_btn);

// let allElements = document.querySelectorAll('.heading-class');
// console.dir(allElements); (because id is unique)

// Dome Manipulation Properties
// TagName
let firstElement = document.querySelector('#my-btn');

// innerText: prints all the contents
// innerHTML: prints all the contents including tags
let divExample = document.querySelector("div");
console.dir(divExample);

// textContent: returns the hiddens values as well
let heading = document.querySelector("h1");

// getAttribute gets the attribute value
let divs = document.querySelector("div");
console.log(divs);

let ID = divs.getAttribute("id");
console.log(ID);

let Name =  divs.getAttribute("name");
console.log(Name);

let para = document.querySelector("p");
console.log(para.getAttribute("class"));

// setAttribute: sets the attribute value
let para2 = document.querySelector("p");
console.log(para2.setAttribute("class", "newClass"));

// node.style
let divChangeColor = document.querySelector("div");
divChangeColor.style.backgroundColor = "coral";
divChangeColor.style.fontSize = "25px";
divChangeColor.innerText = "Holla";

// Inserting Element
// button1
let newBtn1 = document.createElement("button");
newBtn1.innerText = "button1";
console.log(newBtn1);

// button2
let newBtn2 = document.createElement("button");
newBtn2.innerText = "button2";
console.log(newBtn2);

// button3
let newBtn3 = document.createElement("button");
newBtn3.innerText = "button3";
console.log(newBtn3);

// button4
let newBtn4 = document.createElement("button");
newBtn4.innerText = "button4";
console.log(newBtn4);

// targeted tag
let div = document.querySelector("div");

div.prepend(newBtn1); // add before targeted tag
div.append(newBtn2);  // add afte targeted tag
div.before(newBtn3); // add before targeted tag
div.after(newBtn4);  // add afte targeted tag

// Delete Element
let removeP = document.querySelector('p');
removeP.remove();