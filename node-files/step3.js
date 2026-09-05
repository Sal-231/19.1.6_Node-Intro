const axios = require('axios');
const fs = require('fs');

function cat(path, output = null) {
    let contents = null;
    try {
        contents = fs.readFileSync(path, 'utf8');

        if (output === null) {
            // '--out' isn't in parameter
            console.log(contents);
        } else {
            // Writes contents to new file
            fs.writeFileSync(output, contents);
        }

    } catch (err) {
        console.log(err);
    }
}

function webCat(website, output = null) {
    axios.get(website).then(response => {

        if (output === null) {
            // '--out' isn't in parameter
            //console.log("Website output");
            console.log(response.data);
        } else {
            // Writes response HTML to new file
            fs.writeFileSync(output, response.data);
        }
    })
    .catch (err => {
        console.log(err);
    })
    
}

const argument = process.argv;

// Ensures correct output to file or console
if (argument[2] === '--out') {
    if (argument[4].startsWith('http://') || argument[4].startsWith('https://')) {
        webCat(argument[4], argument[3]);
    } else {
        cat(argument[4], argument[3]);
    }

} else if (argument[2].startsWith('http://') || argument[2].startsWith('https://')) {
    webCat(argument[2]);
} else {
    cat(argument[2]);
}
