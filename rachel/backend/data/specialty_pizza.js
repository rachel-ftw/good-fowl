const knex = require('./knex')

const specialty = {
  getAll: ( req, res, next ) => {
    knex( 'specialty_pizza' ).select()
      .then( data => {
        res.status( 200 )
        .json({
          status: 'success',
          data,
          message: 'Retrieved all specialty pizzas'
        })
      })
      .catch( error => next( error ))
  },

  getOne: ( req, res, next ) => {
    const { id } = req.params

    knex( 'specialty_pizza' ).select().where({ id })
      .then( data => {
        res.status( 200 )
        .json({
          status: 'success',
          data,
          message: 'retrieved single specialty pizza'
        })
      })
      .catch( error => next( error ))
  },

  add: ( req, res, next ) => {
    const { description, price } = req.body

    knex( 'specialty_pizza' ).returning('*').insert({ description, price })
      .then( data => {
        res.status( 200 )
        .json({
          status: 'success',
          data,
          message: 'Successfully added a new specialty pizza.'
        })
      })
      .catch( error => next( error ))
  },

  update: ( req, res, next ) => {
    const { description, price } = req.body
    const { id } = req.params

    knex( 'specialty_pizza' ).returning('*').where({ id }).update({ description, price })
      .then( data => {
        res.status(200)
        .json({
          status: 'success',
          data,
          message: 'Updated specialty pizza entry.'
        })
      })
      .catch( error => next( error ))
  },

  delete: ( req, res, next ) => {
    const { id } = req.params

    knex( 'specialty_pizza' ).where({ id }).del()
      .then( data => {
        res.status( 200 )
        .json({
          status: 'success',
          data,
          message: 'Deleted specialty pizza.'
        })
      })
      .catch( error => next( error ))
  }
}

module.exports = specialty
