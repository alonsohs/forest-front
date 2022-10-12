<template>
  <div class="modal fade fixed top-0 left-0 hidden w-full h-full outline-none overflow-x-hidden overflow-y-auto" id="exampleModalCenteredScrollable" tabindex="-1" aria-labelledby="exampleModalCenteredScrollable" aria-modal="true" role="dialog">
    <div class="modal-dialog modal-dialog-centered modal-dialog-scrollable relative w-auto pointer-events-none">
      <div class="modal-content border-none shadow-lg relative flex flex-col w-full pointer-events-auto bg-white bg-clip-padding rounded-md outline-none text-current">
        <div class="modal-header flex flex-shrink-0 items-center justify-between p-4 border-b border-gray-200 rounded-t-md">
          <h5 class="text-xl font-medium leading-normal text-gray-800" id="exampleModalCenteredScrollableLabel">
            NUEVO EQUIPO
          </h5>
          <button type="button"
                  class="btn-close box-content w-4 h-4 p-1 text-black border-none rounded-none opacity-50 focus:shadow-none focus:outline-none focus:opacity-100 hover:text-black hover:opacity-75 hover:no-underline"
                  data-bs-dismiss="modal" aria-label="Close"></button>
        </div>
        <div class="modal-body relative p-4">
          <div class="grid sm:gap-2 sm:items-start sm:border-t sm:border-gray-200 ">
            <label for="first-name" class="block text-sm font-medium text-gray-700 sm:mt-px sm:pt-2"> Nombre </label>
            <div class="input__container mt-1 sm:mt-0 sm:col-span-2">
              <input
                type="text"
                class="
                    form-control
                    block
                    w-full
                    px-3
                    py-1.5
                    text-base
                    font-normal
                    text-gray-700
                    bg-white bg-clip-padding
                    border border-solid border-gray-300
                    rounded
                    transition
                    ease-in-out
                    m-0
                    focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none
                  "
                id="exampleText0"
              />
            </div>
          </div>

          <div class="grid sm:gap-2 sm:items-start sm:border-t sm:border-gray-200 ">
            <label for="last-name" class="block text-sm font-medium text-gray-700 sm:mt-px sm:pt-2"> Organización </label>
            <div class="input__container mt-1 sm:mt-0 sm:col-span-2">
              <input
                type="text"
                class="
                  form-control
                  block
                  w-full
                  px-3
                  py-1.5
                  text-base
                  font-normal
                  text-gray-700
                  bg-white bg-clip-padding
                  border border-solid border-gray-300
                  rounded
                  transition
                  ease-in-out
                  m-0
                  focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none
                "
                id="exampleText0"
              />
            </div>
          </div>
        </div>
        <div
          class="modal-footer flex flex-shrink-0 flex-wrap items-center justify-end p-4 border-t border-gray-200 rounded-b-md">
          <button type="button"
                  class="inline-block px-6 py-2.5 bg-doc-blue-100 text-white font-medium text-xs leading-tight uppercase rounded shadow-md hover:bg-doc-blue-200 hover:shadow-lg focus:bg-doc-blue-200 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-doc-blue-100 active:shadow-lg transition duration-150 ease-in-out">
            Guardar
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "modal-container"
}
</script>

<style scoped>

  .modal {
    background: rgba(0,0,0,.4);
  }

</style>
