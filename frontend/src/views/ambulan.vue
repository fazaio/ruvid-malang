<template>
  <section id="section-ambulance-malang" class="px-8 mt-8 md:mx-24">
    <section
      id="ambulance-card-group"
      class="grid gap-6 grid-flow-row grid-cols-1 md:grid-cols-2 lg:grid-cols-4"
    >
      <card-ambulance v-for="row in data" :key="row.ambulan" :data="row" />
    </section>
    <section
      id="disclaimer-data"
      class="border-red-500 border-2 my-4 p-4 bg-white"
    >
      <p class="text-red-400 font-bold text-xl">Penting!</p>
      <div>
        <p class="mt-2">
          Tidak semua Ambulan didaftar diatas merupakan Ambulan Emergency ,
            sebagian besar merupakan Ambulan Transport yang melayani pengantaran
            pasien tanpa penanganan medis khusus Dan Jenazah.
        </p>
        <p class="mt-2">
            Data Diatas Dapat <em>Berubah</em> sewaktu-waktu, cek pada halaman
            resmi untuk informasi lebih lanjut.
        </p>
        <div class="mt-2">
          <p class="font-bold text-md">Sumber Data:</p>
          <a
            class="underline text-blue-500"
            href="https://kelpurwantoro.malangkota.go.id/2019/08/21/info-akses-ambulance-gratis-malang-raya/"
          >
            https://kelpurwantoro.malangkota.go.id</a
          >
        </div>
      </div>
    </section>
  </section>
</template>

<script>
import CardAmbulance from "../components/cardAmbulance.vue";
export default {
  data() {
    return {
      data: "",
    };
  },
  components: { CardAmbulance },
  created() {
    this.axios
      .get("/ambulance")
      .then((res) => (this.data = res.data.data))
      .catch((e) => console.log(e));
  },
};
</script>

<style></style>
