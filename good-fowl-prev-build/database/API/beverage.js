const knex = require('../mainDB')

const beverage = {
  getAll: ( req, res, next ) => {
    knex( 'beverage' ).select()
      .then( data => {
        res.status( 200 )
        .json({
          status: 'success',
          data,
          message: 'Retrieved all beverages.'
        })
      })
      .catch( error => next( error ))
  },

  getOne: ( req, res, next ) => {
    const { id } = req.params

    knex( 'beverage' ).select().where({ id })
      .then( data => {
        res.status( 200 )
        .json({
          status: 'success',
          data,
          message: 'retrieved specified beverage.'
        })
      })
      .catch( error => next( error ))
  },

  add: ( req, res, next ) => {
    const { name, manufacturer, supplier, price } = req.body

    knex( 'beverage' ).returning( '*' ).insert({
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

    knex( 'beverage' ).returning( '*' ).where({ id }).update({
      name, manufacturer, supplier, price
    })
      .then( data => {
        res.status(200)
        .json({
          status: 'success',
          data,
          message: 'Updated beverage'
        })
      })
      .catch( error => next( error ))
  },

  delete: ( req, res, next ) => {
    const { id } = req.params

    knex( 'beverage').where({ id }).del()
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

module.exports = beverage
