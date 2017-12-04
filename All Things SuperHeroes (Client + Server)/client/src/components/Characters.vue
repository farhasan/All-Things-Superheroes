<template>
  <div>
    <h1>Search for a Character</h1>
    <br>
    <div class="characterSearch">
      <b-field>
        <b-input
          type="text"
          name="character"
          v-model="character"
        ></b-input>
      </b-field>
    </div>
    <div class="error" v-text="error"></div>
    <br>
    <button class="button is-primary" @click="">Search</button>
  </div>
</template>

<script>
export default {
  name: 'characters'
}
</script>

<style scoped>
  .error
  {
    color: red;
  }

  .characterSearch
  {
    margin: 2em auto;
    width: 400px;
  }

  h1
  {
    font-size: 2em;
    font-weight: bold;
  }

  .button.is-primary
  {
    background-color: #c10a34;
  }
</style>
