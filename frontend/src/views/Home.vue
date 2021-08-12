<template>
  <main id="home" class="px-8 pt-8">
    <section
      id="layanan"
      class="grid gap-6 grid-flow-row grid-cols-1 md:grid-cols-2 grid-rows-2 md:mx-24"
    >
        <card-layanan v-for="listLayanan in daftarLayanan" :key="listLayanan.url" :data="listLayanan" />

    </section>
  </main>
</template>

<script>
import CardLayanan from "../components/cardLayanan.vue";

export default {
  data() {
    return {
      daftarLayanan: layanan,
    };
  },

  components: {
    CardLayanan,
  },
};

const layanan = [
  {
    title: "Rumah Sakit Rujukan",
    description: "Ketersediaan layanan rumah sakit untuk pasien COVID-19",
    url: "rujukan",
    icon: "hospital"
  },
  {
    title: "Layanan Ambulance",
    description: "Hotline layanan ambulan di kota Malang",
    url: "ambulan",
    icon: "ambulance"
  },
  {
    title: "Stok Darah",
    description: "Informasi stok darah UTD PMI kota malang",
    url: "stokdarah",
    icon: "heart"
  },
  {
    title: "Informasi Oksigen",
    description: "Informasi isi ulang oksigen di kota Malang",
    url: "oksigen",
    icon: "air-freshener"
  },
];
</script>

<style>
.ukurane {
  width: 128px;
  height: 128px;
  stroke-width: 1.25;
}
</style>
