const authenticationController = require('./controllers/authenticationController')
const authenticationControllerPolicy = require('./policies/authenticationControllerPolicy')
const charactersController = require('./controllers/CharactersController')

module.exports = function (app) {
  app.post('/register',
    authenticationControllerPolicy.register,
    authenticationController.register
  )
  app.post('/login',
    // authenticationControllerPolicy.login,
    authenticationController.login
  )
  app.post('/characters', charactersController.findChar)
}
