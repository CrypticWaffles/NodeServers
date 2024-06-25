const express = require('express');
const router = express.Router();

router.get('/', (req,res) => {
    res.send( `<!DOCTYPE HTML>
    <html lang="en">
    <head>
    <meta Charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale-1">
    </head>
    <body>
    <h1>This is the private page Miles' simple Express Multi file router http server!</h1>
    <p><a href="/">Public</a></p>
    </body>
    </html>`);
});

module.exports = router;

