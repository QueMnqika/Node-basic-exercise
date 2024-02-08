// importing fs and path module
let fs = require('fs')
let path = require('path')

// declare a variable with a .join() with the path which will accept two values (dirname, and the path using loval variable)
let fileName  = path.join(__dirname, './data/data.txt')

function writeToFile(content) {
    try {
        fs.writeFile(fileName, content, (err) => {
            if (!err) {
                console.log('Changes Saved!');
            }
        })
    } catch (e) {
        console.log('Error when writing file');
    }
}

// modifying dat ain the data.txt file
function appendToFile(content) {
    try {
        fs.appendFile(fileName, content, (err) => {
        if (!err) {
            console.log('Saved')
        }
    })
    } catch (e) {
        console.log('Error when appending to file');
    }
    
}

// 
function readFromFile() {
    fs.readFile(file, Name, 'utf8', (err, data) => {
        if (!err) {
            console.log(data);
        }
    })
}


writeToFile('This is the first content')
// appendToFile('second data')
// appendToFile('Second content')