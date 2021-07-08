import { createWebHistory, createRouter } from "vue-router";
import Home from "@/views/Home.vue";
import About from "@/views/about.vue";
import ambulan from "@/views/ambulan.vue";
import oksigen from "@/views/oksigen.vue";
import rujukan from "@/views/rujukan.vue";
import stokdarah from "@/views/stokdarah.vue";

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home,
  },
  {
    path: "/about",
    name: "About",
    component: About,
  },
  {
    path: "/ambulan",
    name: "ambulan",
    component: ambulan,
  },
  {
    path: "/oksigen",
    name: "oksigen",
    component: oksigen,
  },
  {
    path: "/rujukan",
    name: "rujukan",
    component: rujukan,
  },
  {
    path: "/stokdarah",
    name: "stokdarah",
    component: stokdarah,
  },

];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;