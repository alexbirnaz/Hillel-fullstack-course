const myNum = 10;
const myStr = "some string";
const myBool = true;
const myArr = [1, 2, 3, 4, 5];
const myObj = {
  first: "First Name",
  last: "Last Name",
};

const decimal2 = myNum.toFixed(2);

let myBigInt = 123n;
myBigInt += 1n;

console.log("=== Task #1: Variables ===");
console.log("myNum:", myNum, "| Type:", typeof myNum);
console.log("myStr:", myStr, "| Type:", typeof myStr);
console.log("myBool:", myBool, "| Type:", typeof myBool);
console.log("myArr:", myArr, "| Type:", typeof myArr);
console.log("myObj:", myObj, "| Type:", typeof myObj);

console.log("=== Task #2: Decimal Formatting ===");
console.log("decimal2:", decimal2, "| Type:", typeof decimal2);

console.log("=== Task #3: BigInt ===");
console.log("myBigInt:", myBigInt, "| Type:", typeof myBigInt);
