<template>
<section id="section-oksigen-malang" class="px-8 mt-8 md:mx-24">
  <h2 class="pt-2 text-lg font-bold">Layanan Isi Ulang Oksigen Malang</h2>
    <section
      id="oksigen-card-group"
      class="mt-8 grid gap-6 grid-flow-row grid-cols-1 md:grid-cols-2 lg:grid-cols-4"
    >
      <card-oksigen v-for="row in data" :key="row.name" :data="row" />
    </section>
    <section
      id="disclaimer-data"
      class="border-red-500 border-2 my-4 p-4 bg-white"
    >
      <p class="text-red-400 font-bold text-xl">Penting!</p>
      <div>
        <p class="mt-2">
          Data Diatas Dapat <em>Berubah</em> sewaktu-waktu, cek pada halaman resmi
          untuk informasi lebih lanjut.
        </p>
        <div class="mt-2">
          <p class="font-bold text-md">Sumber Data:</p>
          <a
            class="underline text-blue-500"
            href="https://www.google.com/search?q=isi+ulang+oksigen+malang"
          >
            Google Search Isi Ulang Oksigen Malang</a
          >
        </div>
      </div>
    </section>
  </section>
</template>

<script>
import CardOksigen from '../components/cardOksigen.vue';
export default {
  data(){
    return {
      data: ''
    }
  },
  components: { 
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