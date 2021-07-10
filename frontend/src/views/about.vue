<template>
  <div>
    <menubar />
    <div class="container mx-auto">
      <div class="p-4 m-2 bg-white rounded shadow">
        <div>
          <div class="font-bold">Tentang Data.</div>
          <div>
            Data pada web ini merupakan beberapa kumpulan informasi tanggap covid-19 khususnya di kota <b>Malang</b>, 
            Yang dirangkum menjadi satu bagian untuk memudahkan mencari informasi tanggap covid seperti hotline <b>ambulance</b>, hotline isi ulang <b>Oksigen</b>,
            sistem informasi rawat inap Rumah Sakit, dan <b>Stok darah</b> UTD PMI kota Malang. <br>
            <div class="p-2 my-2 bg-red-200 border-2 border-red-400 rounded"><b>Penting!</b> Data Dapat Berubah sewaktu-waktu.</div>
            <div class="mt-4">Sumber Data:</div>
            <div class="mx-2 mt-2 text-gray-400">
                <div>https://yankes.kemkes.go.id/app/siranap/rumah_sakit?jenis=1&propinsi=35prop&kabkota=3573</div>
                <div>https://kelpurwantoro.malangkota.go.id/2019/08/21/info-akses-ambulance-gratis-malang-raya/</div>
                <div>http://ayodonor.pmi.or.id/stokdarah.php?module=3573</div>
                <div>https://www.google.com/search?q=isi+ulang+oksigen+malang/</div>
            </div>
          </div>
          <div class="mt-5">
            <div class="font-bold">Dikelolah oleh</div>
            <div class="m-2 text-gray-500">. <span class="font-bold text-red-400">@fazaio</span> | <svg xmlns="http://www.w3.org/2000/svg" class="inline icon icon-tabler icon-tabler-map-pin" width="24" height="24" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round">
   <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
   <circle cx="12" cy="11" r="3"></circle>
   <path d="M17.657 16.657l-4.243 4.243a2 2 0 0 1 -2.827 0l-4.244 -4.243a8 8 0 1 1 11.314 0z"></path>
</svg> Malang</div>
            <div class="m-2 text-gray-500">. Web: <a href="http://fazaio.web.app"><i>https://fazaio.web.app</i></a></div>
          </div>
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