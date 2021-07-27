<template>
  <div>
    <menubar />
    <div class="container mx-auto">
      <div class="text-center">
        <div class="font-bold">Stok Darah UTD PMI Kota Malang</div>
        <div class="text-sm">
          Jl. Buring No.10, Oro-oro Dowo, Kec. Klojen, Kota Malang, Jawa Timur
          65119
        </div>
        <div class="text-sm">+62341325443</div>
      </div>
      <div class="block md:grid lg:grid xl:grid grid-cols-2 gap-6">
        <template v-for="(row, id) in loopGolongan" :key="id">
          <card-darah :data="data[0]" :golongan="row" />
        </template>
      </div>
      <div class="text-center">
        <div class="py-2 text-sm">Last update: {{ data[1][0].cron_at }}</div>
      </div>
      <div class="mt-3 px-4 py-2 mx-4 bg-white">
        <b class="text-red-400">Penting!</b>
        <div>
          Data Diatas Dapat <b>Berubah</b> sewaktu-waktu, cek pada halaman resmi
          untuk informasi lebih lanjut. <br />
          <b>Sumber Data:</b>
          http://ayodonor.pmi.or.id/stokdarah.php?module=3573
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import menubar from "../components/menubar.vue";
import cardDarah from "../components/cardDarah.vue";
export default {
  data() {
    return {
      data: "",
      loopGolongan: ["A+", "B+", "O+", "AB+", "A-", "B-", "O-", "AB-"],
    };
  },
  components: { menubar, cardDarah },
  created() {
    this.axios
      .get("/stokdarah")
      .then((res) => (this.data = res.data))
      .catch((e) => console.log(e));
  },
};
</script>

<style>
</style>