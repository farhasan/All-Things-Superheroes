const authenticationController = require('./controllers/authenticationController')
const authenticationControllerPolicy = require('./policies/authenticationControllerPolicy')
const marvelAPI = require('marvel-api')

const marvel = marvelAPI.createClient({

})

module.exports = function (app) {
  app.post('/register',
    authenticationControllerPolicy.register,
    authenticationController.register
  )
  app.post('/login',
    // authenticationControllerPolicy.login,
    authenticationController.login
  )
  app.get('/characters',


  )
}
