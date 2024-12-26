const fs = require('fs');

// Poll
setImmediate(() => console.log("setImmediate"));

//Timer
setTimeout(() => console.log("Timer Expired"), 0);

//Promise
Promise.resolve().then(() => console.log("Promise"));

//Check
fs.readFile("file.txt", "utf8", () => {
    setTimeout(() => console.log("2nd Timer"), 0);
    Promise.resolve().then(() => console.log("2nd promise"));
    process.nextTick(() => console.log("2nd nextTick"));
    setImmediate(() => console.log("2nd setImmediate"));
    console.log("File Read");
})
// Next Tick
process.nextTick(() => console.log("nextTick"));

console.log("last line of file");


// output: 
// End of this file
// nextTick
// Promise
// Set Time out
// Set Immidiate
// File read
// 2nd nextTick
// 2nd promise
// 2nd setImmediate
// 2nd Timer