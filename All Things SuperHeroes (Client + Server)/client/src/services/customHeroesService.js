import api from './api'

export default {
  getHeroes () {
    return api().get('customheroes')
  },
  createHero (hero) {
    return api().post('customheroes', hero)
  }
}
