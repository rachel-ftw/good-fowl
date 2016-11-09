const passport = require('passport')
const LocalStrategy = require('passport-local').Strategy
const Account = require('./data/account').account

const paramsOptions = {
  usernameField: 'username'
}

const strategy = new LocalStrategy(
  paramsOptions, (username, password, done) => {
  Account.getOneByUsername(username)
    .then( user => {
      if( user === null || user.password != password) {
        done( null, false, { message: "Incorrect username or password."})
      } else {
        done(null, user)
      }
    })
    .catch( error => done( err ))
})

passport.use( strategy )

passport.serializeUser ( (user, done)  => done( null, user.id ) )

passport.deserializeUser ( (id, done)  => {
  Account.getOneById( id )
    .then( user => done( null, user) )
    .catch( error => done( error,  null ))
})

module.exports = passport