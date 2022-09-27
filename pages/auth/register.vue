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
            <form @submit.prevent="createUser" class="space-y-6">
              <div class="sm:grid sm:grid-cols-3 sm:gap-4 sm:items-start sm:pt-5">
                <label for="first-name" class="block text-sm font-medium text-gray-700 sm:mt-px sm:pt-2"> Nombre </label>
                <div class="input__container mt-1 sm:mt-0 sm:col-span-2">
                  <input v-model="name" type="text"
                         class="input max-w-lg block w-full shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:max-w-xs sm:text-sm border-gray-300 rounded-md">
                </div>
              </div>

              <div class="sm:grid sm:grid-cols-3 sm:gap-4 sm:items-start sm:border-t sm:border-gray-200 sm:pt-5">
                <label for="last-name" class="block text-sm font-medium text-gray-700 sm:mt-px sm:pt-2"> Apellido paterno </label>
                <div class="input__container mt-1 sm:mt-0 sm:col-span-2">
                  <input v-model="fathers_lastname" type="text"
                         class="input max-w-lg block w-full shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:max-w-xs sm:text-sm border-gray-300 rounded-md">
                </div>
              </div>

              <div class="sm:grid sm:grid-cols-3 sm:gap-4 sm:items-start sm:border-t sm:border-gray-200 sm:pt-5">
                <label for="last-name" class="block text-sm font-medium text-gray-700 sm:mt-px sm:pt-2"> Apellido materno </label>
                <div class="input__container mt-1 sm:mt-0 sm:col-span-2">
                  <input v-model="mothers_lastname" type="text"
                         class="input max-w-lg block w-full shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:max-w-xs sm:text-sm border-gray-300 rounded-md">
                </div>
              </div>

              <div class="sm:grid sm:grid-cols-3 sm:gap-4 sm:items-start sm:border-t sm:border-gray-200 sm:pt-5">
                <label for="last-name" class="block text-sm font-medium text-gray-700 sm:mt-px sm:pt-2"> Fecha de nacimiento  </label>
                <div class="input__container mt-1 sm:mt-0 sm:col-span-2">
                  <input v-model="date_of_birth" type="date"
                         class="input max-w-lg block w-full shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:max-w-xs sm:text-sm border-gray-300 rounded-md">
                </div>
              </div>

              <div class="sm:grid sm:grid-cols-3 sm:gap-4 sm:items-start sm:border-t sm:border-gray-200 sm:pt-5">
                <label for="last-name" class="block text-sm font-medium text-gray-700 sm:mt-px sm:pt-2"> Teléfono  </label>
                <div class="input__container mt-1 sm:mt-0 sm:col-span-2">
                  <input v-model="phone" type="tel"
                         class="input max-w-lg block w-full shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:max-w-xs sm:text-sm border-gray-300 rounded-md">
                </div>
              </div>


              <div class="sm:grid sm:grid-cols-3 sm:gap-4 sm:items-start sm:border-t sm:border-gray-200 sm:pt-5">
                <label for="email" class="block text-sm font-medium text-gray-700 sm:mt-px sm:pt-2"> Email  </label>
                <div class="input__container mt-1 sm:mt-0 sm:col-span-2">
                  <input v-model="user.email" type="email"
                         class="input block max-w-lg w-full shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm border-gray-300 rounded-md">
                </div>
              </div>

              <div class="sm:grid sm:grid-cols-3 sm:gap-4 sm:items-start sm:border-t sm:border-gray-200 sm:pt-5">
                <label for="email" class="block text-sm font-medium text-gray-700 sm:mt-px sm:pt-2"> Contraseña  </label>
                <div class="input__container mt-1 sm:mt-0 sm:col-span-2">
                  <input v-model="user.password" type="password"
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
      name: '',
      fathers_lastname: '',
      mothers_lastname: '',
      date_of_birth: '',
      phone: '',
      gender: '',
      user: {
        email: '',
        password: ''
      }
    }
  },
  methods: {
    createUser() {
      const data = {
        name: this.name,
        fathers_lastname: this.fathers_lastname,
        mothers_lastname: this.mothers_lastname,
        date_of_birth: this.date_of_birth,
        phone: this.phone,
        gender: 'Otro',
        user: {
          email: this.user.email,
          password: this.user.password,
        }
      }

      this.$axios.post('/api/v1/patients', data)
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
    height: 100%;
    border: 1px solid #b7b7b7;
    padding: 0 .5rem;
  }

  .input__container {
    height: 100%;
  }
</style>
