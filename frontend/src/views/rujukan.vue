<template>
    <section id="section-rs-rujukan" class="px-8 md:mx-24">
      <!-- Last Update Section -->
      <div class="my-4 text-sm">Last update: {{ data[1][0].cron_at }}</div>

      <!-- Card Area -->
      <section
        id="rs-card-group"
        class="grid gap-6 grid-flow-row grid-cols-1 md:grid-cols-2 lg:grid-cols-4"
      >
        <card-rujukan v-for="datas in data[0]" :key="datas.rs" :data="datas" />
      </section>

      <!-- Disclaimer Data -->
      <section
        id="disclaimer-data"
        class="border-red-500 border-2 my-4 p-4 bg-white"
      >
        <p class="text-red-400 font-bold text-xl">Penting!</p>
        <div>
          <p class="mt-2">
            Data diatas dapat berubah sewaktu-waktu, cek pada halaman resmi
            untuk informasi lebih lanjut.
          </p>
          <div class="mt-2">
            <p class="font-bold text-md">Sumber Data:</p>
            <a
              class="underline text-blue-500"
              href="https://yankes.kemkes.go.id/app/siranap/rumah_sakit?jenis=1&propinsi=35prop&kabkota=3573"
            >
              SIRANAP Kementrian Kesehatan</a
            >
          </div>
        </div>
      </section>
    </section>
</template>

<script>
import CardRujukan from "../components/cardRujukan.vue";
//import Menubar from "../components/menubar.vue";

export default {
  data() {
    return {
      data: "",
      response: "",
    };
  },
  components: {
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

<style></style>
