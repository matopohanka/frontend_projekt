import { createRouter, createWebHistory } from 'vue-router';
import HomeView from '../views/HomeView.vue';
import ContactView from '../views/Contact.vue';
import AboutView from '../views/AboutView.vue';
import MenuView from '../views/Menu.vue';
import ObjednavkaView from '../views/Objednavka.vue';
import DakujemeView from '../views/dakujeme.vue';
import AdminView from '../views/admin.vue';

const routes = [
  { path: '/', name: 'home', component: HomeView },
  { path: '/contact', name: 'contact', component: ContactView },
  { path: '/about', name: 'about', component: AboutView },
  { path: '/menu', name: 'menu', component: MenuView },
  { path: '/objednavka', name: 'objednavka', component: ObjednavkaView },
  { path: '/dakujeme', name: 'dakujeme', component: DakujemeView },
  { path: '/admin', name: 'admin', component: AdminView },
];


const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes,
});


export default router;
