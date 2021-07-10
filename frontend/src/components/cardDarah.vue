<template>
  <div>
    <div class="bg-white p-5 px-4 my-6 mx-4 shadow-sm rounded">
      <div class="text-center">
        Golongan Darah
        <div class="p-4 text-5xl">{{ golongan }}</div>
      </div>
      <div class=" overflow-auto border border-blue-100 px-3 m-1 my-2 rounded bg-blue-50 py-1 " >
        <div class="font-bold float-left">Keterangan</div>
        <div class="font-bold float-right">Stock</div>
      </div>
      <div>
        <div v-for="row in data" :key="row.no">
          <div class=" overflow-auto border border-gray-100 px-3 m-1 my-2 rounded bg-gray-50 py-1 " >
            <div class="float-left">{{ row.produk }}</div>
            <div class="float-right">{{ row[golongan] }}</div>
          </div>
        </div>
      </div>
      <button @click="hubungi" class="m-2 py-2 px-5 border rounded-full">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          class="inline icon icon-tabler icon-tabler-phone"
          width="24"
          height="24"
          viewBox="0 0 24 24"
          stroke-width="2"
          stroke="currentColor"
          fill="none"
          stroke-linecap="round"
          stroke-linejoin="round"
        >
          <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
          <path
            d="M5 4h4l2 5l-2.5 1.5a11 11 0 0 0 5 5l1.5 -2.5l5 2v4a2 2 0 0 1 -2 2a16 16 0 0 1 -15 -15a2 2 0 0 1 2 -2"
          ></path>
        </svg>
        Hubungi
      </button>
      <button @click="rute" class="m-2 py-2 px-5 border rounded-full">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          class="inline icon icon-tabler icon-tabler-map-pin"
          width="24"
          height="24"
          viewBox="0 0 24 24"
          stroke-width="2"
          stroke="currentColor"
          fill="none"
          stroke-linecap="round"
          stroke-linejoin="round"
        >
          <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
          <circle cx="12" cy="11" r="3"></circle>
          <path
            d="M17.657 16.657l-4.243 4.243a2 2 0 0 1 -2.827 0l-4.244 -4.243a8 8 0 1 1 11.314 0z"
          ></path>
        </svg>
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
  },
};
</script>

<style>
</style>