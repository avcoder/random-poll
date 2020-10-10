const http = require('http')
const PORT = 8000;

function getRandom(max) {
    return Math.floor(Math.random() * Math.floor(max));
}

function getNumbers() {
    const MAX = 100;
    const numbers =  {
        a: getRandom(MAX),
        b: getRandom(MAX),
        c: getRandom(MAX), 
        d: getRandom(MAX)
    }
    return numbers;
}

const requestListener = function(req, res) {
    res.writeHead(200);
    res.end(JSON.stringify(getNumbers()));
}

const server = http.createServer(requestListener)
console.log(`listening on port ${PORT}`);
server.listen(PORT)

// console.log(JSON.stringify(numbers));