<template>
  <div>
    <div>
      Doctor ID
      <span>{{ $auth.user.id }}</span>
    </div>
    <div>
      RFID Reader ID
      <span>{{ $auth.user.rfid_reader.id }}</span>
    </div>
    <div>
      Connection status:
      <span>{{ connectionStatus }}</span>
    </div>
    <div>
      Patient:
      <span>{{ patient }}</span>
    </div>
  </div>
</template>

<script>
import {io} from "socket.io-client";

const socket = io('ws://localhost:8000')


export default {
  name: "index",
  layout: 'app',
  data() {
    return {
      connectionStatus: 'Conectando',
      patient: {}
    }
  },
  mounted() {
    const rfidReaderId = this.$auth.user?.rfid_reader?.id

    socket.on('connect', () => {
      this.connectionStatus = 'Conectado'
      console.log('connected to server');
    })

    socket.emit('connected', rfidReaderId)

    socket.on('rfid_read', (patient) => {
      console.log('RFID read')
      console.log(patient)
      this.patient = patient
    })


    socket.on('disconnect', () => {
      this.connectionStatus = 'Desconectado'
      console.log('Socket disconnected');
    })
  },
  updated() {
    const rfidReaderId = this.$auth.user?.rfid_reader?.id
    socket.emit('connected', rfidReaderId)
  }
}
</script>

<style scoped>

</style>
