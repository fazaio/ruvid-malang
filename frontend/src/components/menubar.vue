<template>
  <div @click="$router.push('/')">
    <div class="p-1">
      <div class="container mx-auto">
        <div class="px-2 py-5 overflow-auto">
          <button class="py-3 px-6 rounded-full bg-white">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              class="inline icon icon-tabler icon-tabler-arrow-back-up"
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
              <path d="M9 13l-4 -4l4 -4m-4 4h11a4 4 0 0 1 0 8h-1"></path>
            </svg>
            Kembali
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style>
</style>