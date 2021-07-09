<template>
  <div>
    <menubar />
    <div class="container mx-auto">
      <div class="block md:grid lg:grid xl:grid grid-cols-2 gap-6">
        <div v-for="row in data" :key="row.name">
          <card-oksigen :data="row" />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import CardOksigen from '../components/cardOksigen.vue';
import menubar from '../components/menubar.vue';
export default {
  data(){
    return {
      data: ''
    }
  },
  components: { 
    menubar, 
    CardOksigen 
  },
  created(){
    this.axios.get('/oksigen')
    .then(res => this.data = res.data.data)
    .catch(e => console.log(e))
  }
};
</script>

<style>
</style>