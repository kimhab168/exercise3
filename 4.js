


//4 Use Node.js's fs module to write a file asynchronously `fs.writeFile`. Write a function that takes a file path and a callback. Use the callback to write the contents of the file to the file path.
const fs2 = require('fs');

function writeFile(filePath, callback) {
    const content = "Hello World!";
    
    fs2.writeFile(filePath, content, (err) => {
        if (err) {
            callback(err);
        } else {
            callback(err);
        }
    });
}

const filePath = 'output.txt';

writeFile(filePath, (err) => {
    if (err) {
        console.error('Error writing file:', err);
    } else {
        console.log('File written successfully.');
    }
});
