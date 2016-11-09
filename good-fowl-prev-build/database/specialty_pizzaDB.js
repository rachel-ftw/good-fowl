const knex = require('./mainDB')

const Specialty_pizza = {

  // add: ( description, price ) => knex.none( `INSERT INTO specialty_pizza ( description, price ) VALUES ( '${description}', '${price}' )` ),
  // getAll: () => knex.any( `SELECT * FROM specialty_pizza` ),
  // getById: specialty_pizza_id => knex.one( `SELECT * FROM specialty_pizza WHERE id = ${specialty_pizza_id}` ),
  // api_update: ( id, description, price ) => knex.none( `UPDATE specialty_pizza SET description='${description}', price=${price} WHERE id = ${id}` ),
  // update: ( id, description, price ) => {
  //         let sql =                       `BEGIN TRANSACTION;`
  //         if ( description != '' ) sql += `UPDATE specialty_pizza SET description='${description}' WHERE id = '${id}';`
  //         if ( price != '' ) sql +=       `UPDATE specialty_pizza SET price='${price}' WHERE id = '${id}';`
  //         sql +=                          `COMMIT;`
  //         knex.none( sql ) },
  // delete: id => knex.none( `DELETE FROM specialty_pizza WHERE id = '${id}'` ),
  getPrice: pizza_id => knex.one( `SELECT price FROM specialty_pizza WHERE id = '${specialty_pizza_id}'` )

}

module.exports = { Specialty_pizza }
