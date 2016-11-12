const knex = require('./knex')

const drinks = {
  getAll: ( req, res, next ) => {
    knex( 'drinks' ).select()
      .then( data => {
        res.status( 200 )
        .json({
          status: 'success',
          data,
          message: 'Retrieved all drinkss.'
        })
      })
      .catch( error => next( error ))
  },

  getOne: ( req, res, next ) => {
    const { id } = req.params

    knex( 'drinks' ).select().where({ id })
      .then( data => {
        res.status( 200 )
        .json({
          status: 'success',
          data,
          message: 'retrieved specified drinks.'
        })
      })
      .catch( error => next( error ))
  },

  add: ( req, res, next ) => {
    const { name, manufacturer, supplier, price } = req.body

    knex( 'drinks' ).returning( '*' ).insert({
      name, manufacturer, supplier, price
    })
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
    const { name, manufacturer, supplier, price } = req.body
    const { id } = req.params

    knex( 'drinks' ).returning( '*' ).where({ id }).update({
      name, manufacturer, supplier, price
    })
      .then( data => {
        res.status(200)
        .json({
          status: 'success',
          data,
          message: 'Updated drinks'
        })
      })
      .catch( error => next( error ))
  },

  delete: ( req, res, next ) => {
    const { id } = req.params

    knex( 'drinks').where({ id }).del()
      .then( data => {
        res.status( 200 )
        .json({
          status: 'success',
          data,
          message: 'Deleted the drink!'
        })
      })
      .catch( error => next( error ))
  }
}

module.exports = drinks
