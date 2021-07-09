<template>
  <div>
    <div class="bg-white p-5 px-4 my-6 mx-4 shadow-sm rounded">
      <div class="mx-2 my-2 p-2">
        <div class="font-bold text-lg">
         {{ data.ambulan }}
        </div>
        <span>{{ data.hotline }}</span>
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
    </div>
  </div>
</template>

<script>
export default {
    props: ['data'],
    methods:{
        hubungi(){
            window.location.href = `tel:${this.data.hotline}`
        }
    }
};
</script>

<style>
</style>