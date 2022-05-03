<template>
  <main class="flex place-content-center p-8">
    <div class="container rounded-md shadow-lg p-8 space-y-6 sm:space-y-5">
      <div class="bg-white py-5 border-b border-gray-200 ">
        <h3 class="text-lg leading-6 font-medium text-gray-900">Agregar un doctor</h3>
      </div>
      <div class="sm:grid sm:grid-cols-3 sm:gap-4 sm:items-start sm:pt-5">
        <label for="first-name" class="block text-sm font-medium text-gray-700 sm:mt-px sm:pt-2"> Cédula profesional </label>
        <div class="mt-1 sm:mt-0 sm:col-span-2">
          <input v-model="professionalId" type="text"
                 class="max-w-lg block w-full shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:max-w-xs sm:text-sm border-gray-300 rounded-md">
        </div>
      </div>
      <div class="sm:grid sm:grid-cols-3 sm:gap-4 sm:items-start sm:pt-5">
        <label for="first-name" class="block text-sm font-medium text-gray-700 sm:mt-px sm:pt-2"> Nombre </label>
        <div class="mt-1 sm:mt-0 sm:col-span-2">
          <input v-model="name" type="text"
                 class="max-w-lg block w-full shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:max-w-xs sm:text-sm border-gray-300 rounded-md">
        </div>
      </div>

      <div class="sm:grid sm:grid-cols-3 sm:gap-4 sm:items-start sm:border-t sm:border-gray-200 sm:pt-5">
        <label for="last-name" class="block text-sm font-medium text-gray-700 sm:mt-px sm:pt-2"> Apellido paterno </label>
        <div class="mt-1 sm:mt-0 sm:col-span-2">
          <input v-model="fathers_lastname" type="text"
                 class="max-w-lg block w-full shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:max-w-xs sm:text-sm border-gray-300 rounded-md">
        </div>
      </div>

      <div class="sm:grid sm:grid-cols-3 sm:gap-4 sm:items-start sm:border-t sm:border-gray-200 sm:pt-5">
        <label for="last-name" class="block text-sm font-medium text-gray-700 sm:mt-px sm:pt-2"> Apellido materno </label>
        <div class="mt-1 sm:mt-0 sm:col-span-2">
          <input v-model="mothers_lastname" type="text"
                 class="max-w-lg block w-full shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:max-w-xs sm:text-sm border-gray-300 rounded-md">
        </div>
      </div>

      <div class="sm:grid sm:grid-cols-3 sm:gap-4 sm:items-start sm:border-t sm:border-gray-200 sm:pt-5">
        <label for="last-name" class="block text-sm font-medium text-gray-700 sm:mt-px sm:pt-2"> Fecha de nacimiento  </label>
        <div class="mt-1 sm:mt-0 sm:col-span-2">
          <input v-model="date_of_birth" type="date"
                 class="max-w-lg block w-full shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:max-w-xs sm:text-sm border-gray-300 rounded-md">
        </div>
      </div>

      <div class="sm:grid sm:grid-cols-3 sm:gap-4 sm:items-start sm:border-t sm:border-gray-200 sm:pt-5">
        <label for="last-name" class="block text-sm font-medium text-gray-700 sm:mt-px sm:pt-2"> Teléfono  </label>
        <div class="mt-1 sm:mt-0 sm:col-span-2">
          <input v-model="phone" type="tel"
                 class="max-w-lg block w-full shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:max-w-xs sm:text-sm border-gray-300 rounded-md">
        </div>
      </div>

      <div class="sm:grid sm:grid-cols-3 sm:gap-4 sm:items-start sm:border-t sm:border-gray-200 sm:pt-5">
        <label for="last-name" class="block text-sm font-medium text-gray-700 sm:mt-px sm:pt-2"> Foto de perfil  </label>
        <div class="mt-1 sm:mt-0 sm:col-span-2">
          <input @change="setImage" type="file"
                 class="max-w-lg block w-full shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:max-w-xs sm:text-sm border-gray-300 rounded-md">
        </div>
      </div>

      <div class="sm:grid sm:grid-cols-3 sm:gap-4 sm:items-start sm:border-t sm:border-gray-200 sm:pt-5">
        <label for="email" class="block text-sm font-medium text-gray-700 sm:mt-px sm:pt-2"> Email  </label>
        <div class="mt-1 sm:mt-0 sm:col-span-2">
          <input v-model="user.email" type="email"
                 class="block max-w-lg w-full shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm border-gray-300 rounded-md">
        </div>
      </div>

      <div class="sm:grid sm:grid-cols-3 sm:gap-4 sm:items-start sm:border-t sm:border-gray-200 sm:pt-5">
        <label for="email" class="block text-sm font-medium text-gray-700 sm:mt-px sm:pt-2"> Contraseña  </label>
        <div class="mt-1 sm:mt-0 sm:col-span-2">
          <input v-model="user.password" type="password"
                 class="block max-w-lg w-full shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm border-gray-300 rounded-md">
        </div>
      </div>
      <div class="sm:grid sm:grid-cols-3 sm:gap-4 sm:items-start sm:border-t sm:border-gray-200 sm:pt-5">
        <button type="button"
                @click="createUser"
                class="inline-flex max-w-max items-center px-3 py-2 border border-transparent text-sm leading-4 font-medium rounded-md shadow-sm text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">
          Create Doctor
        </button>
      </div>
      <div class="sm:grid sm:grid-cols-3 sm:gap-4 sm:items-start sm:border-t sm:border-gray-200 sm:pt-5">
        <button type="button"
                @click="uploadImage"
                class="inline-flex max-w-max items-center px-3 py-2 border border-transparent text-sm leading-4 font-medium rounded-md shadow-sm text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">
          Upload image
        </button>
      </div>
    </div>
  </main>
</template>

<script>
export default {
  name: "create-doctor",
  data() {
    return {
      professionalId: '',
      name: '',
      fathers_lastname: '',
      mothers_lastname: '',
      date_of_birth: '',
      phone: '',
      profileImage: '',
      user: {
        email: '',
        password: ''
      }
    }
  },
  methods: {
    createUser() {
      const formdata = new FormData()
      formdata.append('professionalId', this.professionalId)
      formdata.append('name', this.name)
      formdata.append('fathers_lastname', this.fathers_lastname)
      formdata.append('mothers_lastname', this.mothers_lastname)
      formdata.append('date_of_birth', this.date_of_birth)
      formdata.append('phone', this.phone)

      if (this.profileImage) {
        console.log(this.profileImage)
        formdata.append('profileImage', this.profileImage)
      }
      const user = JSON.stringify({
        email: this.user.email,
        password: this.user.password,
      })
      formdata.append('user', user)

      this.$axios.post('/api/v1/doctors', formdata)
    },
    uploadImage() {
      const formdata = new FormData()
      formdata.append('image', this.profileImage)
      this.$axios.post('/api/v1/upload/image', formdata)
        .then(res => console.log(res))
        .catch(err => console.log(err))
    },
    setImage(e) {
      const file = e.target.files[0]
      const reader = new FileReader()
      reader.readAsDataURL(file)
      reader.onloadend = () => {
        this.profileImage = reader.result
      }
    }
  }
}
</script>

<style scoped>

</style>
