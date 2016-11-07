const knex = require('./mainDB')


const Crust = {

  add: ( name, price ) => knex.none( `INSERT INTO crust ( name, price ) VALUES ( '${name}', '${price}' )` ),
  getAll: () => knex.any( `SELECT * FROM crust` ),
  getById: crust_id => knex.one( `SELECT * FROM crust WHERE id = ${crust_id}` ),
  api_update: ( id, name, price ) => knex.none( `UPDATE crust SET name='${name}', price=${price} WHERE id = ${id}`),
  update: ( id, name, price ) => {
          let sql =                 `BEGIN TRANSACTION;`
          if ( name != '' ) sql +=  `UPDATE crust SET name='${name}' WHERE id = ${id};`
          if ( price != '' ) sql += `UPDATE crust SET price=${price} WHERE id = ${id};`
          sql +=                    `COMMIT;`
          knex.none( sql )},
  delete: id => knex.none( `DELETE FROM crust WHERE id = '${id}'` )

}

const Topping = {

  add: ( name, price ) => knex.none( `INSERT INTO topping ( name, price ) VALUES ( '${name}', '${price}' )` ),
  getAll: () => knex.any( `SELECT * FROM topping` ),
  getById: id => knex.one( `SELECT * FROM topping WHERE id=${id}` ),
  getNames: () => knex.any( `SELECT name FROM topping` ),
  api_update: (id, name, price) => knex.none( `UPDATE topping SET name='${name}', price=${price} WHERE id = ${id}`),
  update: ( id, name = '', price = '' ) => {
          let sql =               `BEGIN TRANSACTION;`
          if (name != '') sql +=  `UPDATE topping SET name='${name}' WHERE id = ${id};`
          if (price != '') sql += `UPDATE topping SET price='${price}' WHERE id = ${id};`
          sql +=                  `COMMIT;`
          knex.none( sql ) },
  delete: id => knex.none( `DELETE FROM topping WHERE id=${id}` )


}

const CustomPizza = {

  add: ( crust_id ) => knex.one( `INSERT INTO custom_pizza ( price ) VALUES ( (SELECT price FROM crust WHERE id = '${crust_id}' ) ) RETURNING id` ),

  addTopping: ( pizza_id, topping_id ) => knex.none( `INSERT INTO pizza_toppings ( pizza_id, topping_id ) VALUES ( ${pizza_id}, ${topping_id} ) ` ),
  addCrust: ( pizza_id, crust_id ) => knex.none( `INSERT INTO pizza_crusts ( pizza_id, crust_id ) VALUES ( ${pizza_id}, ${crust_id} )` ),
  deleteTopping: ( pizza_id, topping_id ) => knex.none( `DELETE FROM pizza_toppings WHERE pizza_id = ${pizza_id} AND topping_id = ${topping_id}` ),
  getAll: () => knex.any(  `SELECT * FROM custom_pizza` ),
  getPrice: pizza_id => knex.one( `SELECT price FROM custom_pizza WHERE id = '${pizza_id}'` ),

  getCrust: pizza_id => knex.oneOrNone( `SELECT name FROM crust JOIN pizza_crusts ON crust.id=pizza_crusts.crust_id WHERE pizza_crusts.pizza_id = ${pizza_id}` ),
  getToppings: pizza_id => knex.any( `SELECT * FROM topping JOIN pizza_toppings ON topping.id = pizza_toppings.topping_id WHERE pizza_toppings.pizza_id = ${pizza_id}` ),

  calcPrice: pizza_id => knex.one(  `UPDATE custom_pizza SET price =
                                  ( SELECT COALESCE(price, CAST(0 AS MONEY)) FROM crust WHERE id = (SELECT crust_id FROM pizza_crusts WHERE pizza_id=${pizza_id}) )
                                    +
                                  ( SELECT COALESCE(SUM(price), CAST(0 AS MONEY)) FROM topping JOIN pizza_toppings ON topping.id = pizza_toppings.topping_id WHERE pizza_toppings.pizza_id = ${pizza_id})
                                  WHERE id = ${pizza_id} RETURNING price` )
}

module.exports = { Crust, Topping, CustomPizza }
