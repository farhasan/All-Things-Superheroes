<template>
  <div id="app">
    <custom_nav></custom_nav>
    <router-view></router-view>
  </div>
</template>

<script>
import Vue from 'vue'
import Header from '@/components/Header'
import Buefy from 'buefy'
import 'buefy/lib/buefy.css'

Vue.use(Buefy)

export default {
  name: 'app',
  components: {
    'custom_nav': Header
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 0;
}

#entirenav
{
  padding-bottom: 50px;
}

#placeholdertitle
{
  font-weight: bold;
  font-size: 2em;
}
</style>
