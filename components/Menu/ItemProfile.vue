<template>
  <div>
    <div class="p-4">
      <button @click="userLogout" class="text-gray-400 text-sm hover:text-white underline">
        Cerrar sesión
      </button>
    </div>
    <div class="flex-shrink-0 flex bg-gray-700 p-4 justify-between">
      <div class="group block">
        <div class="flex items-center gap-4">
          <div class="flex-shrink-0">
            <img class="inline-block h-14 w-14  rounded-full" src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80" alt="">
          </div>
          <div class="flex-shrink-1">
            <p class="text-base font-medium text-white max-w-full">{{ $auth.user.fullName }}</p>
            <p class="text-sm font-medium text-gray-400">{{ $auth.user.user.role === 'patient' ? 'Paciente' : 'Doctor'}}</p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
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
  .underline:hover {
    text-decoration: underline;
  }
</style>
