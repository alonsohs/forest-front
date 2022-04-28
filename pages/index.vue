<template>
  <div class="w-full bg-white rounded-md shadow-md text-center">
    Hola Mundo

    {{$auth.user}}
    <button @click="userLogout">Logout</button>
  </div>
</template>

<script>
export default {
  name: 'IndexPage',
  layout: 'app',
  methods: {
    userLogout() {
      this.$auth.logout()
    },

  }
}
</script>
