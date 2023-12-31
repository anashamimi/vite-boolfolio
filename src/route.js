import { createRouter, createWebHistory } from 'vue-router';


import HomePage from './pages/HomePage.vue';
import ProductList from './pages/ProductList.vue';
import AboutUs from './pages/AboutUs.vue';
import ContactUs from './pages/ContactUs.vue';
import SingleProduct from './pages/SingleProduct.vue';
import NotFound from './pages/NotFound.vue';

const router = createRouter({
  history: createWebHistory(),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomePage,
    },
    {
        path: '/products',
        name: 'products',
        component: ProductList,
    },
    {
        path: '/about',
        name: 'about',
        component: AboutUs,
    },
    {
        path: '/contact',
        name: 'contact',
        component: ContactUs,
    },
    {
        path: '/products/:id',
        name: 'single-product',
        component: SingleProduct,
    },
    {
        path: '/:pathMatch(.*)*',
        name: 'not-found',
        component: NotFound,
    },
  ],
});
export { router };
