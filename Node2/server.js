const http = require('http');
const express = require('express');
const app = express();

const firstView = (req, res) => {
    res.statusCode = 200;
    res.setHeader('Content-type', 'text/html');
    res.end(
        `<!DOCTYPE HTML>
        <html lang="en">
        <head>
        <meta Charset="utf-8">
        <meta name="viewport" content="width=device-width, initial-scale-1">
        </head>
        <body>
        <h1>This is Miles' simple Express Javascript http server!</h1>
        <p><a href="/next">Next</a></p>
        </body>
        </html>`
    );
};

const nextView = (req, res) => {
    res.statusCode = 200;
    res.setHeader('Content-type', 'text/html');
    res.end(
        `<!DOCTYPE HTML>
        <html lang="en">
        <head>
        <meta Charset="utf-8">
        <meta name="viewport" content="width=device-width, initial-scale-1">
        </head>
        <body>
        <h1>This is Miles' next view!</h1>
        <p><a href="/">Home</a></p>
        </body>
        </html>`
    );
};

app.get('/', firstView);
app.get('/next', nextView);

app.listen(3000, '127.0.0.1', () => {
    console.log('Server is listening on socket 127.0.0.1:3000');

});