const knex = require('knex')
const configurations = require('../knexfile.js')
const environment = 'development'

module.exports = knex(configurations[environment])