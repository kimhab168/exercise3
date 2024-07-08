
//5 Use the example 3 & 4, write in the below scenario:

// Read the context of `input.txt`
// Append “First modification” to the content and write it to `output1.txt`
// Read `output1.txt` and append “SEcond modification” to the file `output2.txt`
// Finally read `output2.txt` and print to the console

const fs3 = require('fs')


function inputOutputFile(readData,writeData){
    const inputFile = "input.txt"
    const output1 = "output1.txt"
    const output2 = "output2.txt"
    readData(inputFile, (err,data)=>{
        if (err) {
            console.error('Error reading file:', err);
        } else {
            console.log('File read successfully.');
            console.log('File content:', data);
            const text = data +"\nFirst Modification"
            writeData(output1,text, (err) => {
                if (err) {
                    console.error('Error writing file:', err);
                } else {
                    console.log('File written successfully.');
                    readData(output1, (err,data)=>{
                        if (err) {
                            console.error('Error reading file:', err);
                        } else {
                            console.log('File read successfully.');
                            console.log('File content:', data);
                            let text = data+"\nSecond Modification"
                            writeData(output2,text, (err) => {
                                if (err) {
                                    console.error('Error writing file:', err);
                                } else {
                                    console.log('File written successfully.');
                                    readData(output2, (err,data)=>{
                                        if (err) {
                                            console.error('Error reading file:', err);
                                        } else {
                                            console.log('File read successfully.');
                                            console.log('File content:', data);
                                        }
                                    })
                                }
                            });
                        }
                    })
                }
            });
        }
    })

}
function readData(path, callback) {
    fs3.readFile(path, 'utf8', (err, data) => {
        if (err) {
            callback(err);
        } else {
            callback(null, data);
        }
    });
}

function writeData(filePath,content, callback) {
    
    fs3.writeFile(filePath, content, (err) => {
        if (err) {
            callback(err);
        } else {
            callback(err);
        }
    });
}
inputOutputFile(readData,writeData)