import { isProductionMode } from "./config.js";
import { getUserGreeting } from "./greeting.js";

console.log("--- App Started ---");

const isProd = isProductionMode();
console.log("Production mode:", isProd);

const greeting = getUserGreeting();
console.log(greeting);

console.log("--- App Finished ---");
