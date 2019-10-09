const express = require('express');

const SchemeRouter = require('./schemes/scheme-router.js');
const StepsRouter = require('./steps/steps-router.js');
const server = express();

server.use(express.json());
server.use('/api/schemes', SchemeRouter);
server.use('/api/steps', StepsRouter);
server.get('/', (req, res) => {
    res.send('<h2>Hello peeps of the deeps</h2>');
});

module.exports = server;