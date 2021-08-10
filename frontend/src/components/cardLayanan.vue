<template>
  <div
    :id="data.url"
    class="text-center items-center bg-white py-8 px-8 shadow-sm rounded flex flex-col border-2 border-gray-200"
  >
    <font-awesome-icon class="pb-4" :icon="data.icon" size="6x" />
      <h2 class="font-bold text-2xl ">{{ data.title }}</h2>
      <div class="">{{ data.description }}</div>
    <button
      @click="$router.push(data.url)"
      class="w-full mt-6 py-3 px-6 rounded bg-blue-400 text-white font-bold"
    >
      Selengkapnya
    </button>
  </div>
</template>

<script>
export default {
  props: ["data"],
};
</script>
