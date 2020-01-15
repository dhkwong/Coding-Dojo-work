const http = require('http');
const fs = require('fs');
const server = http.createServer((request, response) => {
    if (request.url === '/cats') {
        fs.readFile('./views/cats.html', 'utf8', (errors, contents) => {
            console.log(contents)
            response.writeHead(200, { 'Content-Type': 'text/html' });
            response.write(contents);
            response.end();
        });
    }
    else if (request.url === "/cars") {
        fs.readFile('./views/cars.html', 'utf8', (errors, contents) => {
            response.writeHead(200, { 'Content-type': 'text/html' });
            response.write(contents);
            response.end();
        });
    }
    else if (request.url === "/cars/new") {
        fs.readFile('./views/carsnew.html', 'utf8', (errors, contents) => {
            response.writeHead(200, { 'Content-type': 'text/html' });
            response.write(contents);
            response.end();
        });
    }
    else if (request.url === '/stylesheets/style.css') {
        fs.readFile('./stylesheet/style.css', 'utf8', function (errors, contents) {
            response.writeHead(200, { 'Content-type': 'text/css' });
            response.write(contents);
            response.end();
        })
    }
    else if (request.url === '/images/cat.png') {
        // notice we won't include the utf8 encoding
        fs.readFile('./images/cat.png', function (errors, contents) {
            response.writeHead(200, { 'Content-type': 'image/png' });
            response.write(contents);
            response.end();
        })
    }
    else if (request.url === '/images/car.png') {
        // notice we won't include the utf8 encoding
        fs.readFile('./images/car.png', function (errors, contents) {
            response.writeHead(200, { 'Content-type': 'image/png' });
            response.write(contents);
            response.end();
        })
    }
    else {
        response.end('File not found!!!');
    }
});
server.listen(7077);
console.log("listening on port 7077");
