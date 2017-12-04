<template>
  <div>
    <div class="characterSearch" v-if="!characterExists">
      <h1>Search for a Character</h1>
      <br>
      <b-field>
        <b-input
          type="text"
          name="characterName"
          v-model="characterName"
        ></b-input>
      </b-field>
      <div class="error" v-text="error"></div>
      <br>
      <button class="button is-primary" @click="searchCharacter()">Search</button>
      <br><br><br>
    </div>
    <div class="characterInfo" v-if="characterExists">
      <h1>{{name}}</h1><br>
      <img v-bind:src="image"><br><br>
      <h2>{{description}}</h2><br><br>
      <h2>To learn more about this character visit these links!</h2>
      <ul>
        <li v-for="link in links"><a v-bind:href="link.url">{{ link.url }}</a></li>
      </ul>


      <br><br><br>
      <div class="searchAgain" v-if="characterExists">
        <h2>Search for Another Character</h2>
        <br>
        <b-field>
          <b-input
            type="text"
            name="characterName"
            v-model="characterName"
          ></b-input>
        </b-field>
        <div class="error" v-text="error"></div>
        <br>
        <button class="button is-primary" @click="searchCharacter()">Search</button>
        <br><br><br>
      </div>
    </div>
  </div>
</template>

<script>
  import MarvelService from '@/services/MarvelService'

  export default {
    name: 'characters',
    data () {
      return {
        character: null,
        characterName: null,
        characterExists: false,
        name: null,
        description: null,
        links: null,
        image: null,
        error: null
      }
    },
    methods: {
      async searchCharacter () {
        try {
          console.log(this.characterName)
          const response = await MarvelService.findChar({
            characterName: this.characterName
          })
          this.character = response['data']
          this.characterExists = true

          this.name = response['data'][0]['name']
          this.description = response['data'][0]['description']
          this.image = response['data'][0]['thumbnail']['path'] + '.' + response['data'][0]['thumbnail']['extension']
          this.links = response['data'][0]['urls']
        } catch (error) {
          this.error = error.response.data.error
        }
      }
    }
  }
</script>

<style scoped>
  .error
  {
    color: red;
  }

  .characterSearch, .searchAgain
  {
    margin: 2em auto;
    width: 400px;
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

  .button.is-primary
  {
    background-color: #c10a34;
  }
</style>
