import Vue from 'vue'
import App from './App.vue'
import router from '@/router'


import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap'
import './assets/css/normalize.css'
import './assets/css/font.css'
import './assets/css/common.css'

/* import the fontawesome core */
import { library } from '@fortawesome/fontawesome-svg-core'
// 引入Solid, Regular系列icon
import { fas } from '@fortawesome/free-solid-svg-icons'
import { fab } from '@fortawesome/free-brands-svg-icons'


/* import font awesome icon component */
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'

// 將icon加到library
library.add(fas, fab)

/* add font awesome icon component 註冊全局組件 */
Vue.component('font-awesome-icon', FontAwesomeIcon)

Vue.config.productionTip = false






new Vue({
    router,
    render: h => h(App),
}).$mount('#app')