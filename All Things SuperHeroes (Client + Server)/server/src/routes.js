const authenticationController = require('./controllers/authenticationController')
const authenticationControllerPolicy = require('./policies/authenticationControllerPolicy')

module.exports = function(app) {
  app.post('/register',
    authenticationControllerPolicy.register,
    authenticationController.register
  )
  app.post('/login',
    // authenticationControllerPolicy.login,
    authenticationController.login
  )
}