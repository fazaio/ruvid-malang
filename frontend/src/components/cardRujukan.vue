<template>
  <div
    :id="stringtokebabcase(data.rs)"
    class="bg-white py-2 px-2 pb-4 shadow-sm rounded flex-col border-2 border-gray-200"
  >
    <div id="" class="flex flex-col gap-2">
      <h2 id="nama-rumahsakit" class="text-xl font-bold">
        {{ data.rs }}
      </h2>
      <p id="alamat-rumahsakit" class="text-md">{{ data.alamatRS }}</p>
      <span v-html="statusBed"></span>
      <span v-html="statusAntrian"></span>
      <p>{{ capitalizefirstletter(data.update) }}</p>
    </div>
    <div class="flex flex-col gap-1 border-t-2 border-gray-200 mt-4 pt-4">
      <button
        @click="hubungi"
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
      <button
        @click="detail"
        class="mt-2 rounded border-2 border-blue-400 text-blue-400 py-3"
      >
        Detail
      </button>
    </div>
  </div>
</template>

<script>
export default {
  props: ["data"],
  computed: {
    statusBed() {
      if (this.data.statusBed.toLowerCase().match("penuh")) {
        return `<p class="text-white bg-red-500 font-bold border-2 border-red-500">Bed IGD Penuh!</p>`;
      } else {
        return `<p class="text-white bg-green-500 font-bold border-2 border-green-500">${this.data.statusBed}</p>`;
      }
    },
    statusAntrian() {
      if (this.data.antrian.toLowerCase().match("tanpa antrian")) {
        return `<p class="text-white bg-green-500 font-bold border-2 border-green-500">Tidak Ada Antrian</p>`;
      } else {
        return `<p class="text-white bg-red-500 font-bold border-2 border-red-500">${this.data.antrian}</p>`;
      }
    },
  },
  methods: {
    detail() {
      window.location.href = this.data.link;
    },
    rute() {
      window.location.href = `https://google.com/search?q=${this.data.rs}`;
    },
    hubungi() {
      window.location.href = `tel:${this.data.konfirmasi}`;
    },
    capitalizefirstletter(string) {
      return string.charAt(0).toUpperCase() + string.slice(1);
    },
    stringtokebabcase(str) {
      let stripped = str.replace(/\./g, "");
      return stripped.replace(/\s/g, "-").toLowerCase();
    },
  },
};
</script>

<style></style>
