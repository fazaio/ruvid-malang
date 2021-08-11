<template>
  <div
    :id="`stok-darah-`+golongan"
    class="bg-white py-2 px-2 pb-4 shadow-sm rounded flex-col border-2 border-gray-200"
  >
    <h3 class="text-center">
      Golongan Darah
      <div class="p-4 text-5xl">{{ golongan }}</div>
    </h3>
    <div id="stok-darah">
      <div
        id="label-tabel"
        class="overflow-auto border border-blue-100 px-3 m-1 my-2 rounded bg-blue-50 py-1 "
      >
        <div class="font-bold float-left">Keterangan</div>
        <div class="font-bold float-right">Stock</div>
      </div>
      <div :id="`stokdarah-` + stringtokebabcase(row.produk)" v-for="row in data" :key="row.no">
        <div
          class=" overflow-auto border border-gray-100 px-3 m-1 my-2 rounded bg-gray-50 py-1 "
        >
          <div class="float-left">{{ row.produk }}</div>
          <div class="float-right">{{ row[golongan] }}</div>
        </div>
      </div>
    </div>
    <div
      id="informasi-kontak"
      class="flex flex-col gap-1 border-t-2 border-gray-200 mt-4 pt-4"
    >
      <button
        @click="hubungi"
        id="hotline"
        class="mt-2 rounded bg-blue-400 text-white font-bold py-3"
      >
        Hubungi
      </button>
      <button
        @click="rute"
        class="mt-2 rounded border-2 border-blue-400 text-blue-400 py-3"
      >
        Rute
      </button>
    </div>
  </div>
</template>

<script>
export default {
  props: ["data", "golongan"],
  methods: {
    hubungi() {
      window.location.href = `tel:+62341325443`;
    },
    rute() {
      window.location.href = "https://goo.gl/maps/biwgFQvVixqmeR127";
    },
    stringtokebabcase(str) {
      let stripped = str.replace(/\./g, "");
      return stripped.replace(/\s/g, "-").toLowerCase();
    },
  },
};
</script>

<style></style>
