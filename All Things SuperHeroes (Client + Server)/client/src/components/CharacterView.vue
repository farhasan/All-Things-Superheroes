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
    <div class="characterInfo">
      <h1>{{character}}</h1>
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
    name: 'characterview',
    data () {
      return {
        character: null,
        characterName: null,
        characterExists: false,
        error: null
      }
    },
    methods: {

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
