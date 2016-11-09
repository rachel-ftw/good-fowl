const knex = require('./knex')

const topping = {
  getAll: ( req, res, next ) => {
    knex( 'topping' ).select()
      .then( data => {
        res.status( 200 )
        .json({
          status: 'success',
          data,
          message: 'Retrieved all toppings'
        })
      })
      .catch( error => next( error ))
  },

  getOne: ( req, res, next ) => {
    const { id } = req.params

    knex( 'topping' ).select().where({ id })
      .then( data => {
        res.status( 200 )
        .json({
          status: 'success',
          data,
          message: 'retrieved single topping'
        })
      })
      .catch( error => next( error ))
  },

  add: ( req, res, next ) => {
    const { name, price } = req.body

    knex( 'topping' ).returning('*').insert({ name, price })
      .then( data => {
        res.status( 200 )
        .json({
          status: 'success',
          data,
          message: 'Successfully added a new topping'
        })
      })
      .catch( error => next( error ))
  },

  update: ( req, res, next ) => {
    const { name, price } = req.body
    const { id } = req.params

    knex( 'topping' ).returning('*').where({ id }).update({ name, price })
      .then( data => {
        res.status(200)
        .json({
          status: 'success',
          data,
          message: 'Updated topping'
        })
      })
      .catch( error => next( error ))
  },

  delete: ( req, res, next ) => {
    const { id } = req.params

    knex( 'topping' ).where({ id }).del()
      .then( data => {
        res.status( 200 )
        .json({
          status: 'success',
          data,
          message: 'Deleted topping'
        })
      })
      .catch( error => next( error ))
  }
}

module.exports = topping
