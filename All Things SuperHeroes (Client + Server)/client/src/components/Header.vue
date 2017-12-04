<template>
  <div id="entirenav">
    <nav class="navbar is-transparent">
      <div class="navbar-brand">
        <a class="navbar-item" href="/">
          <h1 id="title">All Things Superheroes</h1>
        </a>
      </div>

      <div id="navbarExampleTransparentExample" class="navbar-menu">
        <div class="navbar-start">
          <div class="navbar-item has-dropdown is-hoverable">
            <a class="navbar-link" href="#">
              Search
            </a>
            <div class="navbar-dropdown is-boxed">
              <a class="navbar-item" href="#">
                Characters
              </a>
              <a class="navbar-item" href="#">
                Comic Book Series
              </a>
              <a class="navbar-item" href="#">
                Comic Book Issue
              </a>
              <a class="navbar-item" href="#">
                Event
              </a>
              <a class="navbar-item" href="#">
                Movie (DC Only)
              </a>
            </div>
          </div>
          <a class="navbar-item" href="/login">
            Login
          </a>
          <a class="navbar-item" href="/register">
            Register
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
    name: 'app'
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
