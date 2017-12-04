<template>
  <div>
    <h1>Welcome!</h1><br>
    <h2>This is a Comic Book Encyclopedia drawing data from Marvel and DC APIs.</h2>
    <h2>On the client's side, Vue.js is being used along with the frontend framework Buefy</h2>
    <h2>On the backend, this is using Express and MongoDB in addition to multiple frameworks such as Joi for user validation, </h2>
    <br><br>

    <h2>Try selecting one of the search options above to search for something cool!</h2>
    <h2>You can also register, that way you can create your own custom hero!</h2>
    <br><br><br><br>
    <h2>Farhan Hasan</h2>
  </div>
</template>

<script>
  export default {
    name: 'welcome',
    data () {
      return {}
    }
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  h1 {
    font-weight: bold;
    font-size: 1.5em;
  }
  ul {
    list-style-type: none;
    padding: 0;
  }
  li {
    display: inline-block;
    margin: 0 10px;
  }
  a {
    color: #42b983;
  }
</style>
