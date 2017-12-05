const authenticationController = require('./controllers/authenticationController')
const authenticationControllerPolicy = require('./policies/authenticationControllerPolicy')
const marvelController = require('./controllers/MarvelController')
const customHeroesController = require('./controllers/CustomHeroesController')

module.exports = function (app) {
  app.post('/register',
    authenticationControllerPolicy.register,
    authenticationController.register
  )
  app.post('/login',
    // authenticationControllerPolicy.login,
    authenticationController.login
  )
  app.post('/characters', marvelController.findChar)
  app.post('/series', marvelController.findSeries)
  app.post('/events', marvelController.findEvent)

  app.get('/customheroes', customHeroesController.listHeroes)
  app.post('/customheroes', customHeroesController.createHeroes)
}
