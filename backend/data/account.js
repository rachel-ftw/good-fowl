const knex = require('./knex')


const account = {
  getAll: ( req, res, next ) => {
    knex( 'account' ).select()
      .then( data => {
        res.status( 200 )
        .json({
          status: 'success',
          data,
          message: 'Retrieved all accounts.'
        })
      })
      .catch( error => next( error ))
  },

  getOneByUsername: ( req, res, next ) => {
    const { username } = req.params

    knex( 'account' ).select().where({ username })
      .then( data => {
        res.status( 200 )
        .json({
          status: 'success',
          data,
          message: `retrieved account by username: ${username}`
        })
      })
      .catch( error => next( error ))
  },
  
  getOneById: ( req, res, next ) => {
    const { id } = req.params

    knex( 'account' ).select().where({ id })
      .then( data => {
        res.status( 200 )
        .json({
          status: 'success',
          data,
          message: `retrieved account by id: ${id}`
        })
      })
      .catch( error => next( error ))
  },

  add: ( req, res, next ) => {
    const { username, password } = req.body

    knex( 'account' ).returning( '*' ).insert({ username, password })
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

    knex( 'account' ).returning( '*' ).where({ id }).update({ username, password })
      .then( data => {
        res.status(200)
        .json({
          status: 'success',
          data,
          message: 'Updated account'
        })
      })
      .catch( error => next( error ))
  },

  delete: ( req, res, next ) => {
    const { id } = req.params

    knex( 'account').where({ id }).del()
      .then( data => {
        res.status( 200 )
        .json({
          status: 'success',
          data,
          message: 'Deleted the account!'
        })
      })
      .catch( error => next( error ))
  }
}

module.exports = account
