<template>
  <div class="w-full bg-white rounded-md shadow-md text-center space-y-4 p-4">
    <div>
      <h1 class="text-5xl font-semibold tracking-tight my-12">Bienvenid@
        <span class="text-5xl font-semibold tracking-tight my-12 text-doc-blue-100">{{ $auth.user.name }}</span></h1>

    </div>
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
