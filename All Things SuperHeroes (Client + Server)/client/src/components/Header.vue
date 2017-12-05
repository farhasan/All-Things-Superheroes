<template>
  <div id="entirenav">
    <nav class="navbar is-transparent">
      <div class="navbar-brand">
        <a class="navbar-item" href="/">
          <h1 id="title" @click="goTo({path: '/'})">All Things Superheroes</h1>
        </a>
      </div>

      <div id="navbarExampleTransparentExample" class="navbar-menu">
        <div class="navbar-start">
          <div class="navbar-item has-dropdown is-hoverable">
            <a class="navbar-link" href="#">
              Search
            </a>
            <div class="navbar-dropdown is-boxed">
              <a class="navbar-item" @click="goTo({path: '/characters'})">
                Characters
              </a>
              <a class="navbar-item" @click="goTo({path: '/series'})">
                Comic Book Series
              </a>
              <a class="navbar-item" @click="goTo({path: '/events'})">
                Event
              </a>
            </div>
          </div>
          <a v-if="!$store.state.isUserLoggedIn" class="navbar-item" @click="goTo({path: '/login'})">
            Login
          </a>
          <a v-if="!$store.state.isUserLoggedIn" class="navbar-item" @click="goTo({path: '/register'})">
            Register
          </a>
          <a v-if="$store.state.isUserLoggedIn" class="navbar-item" @click="goTo({path: '/customheroes'})">
            Create a Custom Hero
          </a>
        </div>

        <div v-if="$store.state.isUserLoggedIn" class="navbar-end">
          <p class="navbar-item">
            Welcome {{$store.state.user.username}}!
          </p>
          <a class="navbar-item" @click="logout">
            Logout
          </a>
        </div>
      </div>
    </nav>
  </div>
</template>

<script>
  import Vue from 'vue'
  import Buefy from 'buefy'
  import 'buefy/lib/buefy.css'

  Vue.use(Buefy)

  export default {
    name: 'app',
    methods: {
      goTo (path) {
        this.$router.push(path)
      },
      logout () {
        this.$store.dispatch('setToken', null)
        this.$store.dispatch('setUser', null)
        this.$router.push({
          path: '/'
        })
      }
    }
  }
</script>

<style scoped>
  #entirenav
  {
    padding-bottom: 50px;
  }

  #title
  {
    font-weight: bold;
    font-size: 2em;
  }
</style>
