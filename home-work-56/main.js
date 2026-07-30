function asyncOperationDemo(callback) {
  console.log("First call");

  process.nextTick(() => {
    console.log("nextTick done");
    callback("nextTick");
  });

  setImmediate(() => {
    console.log("setImmediate done");
    callback("setImmediate");
  });

  setTimeout(() => {
    console.log("setTimeout done");
    callback("setTimeout");
  }, 0);

  console.log("Last call");
}
asyncOperationDemo((operation) => {
  console.log(`Completed execution: ${operation}`);
});

export { asyncOperationDemo };
