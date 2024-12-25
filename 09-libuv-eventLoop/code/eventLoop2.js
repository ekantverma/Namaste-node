const fs = require('fs');
const a = 100;
setImmediate(() => {
    console.log('setImmediate')
})

Promise.resolve().then(() => {console.log('Promise')});

fs.readFile("file.js", "utf8", () => {
    console.log('File read')
})

setTimeout(() => {
    console.log('setTimeout')
});

process.nextTick(() => {
    console.log('nextTick')
});

function printA(a){
    console.log(a);
}

printA(a);
console.log('end of file');



// Ouptut 
// 100
// end of file
// next Tick
// Promise
// Set time out
// Set Immidiate
// File read

