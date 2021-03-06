const express = require('express');
const helmet = require("helmet")
const server = express();

server.get('/', (req, res) => {
  res.send(`<h2>Let's write some middleware!</h2>`);
});

server.use(helmet())
server.use(express.json())

module.exports = server;