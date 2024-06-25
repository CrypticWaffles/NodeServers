const http = require('http');

const onRequest = (request, response) => {
    // Creates first view/home page
    const serveEntry = (response) => {
        response.writeHead(200, {"Content-Type" : "text/html"});
        response.write(`
        <!DOCTYPE HTML>
        <html lang=\"en\">
        <head>
        <meta Charset=\"utf-8\">
        meta name=\"viewport\" content=\"width=device-width, initial-scale-1\">
        </head>
        <body>
        <h1>This is a simple Javascript http server!</h1>
        <p><a href=\"/next\">Next</a></p>
        </body>
        </html>`);
        response.end();
    }

    // Creates second view
    const serveNext = (response) => {
        response.writeHead(200, {"Content-Type" : "text/html"});
        response.write(`
        <!DOCTYPE HTML>
        <html lang=\"en\">
        <head>
        <meta Charset=\"utf-8\">
        meta name=\"viewport\" content=\"width=device-width, initial-scale-1\">
        </head>
        <body>
        <h1>second view</h1>
        <p><a href=\"/\">Home</a></p>
        </body>
        </html>`);
        response.end();
    }

    // allows user to request pages
    if (request.method == 'GET' && request.url == '/'){
        serveEntry(response);
    }

    // allows user to request pages
    if (request.method == 'GET' && request.url == '/next'){
        serveNext(response);
    }
}

http.createServer(onRequest).listen(3000, '127.0.0.1');