"use strict";

// ======== TASK 1: OOP: Classes ========

class Human {
  constructor(name, gender) {
    this.name = name;
    this.gender = gender;
  }
}

class Apartment {
  constructor() {
    this.residents = [];
  }

  addResident(human) {
    this.residents.push(human);
  }
}
class House {
  constructor(maxApartments) {
    this.apartments = [];
    this.maxApartments = maxApartments;
  }

  addApartment(apartment) {
    if (this.apartments.length < this.maxApartments) {
      this.apartments.push(apartment);
    } else {
      console.log("Too many apartments");
    }
  }
}
const h1 = new Human("John", "male");
const h2 = new Human("Jane", "female");
const h3 = new Human("Mike", "male");

const apt1 = new Apartment();
apt1.addResident(h1);
apt1.addResident(h2);

const apt2 = new Apartment();
apt2.addResident(h3);

const house = new House(2);
house.addApartment(apt1);
house.addApartment(apt2);
house.addApartment(new Apartment()); // Should log "Too many apartments"

console.log(house);

console.log("=======================================");

// ======== TASK 2: OOP: Hamburger ========

class Hamburger {
  static SIZE_SMALL = { price: 50, calories: 20 };
  static SIZE_LARGE = { price: 100, calories: 40 };

  static STUFFING_CHEESE = { price: 10, calories: 20 };
  static STUFFING_SALAD = { price: 20, calories: 5 };
  static STUFFING_POTATO = { price: 15, calories: 10 };

  static TOPPING_SAUCE = { price: 15, calories: 0 };
  static TOPPING_MAYO = { price: 20, calories: 5 };

  constructor(size, stuffing) {
    this.size = size;
    this.stuffing = stuffing;
    this.toppings = [];
  }

  addTopping(topping) {
    this.toppings.push(topping);
  }

  calculate() {
    return (
      this.size.calories +
      this.stuffing.calories +
      this.toppings.reduce((sum, topping) => sum + topping.calories, 0)
    );
  }

  calculatePrice() {
    return (
      this.size.price +
      this.stuffing.price +
      this.toppings.reduce((sum, topping) => sum + topping.price, 0)
    );
  }
}

const hamburger = new Hamburger(
  Hamburger.SIZE_SMALL,
  Hamburger.STUFFING_CHEESE,
);
hamburger.addTopping(Hamburger.TOPPING_MAYO);

console.log("Calories: ", hamburger.calculate());
console.log("Price: ", hamburger.calculatePrice());

hamburger.addTopping(Hamburger.TOPPING_SAUCE);
console.log("Price with sauce: ", hamburger.calculatePrice());
