import "./styles/style.css";
import _ from "lodash";

// Lodash demo
const message = _.join(["Webpack", "is", "working!"], " ");
document.getElementById("lodash-demo").textContent = message;

console.log("Webpack project loaded!");
