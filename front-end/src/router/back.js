import Vue from 'vue';
import VueRouter from 'vue-router';

import test from '../Backstage/books_list.vue';

Vue.use(VueRouter);

const routes = [
    {
        path: '*',
        redirect: '/test/back',
    },
    {
        path: '/test',
        redirect: '/test/back',
        name: 'IndexView',
        component: test,
    }]
const router = new VueRouter({
    routes
});

export default router;