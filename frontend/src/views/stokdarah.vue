<template>
  <section id="section-stok-darah" class="px-8 mt-8 md:mx-24">
    <!-- Last Update Section -->
    <h2 class="pt-2 text-lg font-bold">Stok Darah UTD PMI Kota Malang</h2>
    <p class="pt-2 text-sm">
      Jl. Buring No.10, Oro-oro Dowo, Kec. Klojen, Kota Malang, Jawa Timur 65119
    </p>
    <a class="pt-2 text-sm underline text-blue-400" href="tel:+62341325443"
      >Hubungi UTD PMI</a
    >

    <!-- Card Area -->
    <section
      id="stokdarah-card-group"
      class="mt-8 grid gap-6 grid-flow-row grid-cols-1 md:grid-cols-2 lg:grid-cols-4"
    >
      <card-darah
        v-for="(row, id) in loopGolongan"
        :key="id"
        :data="data[0]"
        :golongan="row"
      />
    </section>

    <!-- Disclaimer Data -->
    <section
      id="disclaimer-data"
      class="border-red-500 border-2 my-4 p-4 bg-white"
    >
      <p class="text-red-400 font-bold text-xl">Penting!</p>
      <div>
        <p class="mt-2">
          Data diatas dapat berubah sewaktu-waktu, cek pada halaman resmi untuk
          informasi lebih lanjut.
        </p>
        <div class="mt-2">
          <p class="font-bold text-md">Sumber Data:</p>
          <a
            class="underline text-blue-500"
            href="http://ayodonor.pmi.or.id/stokdarah.php?module=3573"
          >
            Stok Darah UTD PMI Kota Malang (http://pmi.or.id)</a
          >
        </div>
        <p class="mt-4 text-sm">Last update: {{ data[1][0].cron_at }}</p>
      </div>
    </section>
  </section>
</template>

<script>
import cardDarah from "../components/cardDarah.vue";
export default {
  data() {
    return {
      data: "",
      loopGolongan: ["A+", "B+", "O+", "AB+", "A-", "B-", "O-", "AB-"],
    };
  },
  components: { cardDarah },
  created() {
    this.axios
      .get("/stokdarah")
      .then((res) => (this.data = res.data))
      .catch((e) => console.log(e));
  },
};
</script>

<style></style>
