<template>
  <div>
    <menubar />
    <div class="container mx-auto">
      <div class="block md:grid lg:grid xl:grid grid-cols-2 gap-6">
        <div class="bg-white p-5 px-4 my-6 mx-4 shadow-sm rounded">
          <div class="mx-2 my-2 p-2">
            <div class="font-bold text-lg">Depo Isi Ulang Oksigen CV. Erka Jaya Gas</div>
            <span>Jl. Industri Wendit Barat, Lowoksoro, Mangliawan, Kec. Pakis, Malang, Jawa Timur 65154</span>
          </div>
          <button class="m-2 py-2 px-5 border rounded-full">
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
            <button class="m-2 py-2 px-5 border rounded-full">
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
    </div>
  </div>
</template>

<script>
import menubar from '../components/menubar.vue';
export default {
  components: { menubar },};
</script>

<style>
</style>