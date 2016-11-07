// const { Beverage } = require('../beverageDB')
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
      .catch(error => next( error ))
  },


  getOne: ( req, res, next ) => {
    const { id } = req.params

    knex( 'beverage' ).select().where({ id: id })
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

  add: (req, res, next) => {
    const { name, manufacturer, supplier, price } = req.body

    knex('beverage').returning('*').insert({ name, manufacturer, supplier, price })
      .then( data => {
        res.status( 200 )
        .json({
          status:'success',
          data,
          message: 'Inserted'
        })
      })
      .catch( error => next( error ))
  },

  update: ( request, response, next ) => {
    const { name, manufacturer, supplier, price } = request.body
    const { id } = request.params
    Beverage.api_update( id, name, manufacturer, supplier, price )
    .then( () => {
      response.status(200)
      .json({
          status: 'success',
          message: 'Updated beverage'
            })
    })
    .catch( error => {
      return next( error )
    })
  },

  delete: ( request, response, next ) => {
    const { id } = request.params
    Beverage.delete( id )
    .then( () => {
      response.status(200)
      .json({
        status: 'success',
        message: 'Deleted the drink!'
      })
    })
    .catch( error => {
      return next( error )
    })
  }
}

module.exports = beverage
