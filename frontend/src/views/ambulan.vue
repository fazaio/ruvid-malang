<template>
  <div>
    <menubar />
    <div class="container mx-auto">
      <div class="block md:grid lg:grid xl:grid grid-cols-2 gap-6">
        <div v-for="row in data" :key="row.ambulan">
          <card-ambulance :data="row" />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import CardAmbulance from "../components/cardAmbulance.vue";
import menubar from "../components/menubar.vue";
export default {
  data(){
    return {
      data: ''
    }
  },
  components: { menubar, CardAmbulance },
  created(){
    this.axios.get('/ambulance')
    .then(res => this.data = res.data.data)
    .catch(e => console.log(e))
  }
};
</script>

<style>
</style>