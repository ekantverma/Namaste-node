const fs = require("fs");
const crypto = require("crypto");

// Changing the size of thread Pool
process.env.UV_THREADPOOL_SIZE = 2;

crypto.pbkdf2("password", "salt", 5000000, 50, "sha512", (err, key) => {
  console.log("1 - CryptoPKBDF2: done");
});

fs.readFile('multitask.js', 'utf8', () => {
  console.log("FS: done");
});

crypto.pbkdf2("password", "salt", 5000000, 50, "sha512", (err, key) => {
  console.log("2 - CryptoPKBDF2: done");
});
crypto.pbkdf2("password", "salt", 5000000, 50, "sha512", (err, key) => {
  console.log("3 - CryptoPKBDF2: done");
});
crypto.pbkdf2("password", "salt", 5000000, 50, "sha512", (err, key) => {
  console.log("4 - CryptoPKBDF2: done");
});
crypto.pbkdf2("password", "salt", 5000000, 50, "sha512", (err, key) => {
  console.log("5 - CryptoPKBDF2: done");
});
