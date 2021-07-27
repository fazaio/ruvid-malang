<template>
  <div>
    <Menubar />
    <div class="container mx-auto">
      <div class="text-center">
        <div class="py-2 text-sm">Last update: {{ data[1][0].cron_at }}</div>
      </div>
      <div class="block md:grid lg:grid xl:grid grid-cols-2 gap-6">
        <div v-for="datas in data[0]" :key="datas.rs">
          <card-rujukan :data="datas" />
        </div>
      </div>
      <div class="mt-3 px-4 py-2 mx-4 bg-white">
        <b class="text-red-400">Penting!</b>
        <div>
          <div class="mt-2">
            Data Diatas Dapat <b>Berubah</b> sewaktu-waktu, cek pada halaman
            resmi untuk informasi lebih lanjut. <br />
            <div class="mt-2">
              <a
                href="https://yankes.kemkes.go.id/app/siranap/rumah_sakit?jenis=1&propinsi=35prop&kabkota=3573"
                ><b>Sumber Data:</b>
                https://yankes.kemkes.go.id/app/siranap/rumah_sakit?jenis=1&propinsi=35prop&kabkota=3573</a
              >
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import CardRujukan from "../components/cardRujukan.vue";
import Menubar from "../components/menubar.vue";

export default {
  data() {
    return {
      data: "",
      response: "",
    };
  },
  components: {
    Menubar,
    CardRujukan,
  },
  created() {
    this.axios
      .get("/ruvid_yankes")
      .then((res) => (this.data = res.data))
      .catch((e) => (this.response = e));
  },
};
</script>

<style>
</style>