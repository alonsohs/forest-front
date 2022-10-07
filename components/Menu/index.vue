<template>
  <div class="pt-2">
    <nav  class="mt-5 flex-1 px-2 space-y-1">
      <MenuItem name="Inicio" alt="Mi información" image="menu.svg" to="/" />
      <MenuItem name="Equipos" alt="Lector RFID"  image="menu.svg" to="/teams"/>
      <MenuItem name="Proyectos" alt="Lector RFID"  image="menu.svg" to="/inicio"/>
      <MenuItem name="Perfil" alt="Lector RFID"  image="menu.svg" to="/inicio"/>
    </nav>
  </div>
</template>

<script>
export default {
  name: "index"
}
</script>

<style scoped>

</style>
