const knex = require( './mainDB' )

const Customer = {

  // add: ( name, address, phone_number ) => knex.one( `INSERT INTO customer ( name, address, phone_number ) VALUES ( '${name}', '${address}', '${phone_number}' ) RETURNING id` ),
  // getAll: () => knex.any( `SELECT * FROM customer` ),
  // getById: id => knex.one( `SELECT * FROM customer WHERE id=${id}` ),
  getNames: () => knex.any( `SELECT name FROM customer` ),
  // api_update: ( id, name, address, phone_number ) => knex.none( `UPDATE customer SET name='${name}', address='${address}', phone_number='${phone_number}' WHERE id = ${id}` ),
  // update: ( id, name = '', address = '', phone_number = '' ) => {
  //         let sql =                      `BEGIN TRANSACTION;`
  //         if (name != '') sql +=         `UPDATE customer SET name='${name}' WHERE id = ${id};`
  //         if (address != '') sql +=      `UPDATE customer SET address='${address}' WHERE id = ${id};`
  //         if (phone_number != '') sql += `UPDATE customer SET phone_number='${phone_number}' WHERE id = ${id};`
  //         sql +=                         `COMMIT;`
  //         knex.none( sql )},
  // delete: id => knex.none( `DELETE FROM customer WHERE id=${id}` )



}

module.exports = { Customer }
