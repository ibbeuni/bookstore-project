import Vue from 'vue';
import VueRouter from 'vue-router';

import IndexView from '../views/IndexView.vue';
import HomePage from '../views/HomePage.vue';
import BestList from '../views/BestList.vue'
import TestPage from '../views/TestPage.vue';
import HomePageSample from '../views/HomePageSample.vue';
import LoginPage from '../views/LoginPage';
import MemberHomePage from '../views/MemberHomePage';
import ShoppingCartPage from '../views/ShoppingCartPage';
import RegisterPage from '../views/RegisterPage';
import AskedQ from '../views/AskedQ';
import EventDetail from '../views/EventDetail';
import ProductPage from '../views/ProductPage.vue';
import ProductBigImgs from '../views/ProductBigImgs.vue';
import VideoDetail from '../views/VideoDetail.vue';
import VideoPage from '../views/VideoPage.vue';
import EventPage from '../views/EventPage';
import OrderDetail from '../views/OrderDetail.vue';
import TrackList from '../views/TrackList.vue';
import ZhengTingTest from '../views/ZhengTingTest.vue';
import ZtTest from '../views/ZtTest.vue';
import BackView from '../Backstage/BackView.vue';
import MemberList from '../Backstage/MemberList.vue';
import BookList from '../Backstage/BookList.vue';
import DashBoard from '../Backstage/DashBoard.vue';
import LoginBack from '../Backstage/LoginBack.vue';
Vue.use(VueRouter);

const routes = [
    {
        path: '*',
        redirect: '/home/homepage',
    },
    {
        path: '/home',
        redirect: '/home/homepage',
        name: 'IndexView',
        component: IndexView,
        children: [
            {
                path: 'homepage',
                name: 'HomePage',
                component: HomePage,
            },
            {
                path: 'login',
                name: 'LoginPage',
                component: LoginPage,
            },
            {
                path: 'best',
                name: 'BestList',
                component: BestList
            },
            {
                path: 'test',
                name: 'TestPage',
                component: TestPage
            },
            {
                path: 'sample',
                name: 'HomePageSample',
                component: HomePageSample
            },
            {
                path: 'login',
                name: 'LoginPage',
                component: LoginPage
            },
            {
                path: 'member',
                name: 'MemberHomePage',
                component: MemberHomePage
            },
            {
                path: 'shoppingcart',
                name: 'ShoppingCartPage',
                component: ShoppingCartPage
            },
            {
                path: 'register',
                name: 'RegisterPage',
                component: RegisterPage
            },
            {
                path: 'faq',
                name: 'AskedQ',
                component: AskedQ
            },
            {
                path: 'eventdetail',
                name: 'EventDetail',
                component: EventDetail
            },
            {
                path: 'eventpage',
                name: 'EventPage',
                component: EventPage
            },
            {
                path: 'product',
                name: 'ProductPage',
                component: ProductPage
            },

            {
                path: 'videopage',
                name: 'VideoPage',
                component: VideoPage,
            },
            {
                path: 'videodetail/:id',
                name: 'VideoDetail',
                component: VideoDetail
            },
            {
                path: 'productbigimgs',
                name: 'ProductBigImgs',
                component: ProductBigImgs
            },
            {
                path: 'orderdetail',
                name: 'Orderdetail',
                component: OrderDetail
            },
            {
                path: 'tracklist',
                name: 'TrackList',
                component: TrackList
            },
            {
                path: 'ZhengTingTest',
                name: 'ZhengTingTest',
                component: ZhengTingTest
            }
            ,
            {
                path: 'ZtTest',
                name: 'ZtTest',
                component: ZtTest
            },
        ],
    },
    {
        path: '/back',
        redirect: '/back/MemberList',
        name: 'backview',
        component: BackView,
        children:[
            {
                path:'memberlist',
                name:'memberlist',
                component: MemberList,
            },
            {
                path:'booklist',
                name:'booklist',
                component: BookList,
            },
            {
                path:'dashboard',
                name:'dashboard',
                component: DashBoard,
            },
            {
                path:'loginback',
                name:'loginback',
                component: LoginBack,
            },
        ],
    },
]

const router = new VueRouter({
    routes
});

export default router;