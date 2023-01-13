const express = require('express')

const server = express();

server.use(express.json())
// server.use('/api/recipes/recipes-router')

module.exports = server;