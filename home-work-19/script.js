// TASK 1
// Random number generation

const min1 = 1;
const max1 = 10;
const random1 = Math.floor(Math.random() * (max1 - min1 + 1)) + min1;
console.log(random1);

const min2 = 40;
const max2 = 50;
const random2 = Math.floor(Math.random() * (max2 - min2 + 1)) + min2;
console.log(random2);

const min3 = 1;
const max3 = 100;
const random3 = Math.floor(Math.random() * (max3 - min3 + 1)) + min3;
console.log(random3);

// TASK 2
// Greeting messages

// String concatenation
const message1 = "Hi";
const name1 = "John";
const greeting1 = message1 + ", " + name1 + "!";
console.log(greeting1);

// Template strings
const message2 = "Hey";
const name2 = "Bob";
const greeting2 = `${message2}, ${name2}!`;
console.log(greeting2);
