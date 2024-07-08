const fs = require('fs');

function inputOutputFile(readData, writeData) {
    const inputFile = "input.txt";
    const output1 = "output1.txt";
    const output2 = "output2.txt";
    readData(inputFile, (err, data) => {
        if (err) {
            console.error('Error reading input file:', err);
            return;
        }
        console.log('File content in input.txt:', data);
        let modifiedData1 = data + "First modification";
        writeData(output1, modifiedData1, (err) => {
            if (err) {
                console.error('Error writing to output1.txt:', err);
            } else {
                console.log('Successfully wrote to output1.txt.');
                readData(output1, (err, data) => {
                    if (err) {
                        console.error('Error reading output1.txt:', err);
                        return;
                    }
                    console.log('File content (output1.txt):', data);
                    
                    let modifiedData2 = data + "Second modification";
                    writeData(output2, modifiedData2, (err) => {
                        if (err) {
                            console.error('Error writing to output2.txt:', err);
                        } else {
                            console.log('Successfully wrote to output2.txt.');
                            readData(output2, (err, data) => {
                                if (err) {
                                    console.error('Error reading output2.txt:', err);
                                    return;
                                }
                                console.log('Final content (output2.txt):', data);
                                console.log('Process complete.');
                            });
                        }
                    });
                });
            }
        });
    });
}

function readData(path, callback) {
    fs.readFile(path, 'utf8', (err, data) => {
        if (err) {
            callback(err);
        } else {
            callback(null, data);
        }
    });
}

function writeData(filePath, content, callback) {
    fs.writeFile(filePath, content, (err) => {
        if (err) {
            callback(err);
        } else {
            callback(null);
        }
    });
}

inputOutputFile(readData, writeData);
