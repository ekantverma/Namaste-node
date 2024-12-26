const fs = require('fs');

setImmediate(() => {
    console.log('setImmediate')
})

setTimeout(() => {
    console.log('setTimeout')
}, 0);

Promise.resolve().then(() => {
    console.log('Promise')
});

fs.readFile("file.js", "utf8", () => {
    console.log('File read')
});

process.nextTick(() => {
    process.nextTick(() => {
        console.log('Inner NextTick')
    });
    console.log('NextTick')
})

console.log("Last line of the file");


// Event Loop : Timer --> poll --> check --> close
// Inner of the Event Loop : NextTick --> Promise

// Output:
// Last line of the file
// NextTick
// Inner NextTick
// Promise
 // setTimeout
 // Set Immediate
 // File read (Depends on file empty and full)