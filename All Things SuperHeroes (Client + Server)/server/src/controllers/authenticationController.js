const db = require('../db')
const mongoose = require('mongoose')
// const CustomHero = mongoose.model('CustomHero')
const User = mongoose.model('User')

const crypto = require('crypto')
const jwt = require('jsonwebtoken')
const config = require('../../theConfigurationInfo')

function signIn (user) {
  const secondsInWeek = 60 * 60 * 24 * 7
  return jwt.sign(user, config.authentication.jwtSecret, {
    expiresIn: secondsInWeek
  })
}

module.exports = {
  register (req, res) {
    if (req.body.username && req.body.password) {
      let user = new User()
      let userPassword = req.body.password
      let hashedPassword = crypto.createHash('md5').update(userPassword).digest('hex')
      user.username = req.body.username
      user.hash = hashedPassword

      user.save(function (err, users) {
        if (err) {
          res.status(400).send({
            error: 'That username is already taken!!'
          })
          console.log(err)
        }
        else {
          const userJSON = {
            'username': req.body.username,
            'hash': hashedPassword
          }
          res.send({
            user: userJSON,
            token: signIn(userJSON)
          })
        }
      })
    }
  },

  login (req, res) {
    if (req.body.username && req.body.password) {
      const username = req.body.username
      const password = req.body.password
      let hashedPassword = crypto.createHash('md5').update(password).digest('hex')

      User.find({username: username, hash: hashedPassword}, function (err, users) {
        if (err) {
          res.status(403).send({
            error: 'Cannot find a user with those credentials'
          })
          console.log(err)
        }
        else {
          const userJSON = {
            'username': username,
            'hash': hashedPassword
          }
          res.send({
            user: userJSON,
            token: signIn(userJSON)
          })
        }
      })
    }
  }
}