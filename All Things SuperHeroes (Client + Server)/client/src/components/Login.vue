<template>
  <div>
    <h1>Login</h1>
    <br>
    <div class="loginforms">
      <b-field>
        <b-input
          type="username"
          name="username"
          v-model="username"
          placeholder="username"
        ></b-input>
      </b-field>
      <b-field>
        <b-input
          type="password"
          name="password"
          v-model="password"
          placeholder="password"
        ></b-input>
      </b-field>
    </div>
    <div class="error" v-text="error"></div>
    <br>
    <button class="button is-primary" @click="login">Login</button>
  </div>
</template>

<script>
  import authenticationService from '@/services/authenticationService'

  export default {
    name: 'Login',
    methods: {
      async login () {
        try {
          const response = await authenticationService.login({
            username: this.username,
            password: this.password
          })
          this.$store.dispatch('setToken', response.data.token)
          this.$store.dispatch('setUser', response.data.user)
        } catch (error) {
          this.error = error.response.data.error
        }
      }
    },
    data () {
      return {
        username: '',
        password: '',
        error: null
      }
    }
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  .error
  {
    color: red;
  }

  .loginforms
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
