<template>
  <div
    :id="stringtokebabcase(data.ambulan)"
    class="bg-white py-2 px-2 pb-4 shadow-sm rounded flex-col border-2 border-gray-200"
  >
    <div id="informasi-layanan" class="flex flex-col gap-2">
      <h2 id="nama-layanan-ambukan" class="text-xl font-bold">
        {{ data.ambulan }}
      </h2>
      <p id="hotline-rumahsakit" class="text-md">{{ data.hotline }}</p>
    </div>
    <div
      id="informasi-kontak"
      class="flex flex-col gap-1 border-t-2 border-gray-200 mt-4 pt-4"
    >
      <button
        @click="hubungi"
        id="hotline"
        class="mt-2 rounded bg-blue-400 text-white font-bold py-3"
      >
        Hubungi
      </button>
    </div>
  </div>
</template>

<script>
export default {
  props: ["data"],
  methods: {
    hubungi() {
      window.location.href = `tel:${this.data.hotline}`;
    },
    stringtokebabcase(str) {
      let stripped = str.replace(/\./g, "");
      return stripped.replace(/\s/g, "-").toLowerCase();
    },
  },
};
</script>

<style></style>
