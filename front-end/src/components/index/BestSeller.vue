<template>
    <section class="contents">
        <div class="contents-inner">
            <div class="title-wrap">
                <h2 class="title-heading">推薦書單</h2>
                <ul class="category-tag-list">
                    <li class="category-item">
                        <button type="button" class="btn-category" @click="getAllData"><span>全部</span></button>
                    </li>
                    <li class="category-item">
                        <button type="button" class="btn-category" @click="getAppreciationData"><span>鑑賞</span></button>
                    </li>
                    <li class="category-item">
                        <button type="button" class="btn-category" @click="getPaintingData"><span>繪畫</span></button>
                    </li>
                    <li class="category-item">
                        <button type="button" class="btn-category" @click="getArtData"><span>藝術</span></button>
                    </li>
                    <li class="category-item">
                        <button type="button" class="btn-category" @click="getPhotographyData"><span>攝影</span></button>
                    </li>
                </ul>
                <div class="right-area">
                    <a href="/#/home/best" class="btn-more-plus">
                        <span>看更多 </span>
                        <font-awesome-icon icon="fa-solid fa-plus" />
                    </a>
                </div>
            </div>
            <!-- 設定暢銷排行與新進排行的區域 -->
            <div class="best-steady-wrap">
                <div class="welcome-prod-wrap">
                    <ul class="prod-list" v-for="(item, index) in products" :key="index">
                        <li class="prod-item">
                            <div class="best-prod-area">
                                <div class="best-prod-head">
                                    <div class="badge-flag">
                                        <span>{{index + 1}}</span>
                                    </div>
                                </div>
                                <div class="prod-thumb-box">
                                    <a href="">
                                        <div class="img-box">
                                            <img v-bind:src="'http://127.0.0.1:3000/img/books/' + products[index].img_cover + '.png'" alt="">
                                        </div>
                                    </a>
                                </div>
                                <div class="prod-info-box">
                                    <!-- TODO 設定書本商品詳情頁網址 -->
                                    <a href="">
                                        <p class="prod-name">{{products[index].product_name}}</p>
                                    </a>
                                    <small class="prod-author">{{products[index].auther}}</small>
                                </div>
                            </div>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    </section>
</template>

<script>
import axios from 'axios'

export default {
    name: 'BestSeller',
    data() {
        return {
            all:'',             // 全部
            products:'',        // 隨機10筆
            appreciation: '',   // 鑑賞
            painting: '',       // 鑑賞
            art:'',             // 藝術
            photography:'',     // 攝影

        }
    },
    mounted() {
        
        axios.get('http://127.0.0.1:3000/random_all').then(res => {
            this.all = res.data;
            this.products = this.all
        })

        axios.get('http://127.0.0.1:3000/random_appreciation').then(res => {
            this.appreciation = res.data;
        })

        axios.get('http://127.0.0.1:3000/random_painting').then(res => {
            this.painting = res.data;
        })

        axios.get('http://127.0.0.1:3000/random_art').then(res => {
            this.art = res.data;
        })

        axios.get('http://127.0.0.1:3000/random_photography').then(res => {
            this.photography = res.data;
        })


    },
    methods:{
        // 全部
        getAllData() {
            this.products = this.all
        },
        
        // 鑑賞
        getAppreciationData(){
            this.products = this.appreciation
        },

        // 繪畫
        getPaintingData(){
            this.products = this.painting
        },

        // 藝術隨機
        getArtData(){
            this.products = this.art
        },

        // 攝影
        getPhotographyData(){
            this.products = this.photography
        }
    }
}
</script>

<style scoped>
ul,
li {
    list-style: none;
    margin: 0;
    padding: 0;
    display: inline;
    cursor: default;
}

/* a {
    cursor: default;
} */

button {
    border: 0;
    background-color: none;
}
.contents {
    margin: 60px 0px;
    background-color: var(--background-color);
}

.contents-inner {
    width: 1200px;
    margin: 0 auto;
}

.title-wrap {
    padding-bottom: 30px;
    display: flex;
    justify-content: flex-start;
    flex-direction: row;
}

.right-area {
    display: flex;
    align-items: center;
    justify-content: flex-start;
    margin-left: auto;
    flex-direction: row;
    font-size: 1rem;
}

.category-tag-list {
    margin: 4px 0px 0px 30px;
    padding-left: 0px;
    display: flex;
    align-items: center;
}

.category-item {
    display: inline-block;
    margin-right: 30px;
    /* vertical-align: top; */
}

.btn-category {
    background-color: transparent;
    color: var(--neutral-color);
}

.best-steady-wrap {
    display: flex;
}

.welcome-prod-wrap {
    display: block;
}

/* .prod-list {
    display: flex;
    flex-direction: row;
} */

.prod-item {
    margin: 0 15px;
    width: 210px;
    vertical-align: top;
    display: inline-block;
}

.best-prod-area {
    display: block;
    margin-bottom: 50px;
}

.best-prod-head {
    display: flex;
    justify-content: space-between;
    align-items: center;
    flex-direction: row;
    min-height: 26px;
    margin-bottom: 10px;
}
/* 編號 */
.badge-flag {
    width: 26px;
    height: 26px;
    font-size: 14px;
    line-height: 26px;
    display: inline-block;
    box-sizing: border-box;
    text-align: center;
    vertical-align: top;
    border-radius: 6px 0px;
    font-weight: 700;
    background-color: var(--secondary-color);
}

.prod-thumb-box {
    width: 211px;
}

.img-box {
    width: 211px;
    overflow: hidden;
    position: relative;
    display: block;
    box-sizing: border-box;
    border: 1px solid #EAEAEA;
    cursor: pointer;
}

.img-box img {
    width: 100%;
    min-height: 50px;
    vertical-align: middle;
    border: 0;
    max-height: 328px;
}

.prod-info-box {
    margin-top: 16px;
}

.prod-author {
    margin-top: 5px;
    max-height: 38px;
    line-height: 19px;
    overflow: hidden;
}
</style>