<template>
  <div>
    <div class="eventSearch" v-if="!eventExists">
      <h1>Search for an Event</h1>
      <br>
      <b-field>
        <b-input
          type="text"
          name="eventName"
          v-model="eventName"
        ></b-input>
      </b-field>
      <div class="error" v-text="error"></div>
      <br>
      <button class="button is-primary" @click="searchEvent()">Search</button>
      <br><br><br>
    </div>
    <div class="eventInfo" v-if="eventExists">
      <ul v-for="e of event">
        <li><h3>{{ e.title }}</h3></li><br>
        <img v-bind:src="e.thumbnail.path + '.' + e.thumbnail.extension"><br><br>
        <li><h3>{{ e.description }}</h3></li>
        <br><br>
      </ul>
      <h3>To learn more about this event you can check out these links!</h3>
      <ul>
        <li v-for="link of links"><a v-bind:href="link.url">{{ link.url }}</a></li>
      </ul>


      <br><br><br>
      <div class="searchAgain" v-if="eventExists">
        <h2>Search for Another Event</h2>
        <br>
        <b-field>
          <b-input
            type="text"
            name="eventName"
            v-model="eventName"
          ></b-input>
        </b-field>
        <div class="error" v-text="error"></div>
        <br>
        <button class="button is-primary" @click="searchEvent()">Search</button>
        <br><br><br>
      </div>
    </div>
  </div>
</template>

<script>
  import MarvelService from '@/services/MarvelService'

  export default {
    name: 'event',
    data () {
      return {
        event: null,
        eventName: null,
        eventExists: false,
        links: null,
        error: null
      }
    },
    methods: {
      async searchEvent () {
        try {
          console.log(this.eventName)
          const response = await MarvelService.findEvent({
            eventName: this.eventName
          })
          this.event = response['data']
          this.eventExists = true
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

  .eventSearch, .searchAgain
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

  h3
  {
    font-weight: bold;
  }

  .button.is-primary
  {
    background-color: #c10a34;
  }
</style>
