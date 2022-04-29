<template>
  <div class="w-full bg-white rounded-md shadow-md text-center space-y-4">
    <div>
      {{$auth.user}}
    </div>
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
