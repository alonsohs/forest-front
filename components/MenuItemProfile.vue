<template>
  <div class="flex-shrink-0 flex bg-gray-700 p-4 justify-between">
    <a href="#" class="flex-shrink-0 group block">
      <div class="flex items-center">
        <div>
          <img class="inline-block h-10 w-10 rounded-full" src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80" alt="">
        </div>
        <div class="ml-3">
          <p class="text-base font-medium text-white">{{ name }}</p>
          <p class="text-sm font-medium text-gray-400 group-hover:text-gray-300">View profile</p>
        </div>
      </div>
    </a>
    <button @click="userLogout">
      <img src="@/assets/sign-out.svg" class="h-8 w-8" alt="profile picture">
      <!--          <span>cerrar sesión</span>-->
    </button>
  </div>
</template>

<script>
export default {
  props: {
    name: {type:String, default:''},
    image: {type:String, default:''},
  },
  methods: {
    userLogout() {
      this.$auth.logout()
    },
  }
}
</script>

<style scoped>

</style>
