import { createRouter, createWebHistory } from "vue-router";

import Home from "../pages/Home.vue";
import Project from "../pages/Project.vue";
import Gallery from "../pages/Gallery.vue";
import Contact from "../pages/Contact.vue";

const routes = [
  { path: "/", name: "Home", component: Home },
  // { path: "/about", name: "About", component: About },
  { path: "/gallery", name: "Gallery", component: Gallery },
  { path: "/project", name: "Project", component: Project },
  { path: "/contact", name: "Contact", component: Contact },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});
export default router;
