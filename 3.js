
//3 Use Node.js's fs module to read a file asynchronously:`fs.readFile`. Write a function that takes a file path and a callback. Use the callback to print the contents of the file to the console.

const fs = require('fs');

function readFile(path, callback) {
    fs.readFile(path, 'utf8', (err, data) => {
        if (err) {
            callback(err);
        } else {
            callback(null, data);
        }
    });
}

const pathRead = './testRead.txt';

readFile(pathRead, (err, data) => {
    if (err) {
        console.error('Error reading file:', err);
    } else {
        console.log('File read successfully.');
        console.log('File content:', data);
    }
});

