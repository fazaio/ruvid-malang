<template>
  <div>
    <div class="p-1">
      <div class="container mx-auto">
        <div class="px-2 py-5 overflow-auto">
          <div class="float-left">
            <div class="font-bold text-lg">
              RUVID-MALANG <span class="text-red-500 text-xl">.</span>
            </div>
            <span
              >Kumpulan Informasi untuk tanggap <b>Covid-19</b> kota
              Malang.</span
            >
          </div>
          <div class="float-right hidden">
            <button class="text-gray-400">Info</button>
          </div>
        </div>
      </div>
    </div>
    <div class="p-1 mt-5">
      <div class="container mx-auto">
        <div
          class="
            block
            md:grid
            lg:grid
            xl:grid
            grid-flow-col grid-cols-2 grid-rows-2
            gap-6
          "
        >
          <!-- Grid one -->
          <div class="text-center bg-white py-12 my-6 mx-4 shadow-sm rounded">
            <div class="inline-block">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                class="icon icon-tabler icon-tabler-building-hospital ukurane"
                viewBox="0 0 24 24"
                stroke-width="2"
                stroke="currentColor"
                fill="none"
                stroke-linecap="round"
                stroke-linejoin="round"
              >
                <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
                <line x1="3" y1="21" x2="21" y2="21"></line>
                <path d="M5 21v-16a2 2 0 0 1 2 -2h10a2 2 0 0 1 2 2v16"></path>
                <path d="M9 21v-4a2 2 0 0 1 2 -2h2a2 2 0 0 1 2 2v4"></path>
                <line x1="10" y1="9" x2="14" y2="9"></line>
                <line x1="12" y1="7" x2="12" y2="11"></line>
              </svg>
            </div>
            <div>Ketersediaan Layanan <b>RS</b> untuk Rujukan Covid-19</div>
            <button
              @click="$router.push('rujukan')"
              class="
                py-2
                px-6
                rounded-full
                mt-3
                bg-green-100
                border-4 border-green-300
                text-sm
                font-bold
              "
            >
              Selengkapnya
            </button>
          </div>

          <!-- grid two -->
          <div class="text-center bg-white py-12 my-6 mx-4 shadow-sm rounded">
            <div class="inline-block">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                class="icon icon-tabler icon-tabler-report-medical ukurane"
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
                  d="M9 5h-2a2 2 0 0 0 -2 2v12a2 2 0 0 0 2 2h10a2 2 0 0 0 2 -2v-12a2 2 0 0 0 -2 -2h-2"
                ></path>
                <rect x="9" y="3" width="6" height="4" rx="2"></rect>
                <line x1="10" y1="14" x2="14" y2="14"></line>
                <line x1="12" y1="12" x2="12" y2="16"></line>
              </svg>
            </div>
            <div>Informasi Stok Darah <b>UTD PMI</b> Kota Malang</div>
            <button
              @click="$router.push('stokdarah')"
              class="
                py-2
                px-6
                rounded-full
                mt-3
                bg-indigo-100
                border-4 border-indigo-300
                text-sm
                font-bold
              "
            >
              Selengkapnya
            </button>
          </div>

          <!-- grid four -->
          <div class="text-center bg-white py-12 my-6 mx-4 shadow-sm rounded">
            <div class="inline-block">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                class="icon icon-tabler icon-tabler-ambulance ukurane"
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
                <circle cx="7" cy="17" r="2"></circle>
                <circle cx="17" cy="17" r="2"></circle>
                <path
                  d="M5 17h-2v-11a1 1 0 0 1 1 -1h9v12m-4 0h6m4 0h2v-6h-8m0 -5h5l3 5"
                ></path>
                <path d="M6 10h4m-2 -2v4"></path>
              </svg>
            </div>
            <div>Hotline <b>Ambulan</b> Kota Malang</div>
            <button
              @click="$router.push('ambulan')"
              class="
                py-2
                px-6
                rounded-full
                mt-3
                bg-red-100
                border-4 border-red-300
                text-sm
                font-bold
              "
            >
              Selengkapnya
            </button>
          </div>

          <!-- grid three -->
          <div class="text-center bg-white py-12 my-6 mx-4 shadow-sm rounded">
            <div class="inline-block">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                class="icon icon-tabler icon-tabler-package ukurane"
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
                <polyline
                  points="12 3 20 7.5 20 16.5 12 21 4 16.5 4 7.5 12 3"
                ></polyline>
                <line x1="12" y1="12" x2="20" y2="7.5"></line>
                <line x1="12" y1="12" x2="12" y2="21"></line>
                <line x1="12" y1="12" x2="4" y2="7.5"></line>
                <line x1="16" y1="5.25" x2="8" y2="9.75"></line>
              </svg>
            </div>
            <div>Hotline Isi Ulang tabung <b>Oksigen</b></div>
            <button
              @click="$router.push('oksigen')"
              class="
                py-2
                px-6
                rounded-full
                mt-3
                bg-indigo-100
                border-4 border-indigo-300
                text-sm
                font-bold
              "
            >
              Selengkapnya
            </button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style>
.ukurane {
  width: 128px;
  height: 128px;
  stroke-width: 1.25;
}
</style>