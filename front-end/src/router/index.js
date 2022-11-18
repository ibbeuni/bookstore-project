import Vue from 'vue';
import VueRouter from 'vue-router';

import HomePage from '../views/HomePage.vue';
import TestPage from '../views/TestPage.vue';
import HomePageSample from '../views/HomePageSample.vue';
import LoginPage from '../views/LoginPage';
import MemberHomePage from '../views/MemberHomePage';
import OrderListPage from '../views/OrderListPage';
import ShoppingCartPage from '../views/ShoppingCartPage';
import RegisterPage from '../views/RegisterPage';
import AskedQ from '../views/AskedQ';
import EventList from '../views/EventList';
import ProductPage from '../views/ProductPage.vue';
import VideoDetail from '../views/VideoDetail.vue';

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
    },
    {
        path: '/login',
        name: 'LoginPage',
        component: LoginPage
    },
    {
        path: '/member',
        name: 'MemberHomePage',
        component: MemberHomePage
    },
    {
        path: '/orderlist',
        name: 'OrderListPage',
        component: OrderListPage
    },
    {
        path: '/shoppingcart',
        name: 'ShoppingCartPage',
        component: ShoppingCartPage
    },
    {
        path: '/register',
        name: 'RegisterPage',
        component: RegisterPage
    },
    {
        path: '/faq',
        name: 'AskedQ',
        component: AskedQ
    },
    {
        path: '/event',
        name: 'EventList',
        component: EventList
    },
    {
        path: '/product',
        name: 'ProductPage',
        component: ProductPage
    },
    {
        path: '/videodetail',
        name: 'VideoDetail',
        component: VideoDetail
    }
]

const router = new VueRouter({
    routes
});

export default router;