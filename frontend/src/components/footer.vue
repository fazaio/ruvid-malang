<template>
  <footer id="footer" class="px-8 pb-20 pt-t8">
    <div class="grid-rows-1 gap-8 md:grid-cols-1">
    <div id="tentang-aplikasi" class="text-center flex-col mt-4 py-2">
      <b class="text-xl">Ruvid Malang</b><br />
      Kumpulan informasi tanggal COVID-19 pada Kota Malang, Jawa Timur.
    </div>
    <div id="kebijakan privasi" class="text-center flex-col mt-4 py-2">
      <a @click="$router.push('about')" class="font-bold text-black-500 underline"
        >Kebijakan Privasi</a
      >
    </div>
    </div>
  </footer>
</template>

<script>
export default {};
</script>

<style></style>
