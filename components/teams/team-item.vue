<template>

  <div class="accordion-item bg-white border border-gray-200">
    <h2 class="accordion-header mb-0" :id="`headingOne5-${team.id}`">
      <button class="
        accordion-button
        relative
        flex
        items-center
        w-full
        py-4
        px-5
        text-md uppercase font-bold text-gray-800 text-left
        bg-white
        border-0
        rounded-none
        transition
        focus:outline-none
      " type="button" data-bs-toggle="collapse" :data-bs-target="`#collapseOne5-${team.id}`" aria-expanded="false"
              :aria-controls="`collapseOne5-${team.id}`">
        {{ team.name }}
      </button>
    </h2>
    <div :id="`collapseOne5-${team.id}`" class="accordion-collapse collapse show" :aria-labelledby="`headingOne5-${team.id}`">
      <div class="accordion-body py-4 px-5">
        <div class="flex flex-col">
          <div class="overflow-x-auto sm:-mx-6 lg:-mx-8">
            <div class="py-2 inline-block min-w-full sm:px-6 lg:px-8">
              <div class="overflow-hidden">
                <table class="min-w-full text-left">
                  <thead class="bg-white border-b">
                  <tr>
                    <th scope="col" class="text-sm font-medium text-gray-900 px-6 py-4 text-left">
                      Nombre
                    </th>
                    <th scope="col" class="text-sm font-medium text-gray-900 px-6 py-4 text-left">
                      Cargo
                    </th>
                    <th scope="col" class="text-sm font-medium text-gray-900 px-6 py-4 text-left">
                      Correo
                    </th>
                    <th scope="col" class="text-sm font-medium text-gray-900 px-6 py-4 text-left">
                      Telefono
                    </th>
                    <th scope="col" class="text-sm font-medium text-gray-900 px-6 py-4 text-left">

                    </th>
                  </tr>
                  </thead>
                  <tbody>
                  <tr v-for="row in tableData" class=" bg-white border-b transition duration-300 ease-in-out hover:bg-gray-100">
                    <td class="text-sm text-gray-900 font-medium  px-6 py-4 whitespace-nowrap">
                      {{ row.name }}
                    </td>
                    <td class="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
                      {{ row.role }}
                    </td>
                    <td class="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
                      {{ row.email }}
                    </td>
                    <td class="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
                      {{ row.phone }}
                    </td>
                    <td class=" py-4 whitespace-nowrap text-sm text-gray-900">
                     <div class="flex justify-end">
                       <button class="inline-flex items-center justify-center w-10 h-10 mr-2 text-gray-700 transition-colors duration-150 bg-white rounded-full focus:shadow-outline hover:bg-gray-200">
                         <svg class="w-4 h-4 fill-current" viewBox="0 0 20 20"><path d="M13.586 3.586a2 2 0 112.828 2.828l-.793.793-2.828-2.828.793-.793zM11.379 5.793L3 14.172V17h2.828l8.38-8.379-2.83-2.828z"></path></svg>
                       </button>
                       <button class="inline-flex items-center justify-center w-10 h-10 mr-2 text-gray-700 transition-colors duration-150 bg-white rounded-full focus:shadow-outline hover:bg-gray-200">
                         <svg xmlns="http://www.w3.org/2000/svg"  class="w-4 h-4 fill-current" viewBox="0 0 24 24"><path d="M9 19c0 .552-.448 1-1 1s-1-.448-1-1v-10c0-.552.448-1 1-1s1 .448 1 1v10zm4 0c0 .552-.448 1-1 1s-1-.448-1-1v-10c0-.552.448-1 1-1s1 .448 1 1v10zm4 0c0 .552-.448 1-1 1s-1-.448-1-1v-10c0-.552.448-1 1-1s1 .448 1 1v10zm5-17v2h-20v-2h5.711c.9 0 1.631-1.099 1.631-2h5.315c0 .901.73 2 1.631 2h5.712zm-3 4v16h-14v-16h-2v18h18v-18h-2z"/></svg>
                       </button>
                     </div>
                    </td>

                  </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>

</template>

<script>
export default {
  name: "team-item",
  props: {
    team: Object
  },
  data() {
    return {
      tableData: [
        {
          name: 'Omar Valencia',
          role: 'Supervisor',
          email: 'omar@email.com',
          phone: '2461345672'
        },{
          name: 'Valeria Luna',
          role: 'Sembrador',
          email: 'luna@email.com',
          phone: '2461974676'
        },{
          name: 'Alexandro Rivera',
          role: 'Sembrador',
          email: 'alex@email.com',
          phone: '24678746523'
        },{
          name: 'Ximena Chacon',
          role: 'Sembrador',
          email: 'Ximena@email.com',
          phone: '24613456478'
        },
      ]
    }
  }
}
</script>

<style >

.accordion-button:not(.collapsed) {
  color: #177207;
}

</style>
