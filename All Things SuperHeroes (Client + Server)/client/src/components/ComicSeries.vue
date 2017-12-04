<template>
  <div>
    <div class="seriesSearch" v-if="!seriesExists">
      <h1>Search for a Series</h1>
      <br>
      <b-field>
        <b-input
          type="text"
          name="seriesName"
          v-model="seriesName"
        ></b-input>
      </b-field>
      <div class="error" v-text="error"></div>
      <br>
      <button class="button is-primary" @click="searchSeries()">Search</button>
      <br><br><br>
    </div>
    <div class="seriesInfo" v-if="seriesExists">
      <ul v-for="seri of series">
        <li><h3>{{ seri.title }}</h3></li>
        <li><h3>{{ seri.urls.url }}</h3></li>
        <li><h3>{{ seri.startYear }} - {{ seri.endYear }}</h3></li><br>
        <li><h3>{{ seri.type }}</h3></li><br><br>
        <img v-bind:src="seri.thumbnail.path + '.' + seri.thumbnail.extension">
        <br><br>
      </ul>


      <br><br><br>
      <div class="searchAgain" v-if="seriesExists">
        <h2>Search for Another Series</h2>
        <br>
        <b-field>
          <b-input
            type="text"
            name="seriesName"
            v-model="seriesName"
          ></b-input>
        </b-field>
        <div class="error" v-text="error"></div>
        <br>
        <button class="button is-primary" @click="searchSeries()">Search</button>
        <br><br><br>
      </div>
    </div>
  </div>
</template>

<script>
  import MarvelService from '@/services/MarvelService'

  export default {
    name: 'series',
    data () {
      return {
        series: null,
        seriesName: null,
        seriesExists: false,
        error: null
      }
    },
    methods: {
      async searchSeries () {
        try {
          console.log(this.seriesName)
          const response = await MarvelService.findSeries({
            seriesName: this.seriesName
          })
          this.series = response['data']
          this.seriesExists = true
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

  .seriesSearch, .searchAgain
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
