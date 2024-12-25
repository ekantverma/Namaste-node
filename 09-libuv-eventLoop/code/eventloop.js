const a = 100;

setImmediate(() => {
    console.log("Set Immidiate");
})

fs.readFile("./file.txt", "utf8", (err, data) => {
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