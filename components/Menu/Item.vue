<template>
  <NuxtLink :to="to" class="text-white hover:bg-gray-700 group flex items-center px-2 py-3 text-base rounded-md">
    <div class="object-cover w-7 h-7">
      <img class="h-full w-full" :src="require(`@/assets/menu/${image}`)" :alt="alt" />
    </div>
    <span class="ml-5 font-">{{ name }}</span>
  </NuxtLink>
</template>

<script>
export default {
  props: {
    name: {type:String, default:''},
    alt: {type:String, default:''},
    image: {type:String, default:''},
    to: {type:String, default:''},

  },
 data(){
   return{

   }
 }
}
</script>

<style scoped>
  .nuxt-link-exact-active {
    @apply bg-gray-700;
  }
</style>
