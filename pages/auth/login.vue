<template>
  <div class="min-h-screen flex">
    <div class="flex-1 flex flex-col justify-center py-12 px-4 sm:px-6 lg:flex-none lg:px-20 xl:px-24">
      <div class="mx-auto w-full max-w-sm lg:w-96">
        <div>
          <img class="h-20 w-auto" src="@/assets/blue-logo.svg" alt="Workflow" />
          <h2 class="mt-6 text-3xl font-extrabold text-gray-900">INICIO DE SESIÓN</h2>
        </div>

        <div class="mt-8">

          <div class="mt-6">
            <form @submit.prevent="userLogin" class="space-y-6">
              <div>
                <label for="email" class="block text-sm font-medium text-gray-700"> Email </label>
                <div class="mt-1">
                  <input id="email" v-model="email" name="email" type="email" autocomplete="email" required="" class="appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-doc-blue-200 focus:border-doc-blue-200 sm:text-sm" />
                </div>
              </div>

              <div class="space-y-1">
                <label for="password" class="block text-sm font-medium text-gray-700"> Contraseña </label>
                <div class="mt-1">
                  <input id="password" v-model="password" name="password" type="password" autocomplete="current-password" required="" class="appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-doc-blue-200 focus:border-doc-blue-200 sm:text-sm" />
                </div>
              </div>

              <div class="flex items-center justify-between">
                <div class="flex items-center">
                  <input id="remember-me" name="remember-me" type="checkbox" class="h-4 w-4 text-indigo-600 focus:ring-doc-blue-200 border-gray-300 rounded" />
                  <label for="remember-me" class="ml-2 block text-sm text-gray-900"> Mantener sesión iniciada </label>
                </div>
              </div>

              <div>
                <button type="submit" class="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-doc-blue-100 hover:bg-doc-blue-200 transition transition-colors focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-doc-blue-200">Iniciar sesión</button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
    <div class="hidden lg:block relative w-0 flex-1">
      <img class="absolute inset-0 h-full w-full object-cover" src="https://images.unsplash.com/photo-1505904267569-f02eaeb45a4c?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1908&q=80" alt="" />
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
