<template>
  <div>
    <div class="creationForms">
      <h2>Create a Custom Hero!</h2>
      <br>
      <h3>Name</h3>
      <b-field>
        <b-input
          type="text"
          name="name"
          v-model="name"
        ></b-input>
      </b-field>
      <h3>Description</h3>
      <b-field>
        <b-input
          type="textarea"
          name="description"
          v-model="description"
        ></b-input>
      </b-field>
      <h3>Image Link</h3>
      <b-field>
        <b-input
          type="text"
          name="image"
          v-model="image"
        ></b-input>
      </b-field>
      <div class="error" v-text="error"></div>
      <br>
      <button class="button is-primary" @click="create()">Create</button>
    </div>
    <div class="heroList">
      <h2>View Your Made Heroes</h2><br>
      <table>
        <tr>
          <th>Name</th>
          <th>Description</th>
          <th>Image</th>
        </tr>
        <tr v-for="hero of customHeroes">
          <td>{{ hero.name }}</td>
          <td>{{ hero.description }}</td>
          <td><img v-bind:src="hero.image"></td>
        </tr>
      </table>
    </div>
  </div>
</template>

<script>
  import customHeroesService from '@/services/customHeroesService'

  export default {
    name: 'customhero',
    data () {
      return {
        customHeroes: null,
        name: null,
        description: null,
        image: null,
        user: this.$store.state.user.username,
        error: null
      }
    },
    async mounted () {
      this.customHeroes = (await customHeroesService.getHeroes({
        user: this.user
      })).data
      console.log(this.customHeroes)
    },
    methods: {
      create () {
        const newCustomHero = {
          name: this.name,
          description: this.description,
          image: this.image,
          user: this.user
        }
        customHeroesService.createHero(newCustomHero)
        window.location = '/customheroes'
      }
    }
  }
</script>

<style scoped>
  .error
  {
    color: red;
  }

  .creationForms
  {
    margin-left: 2em;
    width: 400px;
    float: left;
  }

  h1
  {
    font-size: 2em;
    font-weight: bold;
  }

  h2
  {
    font-size: 1.5em;
    font-weight: bold;
  }

  h3
  {
    font-weight: bold;
  }

  .button.is-primary
  {
    background-color: #c10a34;
  }

  .heroList {
    width: 100%;
  }

  table {
    border-collapse: collapse;
    width: 40%;
    margin: 0 auto;
  }

  td, th {
    border: 1px solid #dddddd;
    text-align: left;
    padding: 8px;
  }

</style>
