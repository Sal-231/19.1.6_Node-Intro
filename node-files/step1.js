const fs = require('fs');

function cat(path) {
    const contents = fs.readFileSync(path, 'utf8');
    console.log(contents);
}

cat('./one.txt');