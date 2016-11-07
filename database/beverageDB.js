const knex = require('./mainDB')


const Beverage = {
  add: (req, res, next) => {
    const { name, price } = req.body

    knex('beverage').returning('*').insert({ name, price })
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
  getAll: ( req, res, next ) => {
    knex( 'drinks' ).select()
      .then( data => {
        response.status( 200 )
        .json({
          status: 'success',
          data,
          message: 'Retrieved all drinks.'
        })
      })
      .catch(error => next( error ))
  }
  // getById: id => db.one( `SELECT * FROM beverage WHERE id = ${id}` ),
  // api_update: (id, name, manufacturer, supplier, price) => db.none( `UPDATE beverage SET name='${name}', manufacturer='${manufacturer}', supplier='${supplier}', price='${price}' WHERE id = ${id}` ),
  // update: ( id, name, manufacturer, supplier, price ) => {
  //         let sqlString =                       `BEGIN TRANSACTION;`
  //         if( name != '' ) sqlString +=         `UPDATE beverage SET name='${name}' WHERE id = ${id};`
  //         if( manufacturer != '') sqlString +=  `UPDATE beverage SET manufacturer='${manufacturer}' WHERE id = ${id};`
  //         if( supplier != '') sqlString +=      `UPDATE beverage SET supplier='${supplier}' WHERE id = ${id};`
  //         if( price != '') sqlString +=         `UPDATE beverage SET price=${price} WHERE id = ${id};`
  //         sqlString +=                          `COMMIT;`
  //         db.none( sqlString )},
  // delete: id => db.none( `DELETE FROM beverage WHERE id = ${id}` )

}

module.exports = { Beverage }
