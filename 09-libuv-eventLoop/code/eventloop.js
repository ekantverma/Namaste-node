const fs = require('fs');
const a = 100;

setImmediate(() => {
    console.log("Set Immidiate");
})

fs.readFile("./file.txt", "utf8", () => {
    console.log("File Reading CB");
});

setTimeout(() => {
    console.log("Time Expired");
}, 0);

function printA(a){
    console.log("a=", a);
}

printA(a);
console.log("Last Line of the file.")

//Output 
// a = 100
// Last Line of the file
//Time Expired
//Set Immidiate
//File Reading CB

//Event loop of Nodejs : Timer -> poll -> check -> close

//Every task is store in queue at the event loop time