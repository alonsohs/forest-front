<template>
  <div>
    <div class=" mb-6 flex justify-between">
      <h1 class="text-4xl font-semibold tracking-tight ">
        <span class="font-semibold tracking-tight my-12 text-doc-blue-100">Equipos</span></h1>

      <div class="flex space-x-2 justify-center">
        <button type="button" data-bs-toggle="modal" data-bs-target="#exampleModalCenteredScrollable"
                class="inline-block px-6 py-2.5 bg-doc-blue-100 text-white font-medium text-xs leading-tight uppercase rounded shadow-md hover:bg-doc-blue-200 hover:shadow-lg focus:bg-doc-blue-200 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-doc-blue-100 active:shadow-lg transition duration-150 ease-in-out">
          Agregar equipo
        </button>
      </div>
    </div>

    <div class="w-full bg-white rounded-md shadow-md text-center space-y-4 p-4">
      <div class="accordion accordion-flush" id="accordionFlushExample">
        <teams-team-item v-for="(team, i) in teams" :key="team.name + i" :team="team"/>
      </div>
    </div>

    <!--  Add team modal  -->
    <shared-modal-container/>
  </div>
</template>

<script>
export default {
  name: "index",
  components: {},

  layout: 'app',
  data() {
    return {
      teams: [
        {
          id: 1,
          name: 'Equipo Alpha'
        },
        {
          id: 2,
          name: 'Equipo Bravo'
        },
        {
          id: 3,
          name: 'Equipo Charlie'
        },
      ]
    }
  }
}
</script>

<style scoped>

</style>
