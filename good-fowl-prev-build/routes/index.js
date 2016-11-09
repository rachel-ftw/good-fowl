const express = require('express')
const router = express.Router()
const { Customer } = require('../database/customerDB')

router.get('/', ( request, response ) => {
  Promise.all([ Customer.getAll() ])
  .then( r_customers => {
    response.render( 'opening-page', { customerList: r_customers[0] } )
  })
})

router.get( '/admin', ( request, response ) =>{
  response.render( 'index' )
})


router.get('/api/specialty_pizza', specialty.getAll )
router.get('/api/specialty_pizza/:id', specialty.getOne )
router.post('/api/specialty_pizza', specialty.add )
router.put('/api/specialty_pizza/:id', specialty.update )
router.delete('/api/specialty_pizza/:id', specialty.delete )

router.get('/api/topping', topping.getAll )
router.get('/api/topping/:id', topping.getOne )
router.post('/api/topping', topping.add )
router.put('/api/topping/:id', topping.update )
router.delete('/api/topping/:id', topping.delete )

router.get('/api/crust', crust.getAll )
router.get('/api/crust/:id', crust.getOne )
router.post('/api/crust', crust.add )
router.put('/api/crust/:id', crust.update )
router.delete('/api/crust/:id', crust.delete )

router.get('/api/beverage', beverage.getAll )
router.get('/api/beverage/:id', beverage.getOne )
router.post('/api/beverage', beverage.add )
router.put('/api/beverage/:id', beverage.update )
router.delete('/api/beverage/:id', beverage.delete )

router.get('/api/customer', customer.getAll )
router.get('/api/customer/:id', customer.getOne )
router.post('/api/customer', customer.add )
router.put('/api/customer/:id', customer.update )
router.delete('/api/customer/:id', customer.delete )

module.exports = router
