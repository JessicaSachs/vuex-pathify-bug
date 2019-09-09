<template>
  <div>
    <input v-model="parkingLot">
    {{ parkingLot }}
  </div>
</template>

<script>
import MyParkingLotStore from '~/store/reusable/parkingLotStore'
import { get, sync, call, registerModule } from 'vuex-pathify'

const members = function () {
  return {
    computed: {
      parkingLot: sync('parks/theParkingLot/parkingLot')
    },
  }
}

export default {
  computed: {
    ...get('parks/*'),
    ...sync('parks/penguins@*'),
    // parkingLot: get('parks/parkingLot/parkingLot'),
    // parkingLot: sync('parks/parkingLot/parkingLot'), // doesn't work
  },
  beforeCreate() {
    // console.log('PARKING LOT STORE', MyParkingLotStore);
    registerModule('parks/theParkingLot', MyParkingLotStore, members)

    console.log('THIS IS MY STORE', this.$store);
  },
  created() {
  }
}
</script>

<style>
.container {
  margin: 0 auto;
  min-height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
}

.title {
  font-family: 'Quicksand', 'Source Sans Pro', -apple-system, BlinkMacSystemFont,
    'Segoe UI', Roboto, 'Helvetica Neue', Arial, sans-serif;
  display: block;
  font-weight: 300;
  font-size: 100px;
  color: #35495e;
  letter-spacing: 1px;
}

.subtitle {
  font-weight: 300;
  font-size: 42px;
  color: #526488;
  word-spacing: 5px;
  padding-bottom: 15px;
}

.links {
  padding-top: 15px;
}
</style>
