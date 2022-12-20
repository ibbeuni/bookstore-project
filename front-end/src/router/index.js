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
import PaymentPage from '../views/PaymentPage.vue';
import ZhengTingTest from '../views/ZhengTingTest.vue';
import ZtTest from '../views/ZtTest.vue';
import BackView from '../Backstage/BackView.vue';
import MemberList from '../Backstage/MemberList.vue';
import BookList from '../Backstage/BookList.vue';
import DashBoard from '../Backstage/DashBoard.vue';
import LoginBack from '../Backstage/LoginBack.vue';
import AddMember from '../Backstage/AddMember.vue';
import AddBook from '../Backstage/AddBook.vue';

Vue.use(VueRouter);

//获取原型对象上的push函数
const originalPush = VueRouter.prototype.push
//修改原型对象中的push方法
VueRouter.prototype.push = function push(location) {
  return originalPush.call(this, location).catch(err => err)
}

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
                component: HomePage
            },
            {
                path: 'login',
                name: 'LoginPage',
                component: LoginPage
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
                component: MemberHomePage,
                // meta: {requiresAuth: true}
            },
            {
                path: 'shoppingcart',
                name: 'ShoppingCartPage',
                component: ShoppingCartPage,
                // meta: {requiresAuth: true}
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
                path: 'eventdetail/:id',
                name: 'EventDetail',
                component: EventDetail
            },
            {
                path: 'eventpage',
                name: 'EventPage',
                component: EventPage
            },
            {
                //1 增加/:id
                path: 'product/:id',
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
                path: 'payment',
                name: 'PaymentPage',
                component: PaymentPage
            },
            {
                path: 'ZhengTingTest',
                name: 'ZhengTingTest',
                component: ZhengTingTest
            }
            ,
            {
                path: 'ZtTest/:id',
                name: 'ZtTest',
                component: ZtTest
            },
           
        ],
    },
    {
        path: '/back1',
        // redirect: '/back1/loginback',
        name: 'loginback',
        component: LoginBack,
    },
    {
        path: '/back',
        redirect: '/back/memberlist',
        name: 'backview',
        component: BackView,
        children:[
            {
                path:'memberlist',
                name:'memberlist',
                component: MemberList,
            },
            {
                path:'addmember',
                name:'addmember',
                component: AddMember,
            },
            {
                path:'booklist',
                name:'booklist',
                component: BookList,
            },
            {
                path:'addbook',
                name:'addbook',
                component: AddBook,
            },
            {
                path:'dashboard',
                name:'dashboard',
                component: DashBoard,
            },
        ],
    },
]

const router = new VueRouter({
    routes
});
Vue.use(router)
router.beforeEach((to, from, next) => {
    if ( to.meta.requiresAuth === true) {
        if(localStorage.getItem('token')){
            next({
                path:'/home/homepage'
            })
        }else{
            next({
                path:'/home/login'
            })
        }
    }else{
      next()
    }
}
  
  )




export default router;