<template>
  <div class="text-gray-500 bg-gray-100">
    <headers />
    <pageTitles />
    <router-view />
    <footers />
  </div>
</template>

<script>
import header from "./components/header.vue";
import footer from "./components/footer.vue";
import pageTitle from "./components/pageTitle.vue";

export default {
  components: {
    footers: footer,
    pageTitles: pageTitle,
    headers: header,
  },
};
</script>
