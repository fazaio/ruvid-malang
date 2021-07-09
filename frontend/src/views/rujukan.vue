<template>
  <div>
    <Menubar />
    <div class="container mx-auto">
      <div class="block md:grid lg:grid xl:grid grid-cols-2 gap-6">
        <div v-for="datas in data" :key="datas.rs">
          <card-rujukan :data="datas" />
        </div>
      </div>
      <div class="text-center">
          <div><b>Sumber Data:</b> https://yankes.kemkes.go.id/app/siranap/</div>
      </div>
    </div>
  </div>
</template>

<script>
import CardRujukan from "../components/cardRujukan.vue";
import Menubar from "../components/menubar.vue";

export default {
  data() {
    return {
      data: "",
      response: "",
    };
  },
  components: {
    Menubar,
    CardRujukan,
  },
  created() {
    this.axios
      .get("/ruvid_yankes")
      .then((res) => (this.data = res.data[0]))
      .catch((e) => (this.response = e));
  },
};
</script>

<style>
</style>