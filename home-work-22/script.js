"use strict";

// ======== TASK 1: Counter Using Closures ========

const counter = (function () {
  let count = 0;

  return function (n) {
    if (typeof n === "number") {
      count = n;
      return count;
    }
    count += 1;
    return count;
  };
})();
console.log(counter());
console.log(counter());
console.log(counter(100));
console.log(counter());
console.log(counter());
console.log(counter(500));
console.log(counter());
console.log(counter());
console.log(counter(0));
console.log(counter());
console.log(counter());

console.log("=======================================");

// ======== TASK 2: Counter Factory with Closures ========

const counterFactory = (function () {
  let count = 0;

  return {
    value: function (n) {
      if (typeof n === "number") {
        count = n;
      }
      return count;
    },

    increment: function () {
      count += 1;
      return count;
    },

    decrement: function () {
      count -= 1;
      return count;
    },
  };
})();

console.log(counterFactory.value());
counterFactory.increment();
counterFactory.increment();
counterFactory.increment();
console.log(counterFactory.value());
counterFactory.decrement();
counterFactory.decrement();
console.log(counterFactory.value());
console.log(counterFactory.value(100));
counterFactory.decrement();
console.log(counterFactory.value());
console.log(counterFactory.value(200));
counterFactory.increment();
console.log(counterFactory.value());
