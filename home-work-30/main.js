console.log("#11. JavaScript homework example file");

/*
 * #1
 *
 * Write a function that takes a string as input and checks if it is a valid email address using a regular expression.
 * The function returns true if the email is valid, and false otherwise.
 *
 */

function isValidEmail(email) {
  const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return regex.test(email);
}

console.log(isValidEmail("example@example.com")); // true
console.log(isValidEmail("invalid-email")); // false

/*
 * #2
 *
 * Write a function that takes a string as input and checks if it is a valid website URL using a regular expression.
 * The function returns true if the URL is valid, and false otherwise.
 *
 */

function isValidUrl(url) {
  const regex = /^(https?:\/\/)?(www\.)?[a-zA-Z0-9-]+\.[a-zA-Z]{2,}(\/\S*)?$/;
  return regex.test(url);
}

console.log(isValidUrl("https://www.example.com")); // true
console.log(isValidUrl("invalid-url")); // false

export { isValidEmail, isValidUrl };
