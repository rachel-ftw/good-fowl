const knex = require('./mainDB')

const Transaction = {

  getAll: () => knex.any( `SELECT * FROM transaction` ),
  getById: transaction_id => knex.one( `SELECT * FROM transaction WHERE id = ${transaction_id}` ),

  new: ( order_id ) => knex.one( `INSERT INTO transaction ( order_id ) VALUES ( ${order_id} ) RETURNING id` ),
  bindCustomer: ( customer_id, transaction_id ) => knex.none( `INSERT INTO customer_transactions ( customer_id, transaction_id ) VALUES ( ${customer_id}, ${transaction_id} )` ),
  pay: ( transaction_id, payment_id ) => {
      knex.none( `BEGIN TRANSACTION;
                INSERT INTO transaction_payments ( transaction_id, payment_id ) VALUES ( ${transaction_id}, ${payment_id} );
                UPDATE transaction SET date=LOCALTIMESTAMP WHERE id=${transaction_id};
                COMMIT;` )}
}

module.exports = Transaction
