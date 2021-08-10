<template>
  <div
    :id="data.url"
    class="text-center bg-white py-8 px-8 shadow-sm rounded flex-col border-2 border-gray-200"
  >
    <font-awesome-icon class="pb-4" :icon="data.icon" size="6x" />
    <div>
      <h2 class="font-bold text-2xl ">{{ data.title }}</h2>
      <div class="mt-4">{{ data.description }}</div>
    </div>
    <button
      @click="$router.push(data.url)"
      class="mt-6 h-14 py-2 px-6 rounded-full bg-green-100 border-4 border-green-300 text-sm font-bold "
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
