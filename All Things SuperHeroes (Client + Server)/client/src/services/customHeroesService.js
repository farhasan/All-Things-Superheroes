import api from './api'

export default {
  getHeroes (user) {
    return api().get('customheroes', {
      params: user
    })
  },
  createHero (hero) {
    return api().post('customheroes', hero)
  }
}
