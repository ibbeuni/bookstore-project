import Vue from 'vue';
import VueRouter from 'vue-router';

import HomePage from '../views/HomePage.vue';
import TestPage from '../views/TestPage.vue';
import HomePageSample from '../views/HomePageSample.vue';

Vue.use(VueRouter);

const routes = [
    {
        path: '*',
        redirect: '/home',
    },
    {
        path: '/home',
        name: 'HomePage',
        component: HomePage
    },
    {
        path: '/test',
        name: 'TestPage',
        component: TestPage
    },
    {
        path: '/sample',
        name: 'HomePageSample',
        component: HomePageSample
    }
]

const router = new VueRouter({
    routes
});

export default router;