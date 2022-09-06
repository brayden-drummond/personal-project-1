const express = require('express')
const path = require('path')

const charactersRoutes = require('./routes/characters')

const server = express()

server.use(express.json())
server.use(express.static(path.join(__dirname, 'public')))

server.use('/api/v1/characters', charactersRoutes)

module.exports = server
