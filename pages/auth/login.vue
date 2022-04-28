<template>
  <div class="grid grid-cols-2 h-screen">
    <div class="bg-hero ">
      <h1>Login</h1>
    </div>
    <div>
      <div class="object-cover w-28 h-28">
        <img class="h-full w-full" src="@/assets/blue-logo.svg" >
      </div>
      <span>Login</span>
      <form @submit.prevent="userLogin" class="flex flex-col">
        <input v-model="email" placeholder="Email">
        <input v-model="password" placeholder="Password">
        <button type="submit">Login</button>
      </form>
    </div>
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
.bg-hero{
  background-image: linear-gradient(to top, #160d38, #1a124c, #1c1661, #1c1b76, #19208d, #1736a5, #104cbd, #0062d5, #0088e9, #00a8ed, #00c6ea, #5ce1e6);
}
</style>
