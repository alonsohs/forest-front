<template>
  <a :href="to" class="text-gray-300 hover:bg-gray-700 hover:text-white group flex items-center px-2 py-2 text-base font-medium rounded-md">
    <div class="object-cover w-5 h-5">
      <img class="h-full w-full" :src="require(`@/assets/menu/${image}`)" :alt="alt" />
    </div>
    <span class="ml-2">{{ name }}</span>
  </a>
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

</style>
