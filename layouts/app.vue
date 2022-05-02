<template>
  <div>
    <div class="fixed inset-0 flex z-40 md:hidden" role="dialog" aria-modal="true">
      <div class="fixed inset-0 bg-gray-600 bg-opacity-75" aria-hidden="true" :class="{hidden: !showMenu}"></div>
      <div class="relative flex-1 flex flex-col max-w-xs w-full bg-gray-800" :class="{hidden: !showMenu}">
        <div class="absolute top-0 right-0 -mr-12 pt-2">
          <button @click="toggleMenu" type="button" class="ml-1 flex items-center justify-center h-10 w-10 rounded-full focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white">
            <span class="sr-only">Close sidebar</span>
            <svg class="h-6 w-6 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
        </div>

        <div class="flex-1 h-0 py-8 overflow-y-auto">
          <div class="logo-containers flex items-center px-4 gap-4">
            <div>
              <img class="h-12 w-12" src="@/assets/blue-logo.svg" alt="logo">
            </div>
            <div>
              <img class="w-36" src="@/assets/mediconect.svg" alt="mediconect">
            </div>
          </div>
          <Menu />
        </div>
        <MenuItemProfile name="Fernando" />
      </div>

      <div class="flex-shrink-0 w-14 cursor-pointer" @click="toggleMenu">
        <!-- Force sidebar to shrink to fit close icon -->
      </div>
    </div>

    <!-- Static sidebar for desktop -->
    <div class="hidden md:flex md:w-64 md:flex-col md:fixed md:inset-y-0">
      <!-- Sidebar component, swap this element with another sidebar if you like -->
      <div class="flex-1 flex flex-col min-h-0 bg-gray-800">
        <div class="flex-1 flex flex-col py-8 overflow-y-auto">
          <div class="flex items-center flex-shrink-0 px-4 gap-4">
            <img class="h-12 w-12" src="@/assets/blue-logo.svg" alt="logo">
            <img class="w-36" src="@/assets/mediconect.svg" alt="mediconect">
          </div>
          <Menu />
        </div>
        <MenuItemProfile name="Fernando" />
      </div>
    </div>
    <div class="md:pl-64 flex flex-col flex-1">
      <div class="sticky top-0 z-10 md:hidden pl-1 pt-1 sm:pl-3 sm:pt-3 bg-gray-100 bg-gray-800" >
        <button @click="toggleMenu" type="button" class="-ml-0.5 -mt-0.5 h-12 w-12 inline-flex items-center justify-center rounded-md text-gray-500 hover:text-gray-900 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500">
          <span class="sr-only">Open sidebar</span>
          <svg class="h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16" />
          </svg>
        </button>
      </div>
      <main class="flex-1">
        <div class="py-6">
          <div class="max-w-7xl mx-auto px-4 sm:px-6 md:px-8">
            <!-- Replace with your content -->
            <Nuxt />
            <!-- /End replace -->
          </div>
        </div>
      </main>
    </div>
  </div>
</template>

<script>
export default {
  data(){
    return{
      showMenu: true,
    }
  },
  methods: {
    toggleMenu(){
      this.showMenu = !this.showMenu
    },
  }
}
</script>
