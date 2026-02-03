"use strict";

// #1 - Creating and adding a DOM element to a specified container
function createDomElement(tagName, textContent, container) {
  const element = document.createElement(tagName);
  element.textContent = textContent;
  container.appendChild(element);
  return element;
}
// Demonstration of function usage
// const container = document.body
// console.log(createDomElement('p', 'This paragraph has been added to the specified container.', container))

// #2 - Working with localStorage to save and retrieve user data
function saveUserInfo(key, value) {
  localStorage.setItem(key, JSON.stringify(value));
  console.log(`Saved ${key}: ${JSON.stringify(value)}`);
}

function getUserInfo(key) {
  const value = localStorage.getItem(key);

  if (value) {
    try {
      const parsed = JSON.parse(value);
      console.log(`Retrieved ${key}: ${JSON.stringify(parsed)}`);
      return parsed;
    } catch (error) {
      console.log(`Retrieved ${key}: ${value}`);
      return value;
    }
  }

  return null;
}
// Demonstration of function usage
// saveUserInfo('username', 'JohnDoe');
// console.log(getUserInfo('username'));
