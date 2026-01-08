"use strict";

// ========================================
// TASK 1: Numbers Between
// ========================================
function numbersBetween(min, max) {
  let result = "";

  for (let i = min; i <= max; i++) {
    result = result + i + " ";
  }

  return result.trim();
}

console.log(numbersBetween(1, 5)); // "1 2 3 4 5"
console.log(numbersBetween(3, 7)); // "3 4 5 6 7"

// ========================================
// TASK 2: Reverse String
// ========================================
function reverseString(str) {
  let result = "";

  for (let i = str.length - 1; i >= 0; i--) {
    result = result + str[i];
  }

  return result;
}

console.log(reverseString("hello")); // "olleh"
console.log(reverseString("JavaScript")); // "tpircSavaJ"

// ========================================
// TASK 3: Generate Key
// ========================================
function generateKey(keyLength, symbols) {
  let key = "";

  for (let i = 0; i < keyLength; i++) {
    const randomIndex = Math.floor(Math.random() * symbols.length);
    const randomChar = symbols[randomIndex];
    key = key + randomChar;
  }

  return key;
}

const characters = "abcdefghijklmnopqrstuvwxyz0123456789";
const key = generateKey(16, characters);
console.log(key); // eg599gb60q926j8i

const numbersOnly = "0123456789";
const numberKey = generateKey(25, numbersOnly);
console.log(numberKey); // 3847501826482930485728394

// ========================================
// TASK 4: Get Primes
// ========================================
function getPrimes(min, max) {
  let result = "";

  for (let num = min; num <= max; num++) {
    let isPrime = true;

    for (let divisor = 2; divisor < num; divisor++) {
      if (num % divisor === 0) {
        isPrime = false;
        break;
      }
    }

    if (isPrime && num > 1) {
      result = result + num + " ";
    }
  }

  return result.trim();
}

console.log(getPrimes(2, 10)); // "2 3 5 7"
console.log(getPrimes(20, 41)); // "23 29 31 37 41"
