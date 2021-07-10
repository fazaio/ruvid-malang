<template>
  <div>
    <menubar />
    <div class="container mx-auto">
      <div class="block md:grid lg:grid xl:grid grid-cols-2 gap-6">
        <div v-for="row in data" :key="row.name">
          <card-oksigen :data="row" />
        </div>
      </div>
        <div class="mt-3 px-4 py-2 mx-4 bg-white">
        <b class="text-red-400">Penting!</b>
        <div>
          <div class="mt-2">
            Data Diatas Dapat <b>Berubah</b> sewaktu-waktu, cek pada halaman resmi
          untuk informasi lebih lanjut. <br />
          <div class="mt-2">
            <a href="https://www.google.com/search?q=isi+ulang+oksigen+malang"><b>Sumber Data:</b> https://www.google.com/search?q=isi+ulang+oksigen+malang/</a>
          </div>
          </div>
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