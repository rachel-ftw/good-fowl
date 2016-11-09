var express = require('express');
var router = express.Router();

const account = require('../data/account')
const passport = require('../passport')

const authOptions = {
  successRedirect: '/',
  failureRedirect: '/accounts/login'
}

router.post( '/login' , passport.authenticate( 'local'), ( req, res) =>{
  const username = req.body.username
  if( req.username !== undefined && req.user.id == id ) {
    account.getOneByUsername( username )
    .then( result => {
      return console.log('oh hai')
  })
})

router.get( '/logout', ( req, res ) => {
  req.logout()
  res.redirect( '/')
})

router.get('/', account.getAll )
router.get('/id/:id', account.getOneById)
router.get('/:username', account.getOneByUsername )
router.post('/', account.add )
router.put('/:id', account.update )
router.delete('/:id', account.delete )

module.exports = router;