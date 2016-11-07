const knex = require('../mainDB')
const { Crust } = require('../custom_pizzaDB')

const crust = {

  getAll: ( req, res, next ) => {
    knex( 'crust' ).select()
    .then( data => {
      res.status(200)
      .json({
           status: 'success',
           data,
           message: 'Retrieved ALL crusts'
         })
     })
     .catch( error => next( error ))
  },

  getOne: ( req, res, next ) => {
    const { id } = req.params

    knex( 'crust' ).select().where({ id })
      .then( data => {
        res.status(200)
        .json({
          status: 'success',
          data,
          message: 'Retrieved one crust'
        })
      })
      .catch( error => next( error ))
  },

  add: ( req, res, next ) => {
    const { name, price } = req.body

    knex( 'crust' ).returning( '*' ).insert({ name, price })
      .then( () => {
        res.status(200)
        .json({
          status: 'success',
          message: 'Added new crust type'
        })
      })
      .catch( error => next( error ))
  },


  update: ( req, res, next ) => {
    const { name, price } = req.body
    const { id } = req.params

    knex( 'crust' ).returning( '*' ).where({ id }).update( name, price )
    .then( () => {
      res.status(200)
      .json({
        status: 'success',
        message: 'Updated crust entry.'
      })
    })
    .catch( error => next( error ))
  },

  delete: ( req, res, next ) => {
    const { id } = req.params
    knex( 'crust' ).where({ id }).del()
      .then( () => {
        res.status(200)
        .json({
          status: 'success',
          message: 'Deleted crust type.'
        })
      })
      .catch( error => next( error ))
  }


}

module.exports = crust
