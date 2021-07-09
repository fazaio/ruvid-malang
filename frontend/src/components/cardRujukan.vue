<template>
  <div>
    <div class="bg-white p-5 px-4 my-6 mx-4 shadow-sm rounded">
      <div class="text-lg font-bold">
        {{ data.rs }}
      </div>
      <span class="text-sm">{{ data.alamatRS }}</span>
      <div class="my-4 mx-1 py-3 text-center">
        <div class="text-center" v-html="iconStatus"></div>
      </div>
      <div class="p-2 mx-1 text-md">
        <div class=" border border-gray-100 px-3 m-1 rounded bg-gray-50 py-1 inline-block " >
            <p v-html="statusBed"></p>
        </div>
        <div class=" border border-gray-100 px-3 m-1 rounded bg-gray-50 py-1 inline-block " >
          {{ data.antrian }}
        </div>
        <button
          class="
            border border-gray-100
            px-3
            m-1
            rounded
            bg-gray-50
            py-1
            inline-block
          "
        >
          konfirmasi bed {{ data.konfirmasi }}
        </button>
      </div>
      <div class="mx-1 mt-6 p-2">
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
        <button @click="detail" class="m-2 py-2 px-5 border rounded-full">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            class="inline icon icon-tabler icon-tabler-info-circle"
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
            <circle cx="12" cy="12" r="9"></circle>
            <line x1="12" y1="8" x2="12.01" y2="8"></line>
            <polyline points="11 12 12 12 12 16 13 16"></polyline>
          </svg>
          Detail
        </button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: ["data"],
  computed: {
    statusBed() {
      if (this.data.statusBed.toLowerCase().match("penuh")) {
        return `<p class="text-red-300"> Bed IGD Penuh!</p>`;
      } else {
        return this.data.statusBed;
      }
    },
    iconStatus() {
      if(this.data.statusBed.toLowerCase().match('penuh')) {
        return `<svg xmlns="http://www.w3.org/2000/svg" class="inline-block text-red-300 icon icon-tabler icon-tabler-bed" width="128" height="128" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round">
   <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
   <path d="M3 7v11m0 -4h18m0 4v-8a2 2 0 0 0 -2 -2h-8v6"></path>
   <circle cx="7" cy="10" r="1"></circle>
</svg>`
      }else {
        return `<svg xmlns="http://www.w3.org/2000/svg" class="inline-block text-green-300 icon icon-tabler icon-tabler-bed" width="128" height="128" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round">
   <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
   <path d="M3 7v11m0 -4h18m0 4v-8a2 2 0 0 0 -2 -2h-8v6"></path>
   <circle cx="7" cy="10" r="1"></circle>
</svg>`
      }
    }
  },
  methods: {
    detail() {
      window.location.href = this.data.link
    },
    rute(){
      window.location.href = `https://google.com/search?q=${this.data.rs}`
    },
    hubungi(){
      window.location.href = `tel:${this.data.konfirmasi}`
    }
  }
};
</script>

<style>
</style>