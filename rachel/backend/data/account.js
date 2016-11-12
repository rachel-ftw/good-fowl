const knex = require('./knex')

const customers = {
  getAll: ( req, res, next ) => {
    knex( 'customers' ).select()
      .then( data => {
        res.status( 200 )
        .json({
          status: 'success',
          data,
          message: 'Retrieved all customerss.'
        })
      })
      .catch( error => next( error ))
  },

  getOneByUsername: ( req, res, next ) => {
    const { username } = req.params

    knex( 'customers' ).select().where({ username })
      .then( data => {
        res.status( 200 )
        .json({
          status: 'success',
          data,
          message: `retrieved customers by username: ${username}`
        })
      })
      .catch( error => next( error ))
  },
  
  getOneById: ( req, res, next ) => {
    const { id } = req.params

    knex( 'customers' ).select().where({ id })
      .then( data => {
        res.status( 200 )
        .json({
          status: 'success',
          data,
          message: `retrieved customers by id: ${id}`
        })
      })
      .catch( error => next( error ))
  },

  add: ( req, res, next ) => {
    const { username, password } = req.body

    knex( 'customers' ).returning( '*' ).insert({ username, password })
      .then( data => {
        res.status( 200 )
        .json({
          status: 'success',
          data,
          message: 'Inserted'
        })
      })
      .catch( error => next( error ))
  },

  update: ( req, res, next ) => {
    const { username, password } = req.body
    const { id } = req.params

    knex( 'customers' ).returning( '*' ).where({ id }).update({ username, password })
      .then( data => {
        res.status(200)
        .json({
          status: 'success',
          data,
          message: 'Updated customers'
        })
      })
      .catch( error => next( error ))
  },

  delete: ( req, res, next ) => {
    const { id } = req.params

    knex( 'customers').where({ id }).del()
      .then( data => {
        res.status( 200 )
        .json({
          status: 'success',
          data,
          message: 'Deleted the customers!'
        })
      })
      .catch( error => next( error ))
  }
}

module.exports = customers
