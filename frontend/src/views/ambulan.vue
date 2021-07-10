<template>
  <div>
    <menubar />
    <div class="container mx-auto">
      <div class="block md:grid lg:grid xl:grid grid-cols-2 gap-6">
        <div v-for="row in data" :key="row.ambulan">
          <card-ambulance :data="row" />
        </div>
      </div>
      <div class="mt-3 px-4 py-2 mx-4 bg-white">
        <b class="text-red-400">Penting!</b>
        <div>
          <div>
            Tidak semua Ambulan didaftar diatas merupakan Ambulan Emergency , sebagian besar merupakan Ambulan Transport yang melayani pengantaran pasien tanpa penanganan medis khusus Dan Jenazah.
          </div>
          <div class="mt-2">
            Data Diatas Dapat <b>Berubah</b> sewaktu-waktu, cek pada halaman resmi
          untuk informasi lebih lanjut. <br />
          <div class="mt-2">
            <a href="https://kelpurwantoro.malangkota.go.id/2019/08/21/info-akses-ambulance-gratis-malang-raya/"><b>Sumber Data:</b> https://kelpurwantoro.malangkota.go.id/2019/08/21/info-akses-ambulance-gratis-malang-raya/</a>
          </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import CardAmbulance from "../components/cardAmbulance.vue";
import menubar from "../components/menubar.vue";
export default {
  data() {
    return {
      data: "",
    };
  },
  components: { menubar, CardAmbulance },
  created() {
    this.axios
      .get("/ambulance")
      .then((res) => (this.data = res.data.data))
      .catch((e) => console.log(e));
  },
};
</script>

<style>
</style>