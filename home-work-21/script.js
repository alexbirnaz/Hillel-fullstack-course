"use strict";

// ======== TASK 1: Recursion - Show Deep Array ========

const myArray = [
  1,
  2,
  3,
  [31, 32, 33],
  4,
  5,
  6,
  7,
  [71, 72, [721, 722, 723, [7231, 7232, 7233], 724]],
  8,
  9,
];

function showDeepArray(arr) {
  for (let i = 0; i < arr.length; i++) {
    const item = arr[i];

    if (Array.isArray(item)) {
      showDeepArray(item);
    } else {
      console.log(item);
    }
  }
}
showDeepArray(myArray);

// ======== TASK 2: Average of Numbers in Mixed Array ========

console.log(
  average([
    "hello",
    12,
    "hi",
    3,
    4,
    "another hell",
    1,
    "5",
    7,
    "end",
    0,
    "you again?",
    8,
  ])
);
console.log(
  average([
    34,
    "call me",
    23,
    "no, call me!",
    "11",
    48,
    null,
    51,
    {},
    37,
    undefined,
    20,
    [],
    26,
  ])
);

function average(mixed) {
  let sum = 0;
  let count = 0;

  for (let i = 0; i < mixed.length; i++) {
    const num = Number(mixed[i]);

    if (!Number.isNaN(num)) {
      sum += num;
      count++;
    }
  }

  return count === 0 ? 0 : sum / count;
}
