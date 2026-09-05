const axios = require('axios');

const fs = require('fs');

function cat(path) {
    try {
        const contents = fs.readFileSync(path, 'utf8');
        console.log(contents);
    } catch (err) {
        console.log(err);
    }
}

function webCat(website) {
    axios.get(website).then(response => {
        console.log(response.data);
    })
    .catch (err => {
        console.log(err);
    })
}
const argument = process.argv[2];

if (argument.startsWith('http://') || argument.startsWith('https://')) {
    webCat(argument);
} else {
    cat(argument);
}
