const knex = require('../mainDB')

const customer = {
  getAll: ( req, res, next ) =>  {
    knex( 'customer' ).select()
      .then( data => {
        res.status(200)
        .json({
          status: 'success',
          data,
          message: 'Retrieved all customers.'
        })
      })
      .catch( error => next( error ))
  },

  getOne: ( req, res, next ) => {
    const { id } = req.params

    knex( 'customer' ).select().where({ id })
      .then( data => {
        res.status(200)
        .json({
          status: 'success',
          data,
          message: 'Retrieved single customer.'
        })
      })
      .catch( error => next( error ))
  },

  add: ( req, res, next ) => {
    const { name, address, phone_number } = req.body

    knex( 'customer' ).returning( '*' ).insert({ name, address, phone_number })
      .then( data => {
        res.status(200)
        .json({
          status: 'success',
          data,
          message: 'Added new customer.'
        })
      })
      .catch( error => next( error ))
  },

  update: ( req, res, next ) => {
    const { name, address, phone_number } = req.body
    const { id } = req.params

    knex( 'customer' ).returning( '*' ).where({ id }).update({
      name, address, phone_number 
    })
      .then( () => {
        res.status(200)
        .json({
          status: 'success',
          message: 'Updated customer.'
        })
      })
      .catch( error => next( error ))
  },

  delete: ( req, res, next ) => {
    const { id } = req.params

    knex( 'customer' ).where({ id }).del()
      .then( () => {
        res.status(200)
        .json({
          status: 'success',
          message: 'Customer deleted.'
        })
      })
      .catch( error => next( error ))
  }
}

module.exports = customer
