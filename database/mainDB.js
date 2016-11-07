const DATABASE_NAME = 'intriguing-mongoose'
const connectionString = `postgres://${process.env.USER}@localhost:5432/${DATABASE_NAME}`
const knex = require( 'knex' )({
  client: 'pg',
  connection: connectionString,
  searchPath: 'knex,public'
})

module.exports = knex
