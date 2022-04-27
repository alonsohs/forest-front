<template>
  <div class="">
    <span>Login</span>
    <form @submit.prevent="userLogin" class="flex flex-col">
      <input v-model="email" placeholder="Email">
      <input v-model="password" placeholder="Password">
      <button type="submit">Login</button>
    </form>
  </div>
</template>

<script>

export default {
  components: {},
  data() {
    return {
      email: '',
      password: ''
    }
  },
  methods: {
    userLogin() {
      this.$auth.loginWith('local', {
        data: {
          email: this.email,
          password: this.password
        }
      })
        .then(res => console.log('Exitooooo', res))
        .catch(err => console.log(err))
    },
  },
}
</script>

<style scoped>

</style>
