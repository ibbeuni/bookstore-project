import Vue from 'vue';
import VueRouter from 'vue-router';

import HomePage from '../views/HomePage.vue';
import BestList from '../views/BestList.vue'
import TestPage from '../views/TestPage.vue';
import HomePageSample from '../views/HomePageSample.vue';
import LoginPage from '../views/LoginPage';
import MemberHomePage from '../views/MemberHomePage';
import OrderListPage from '../views/OrderListPage';
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
        path: '/best',
        name: 'BestList',
        component: BestList
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
        path: '/eventdetail',
        name: 'EventDetail',
        component: EventDetail
    },
    {
        path:'/eventpage',
        name:'EventPage',
        component:EventPage
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
    },
    {
        path: '/videopage',
        name: 'VideoPage',
        component: VideoPage
    },
    {
        path: '/productbigimgs',
        name: 'ProductBigImgs',
        component: ProductBigImgs
    },
    {
        path: '/orderdetail',
        name: 'Orderdetail',
        component: OrderDetail
    },
    {
        path: '/tracklist',
        name: 'TrackList',
        component: TrackList
    },
    {
        path: '/ZhengTingTest',
        name: 'ZhengTingTest',
        component: ZhengTingTest
    }
   

  
    
]

const router = new VueRouter({
    routes
});

export default router;