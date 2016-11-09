var express = require('express');
var router = express.Router();

const beverage = require('../data/beverage')
const specialty = require('../data/specialty_pizza')
const topping = require('../data/topping')
const crust = require('../data/crust')
const customer = require('../data/customer')


/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

router.get('/beverage', beverage.getAll )
router.get('/beverage/:id', beverage.getOne )
router.post('/beverage', beverage.add )
router.put('/beverage/:id', beverage.update )
router.delete('/beverage/:id', beverage.delete )

router.get('/specialty', specialty.getAll )
router.get('/specialty/:id', specialty.getOne )
router.post('/specialty', specialty.add )
router.put('/specialty/:id', specialty.update )
router.delete('/specialty/:id', specialty.delete )

router.get('/topping', topping.getAll )
router.get('/topping/:id', topping.getOne )
router.post('/topping', topping.add )
router.put('/topping/:id', topping.update )
router.delete('/topping/:id', topping.delete )

router.get('/crust', crust.getAll )
router.get('/crust/:id', crust.getOne )
router.post('/crust', crust.add )
router.put('/crust/:id', crust.update )
router.delete('/crust/:id', crust.delete )

router.get('/customer', customer.getAll )
router.get('/customer/:id', customer.getOne )
router.post('/customer', customer.add )
router.put('/customer/:id', customer.update )
router.delete('/customer/:id', customer.delete )




module.exports = router;
