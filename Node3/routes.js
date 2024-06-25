const http = require('http');
const express = require('express');
const app = express();

// route (filepath) to the file being requested by a URL
const publicRouter = require('./views/public');
const privateRouter = require('./views/private');

// URL that is being requested with the function containing it's route
app.use('/', publicRouter);
app.use('/private', privateRouter);

app.listen(3000, function(){
    console.log('Server is listening on socket 127.0.0.1:3000');

    
});