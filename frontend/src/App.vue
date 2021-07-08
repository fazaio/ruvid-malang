<template>
  <div class="text-gray-500 bg-gray-100">
    <router-view />
    <footers />
  </div>
</template>

<script>
import footer from "./components/footer.vue";

export default {
  components: {
    footers: footer,
  },
};
</script>

<style>
</style>