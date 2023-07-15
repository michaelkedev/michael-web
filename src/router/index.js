import { createRouter, createWebHashHistory } from "vue-router";

import Home from "../pages/Home.vue";
import About from "../pages/About.vue";
import Gallery from "../pages/Gallery.vue";
import Contact from "../pages/Contact.vue";

const routes = [
  { path: "/", name: "Home", component: Home },
  { path: "/about", name: "About", component: About },
  { path: "/gallery", name: "Gallery", component: Gallery },
  { path: "/contact", name: "Contact", component: Contact },
];

const router = createRouter({
  history: createWebHashHistory(),
  routes,
});
export default router;
