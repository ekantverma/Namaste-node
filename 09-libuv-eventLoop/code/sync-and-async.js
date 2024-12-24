var a = 1075;
var b = 678;

https.get('https://nodejs.org/dist/index.json', (res) => {
  console.log('Got response: ' + res?.statusCode);
})

setTimeout(() => {
    console.log('settimeout called after 5 sec');
}, 5000);

fs.readFile('file.txt', 'utf8', (err, data) => {
    if (err) throw err;
    console.log(data);
});

function multiply(a, b){
    return a * b;
}

var c = multiply(a, b);

console.log('The value of c is: ' + c);