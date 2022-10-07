<template>
  <div class="min-h-screen flex">

    <div class="flex-1 flex flex-col justify-center py-12 px-4 sm:px-6 lg:flex-none lg:px-20 xl:px-24">
      <div class="mx-auto w-full max-w-sm lg:w-96">
        <div>
<!--          <img class="h-20 w-auto" src="@/assets/logo.png" alt="Workflow" />-->
          <h2 class="mt-6 text-3xl font-extrabold text-gray-900">REGISTRARSE</h2>
          <P class="mt-4">Crea una nueva cuenta para comenzar a crear grandes proyectos de reforestación.</P>
        </div>

        <div class="mt-8">

          <div class="mt-6">
            <form @submit.prevent="createUser" class="space-y-4">
              <div class="grid sm:gap-2 sm:items-start sm:pt-2">
                <label for="first-name" class="block text-sm font-medium text-gray-700 sm:mt-px sm:pt-2"> Nombre de Usuario </label>
                <div class="input__container mt-1 sm:mt-0 sm:col-span-2">
                  <input v-model="username" type="text"
                         class="input max-w-lg block w-full shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:max-w-xs sm:text-sm border-gray-300 rounded-md">
                </div>
              </div>

              <div class="grid sm:gap-2 sm:items-start sm:border-t sm:border-gray-200 ">
                <label for="first-name" class="block text-sm font-medium text-gray-700 sm:mt-px sm:pt-2"> Nombre </label>
                <div class="input__container mt-1 sm:mt-0 sm:col-span-2">
                  <input v-model="name" type="text"
                         class="input max-w-lg block w-full shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:max-w-xs sm:text-sm border-gray-300 rounded-md">
                </div>
              </div>

              <div class="grid sm:gap-2 sm:items-start sm:border-t sm:border-gray-200 ">
                <label for="last-name" class="block text-sm font-medium text-gray-700 sm:mt-px sm:pt-2"> Apellidos </label>
                <div class="input__container mt-1 sm:mt-0 sm:col-span-2">
                  <input v-model="last_name" type="text"
                         class="input max-w-lg block w-full shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:max-w-xs sm:text-sm border-gray-300 rounded-md">
                </div>
              </div>

              <div class="grid sm:gap-2 sm:items-start sm:border-t sm:border-gray-200 ">
                <label for="last-name" class="block text-sm font-medium text-gray-700 sm:mt-px sm:pt-2"> Fecha de nacimiento  </label>
                <div class="input__container mt-1 sm:mt-0 sm:col-span-2">
                  <input v-model="date_of_birth" type="date"
                         class="input max-w-lg block w-full shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:max-w-xs sm:text-sm border-gray-300 rounded-md">
                </div>
              </div>

              <div class="grid sm:gap-2 sm:items-start sm:border-t sm:border-gray-200 ">
                <label for="last-name" class="block text-sm font-medium text-gray-700 sm:mt-px sm:pt-2"> Teléfono  </label>
                <div class="input__container mt-1 sm:mt-0 sm:col-span-2">
                  <input v-model="phone" type="tel"
                         class="input max-w-lg block w-full shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:max-w-xs sm:text-sm border-gray-300 rounded-md">
                </div>
              </div>


              <div class="grid sm:gap-2 sm:items-start sm:border-t sm:border-gray-200 ">
                <label for="email" class="block text-sm font-medium text-gray-700 sm:mt-px sm:pt-2"> Email  </label>
                <div class="input__container mt-1 sm:mt-0 sm:col-span-2">
                  <input v-model="user.email" type="email"
                         class="input block max-w-lg w-full shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm border-gray-300 rounded-md">
                </div>
              </div>

              <div class="grid sm:gap-2 sm:items-start sm:border-t sm:border-gray-200 ">
                <div>
                  <label for="email" class="block text-sm font-medium text-gray-700 sm:mt-px sm:pt-2"> Contraseña
                    <a data-bs-toggle="tooltip" data-bs-placement="top" title="La contraseña debe tener al menos 8 caracteres y al menos un número y un caracter especial" type="button"><svg class="ml-2 w-4 h-4 text-gray-400 hover:text-gray-500" aria-hidden="true" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-8-3a1 1 0 00-.867.5 1 1 0 11-1.731-1A3 3 0 0113 8a3.001 3.001 0 01-2 2.83V11a1 1 0 11-2 0v-1a1 1 0 011-1 1 1 0 100-2zm0 8a1 1 0 100-2 1 1 0 000 2z" clip-rule="evenodd"></path></svg><span class="sr-only">Show information</span></a>
                  </label>
                </div>
                <div class="input__container mt-1 sm:mt-0 sm:col-span-2">
                  <input v-model="user.password" type="password"
                         class="input block max-w-lg w-full shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm border-gray-300 rounded-md">
                </div>
              </div>
              <div class="grid sm:gap-2 sm:items-start sm:border-t sm:border-gray-200 ">
                <label for="email" class="block text-sm font-medium text-gray-700 sm:mt-px sm:pt-2"> Confirmar Contraseña  </label>
                <div class="input__container mt-1 sm:mt-0 sm:col-span-2">
                  <input v-model="user.confirmPassword" type="password"
                         class="input block max-w-lg w-full shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm border-gray-300 rounded-md">
                </div>
              </div>
              <hr>
              <div>
                <button type="submit" class="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-doc-blue-100 hover:bg-doc-blue-200 transition transition-colors focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-doc-blue-200">Registrarse</button>
                <hr class="my-4">
                <NuxtLink to="/auth/login" type="submit" class="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-doc-blue-100  border border-doc-blue-100 hover:bg-doc-blue-200 transition transition-colors focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-doc-blue-200 hover:text-white" >Iniciar Sesión</NuxtLink>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
    <div class="hidden lg:block relative w-0 flex-1">
      <img class="absolute inset-0 h-full w-full object-cover" src="@/assets/reforestation.jpg" alt="" />
    </div>
  </div>
</template>

<script>

export default {
  auth: "guest",
  components: {},
  data() {
    return {
      username: '',
      name: '',
      last_name: '',
      mothers_lastname: '',
      date_of_birth: '',
      phone: '',
      gender: '',
      user: {
        email: '',
        password: '',
        confirmPassword: '',
      }
    }
  },
  methods: {
    createUser() {
      const data = {
        username: this.username,
        name: this.name,
        last_name: this.last_name,
        date_of_birth: this.date_of_birth,
        phone: this.phone,
        gender: 'Otro',
        email: this.user.email,
        password: this.user.password,
      }

      this.$axios.post('/api/register', data)
        .then(() => {
          this.userLogin()
        })
    },

    userLogin() {
      this.$auth.loginWith('local', {
        data: {
          email: this.user.email,
          password: this.user.password
        }
      })
        .then(res => this.$router.push('/'))
        .catch(err => console.log(err))
    },
  },
}
</script>

<style scoped>
  .input {
    height: 2rem;
    border: 1px solid #b7b7b7;
    padding: 0 .5rem;
  }

  .input__container {
    height: 100%;
  }
</style>
