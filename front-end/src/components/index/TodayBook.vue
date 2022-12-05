<template>
    <section class="contents">
        <div class="contents-inner">
            <div class="title-wrap">
                <h2 class="title-heading">今日選書</h2>
                <ul class="category-tag-list">
                    <li class="category-item">
                        <button type="button" class="btn-category"><span>全部</span></button>
                    </li>
                    <li class="category-item">
                        <button type="button" class="btn-category"><span>鑑賞</span></button>
                    </li>
                    <li class="category-item">
                        <button type="button" class="btn-category"><span>繪畫</span></button>
                    </li>
                    <li class="category-item">
                        <button type="button" class="btn-category"><span>藝術</span></button>
                    </li>
                    <li class="category-item">
                        <button type="button" class="btn-category"><span>攝影</span></button>
                    </li>
                </ul>
                <div class="right-area">
                    <!-- TODO 加上位址 -->
                    <a href="" class="btn-more-plus">
                        <span>看更多 </span>
                        <font-awesome-icon icon="fa-solid fa-plus" />
                    </a>
                </div>
            </div>
            <div class="template-row">
                <ul class="swiper-wrapper" v-for="(item, index) in cover" :key="index">
                    <li class="main-swiper-slide">
                        <div class="main-prod-area">
                            <!-- TODO 加入商品連結 -->
                            <div class="main-prod-thumb-box">
                                <a href="" class="prod-link">
                                    <span class="main-img-box">
                                        <img v-bind:src="'http://127.0.0.1:3000/img/books/' + cover[index].img_cover + '.png'"
                                            alt="封面">
                                    </span>
                                </a>
                            </div>
                            <div class="main-prod-info-box">
                                <!-- TODO 加入商品連結 -->
                                <a href="" class="prod-info">
                                    <h5 class="main-prod-name">{{ cover[index].product_name }}</h5>
                                </a>
                                <small class="prod-author">{{ cover[index].auther }}</small>
                                <div class="prod-price">
                                    <span class="percent">10
                                        <font-awesome-icon icon="fa-solid fa-percent" />
                                    </span>
                                    <span class="price">{{ cover[index].discount_price }}</span>
                                    <span class="unit">元</span>
                                </div>
                            </div>
                        </div>
                    </li>
                </ul>
                <ul class="swiper-wrapper" v-for="(item, index) in products" :key="index">
                    <li class="swiper-slide">
                        <div class="thumb-img-box">
                            <a href="">
                                <img v-bind:src="'http://127.0.0.1:3000/img/books/' + products[index].img_cover + '.png'"
                                    alt="封面">
                            </a>
                        </div>
                        <div class="prod-area">
                            <div class="prod-info-box">
                                <a href="" class="prod-info">
                                    <small class="side-prod-name">{{ products[index].product_name }}</small>
                                </a>
                            </div>
                        </div>
                    </li>
                </ul>
                <button class="swiper-btn-prev">
                    <font-awesome-icon icon="fa-solid fa-chevron-left" />
                </button>
                <button class="swiper-btn-next">
                    <font-awesome-icon icon="fa-solid fa-chevron-right" />
                </button>
            </div>
        </div>
    </section>
</template>

<script>
import axios from 'axios'

export default {
    name: 'TodayBook',
    data() {
        return {
            all: '',         // 隨機10筆
            cover: '',       // 取第1筆
            products: '',    // 取前4筆
        }
    },
    mounted() {
        axios.get('http://127.0.0.1:3000/random_all').then(res => {
            this.all = res.data;
            this.cover = this.all.slice(0, 1)
            console.log(this.cover)
            this.products = this.all.slice(1, 4)
            console.log(this.products)


            // // 全部隨機
            // let randomArray = this.all;
            // // 重新隨機排序陣列
            // function shuffleArray(inputArray) {
            //     inputArray.sort(() => Math.random() - 0.5);
            // }
            // // 取隨機排序的前10筆
            // shuffleArray(randomArray);
            // this.products = randomArray.slice(0,10);

        })
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

a {
    cursor: pointer;
}

button {
    border: 0;
    background-color: none;
}

.contents {
    margin: 60px 0px;
    background-color: var(--background-color);
}

.contents-inner {
    /* position: relative; */
    width: 1200px;
    margin: 0 auto;
}

.title-wrap {
    padding-bottom: 30px;
    display: flex;
    justify-content: flex-start;
    flex-direction: row;
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

/* TODO 按鈕點及後加上active class */
.active {
    color: var(--primary-color);
    font-weight: 900;
}

.right-area {
    display: flex;
    align-items: center;
    justify-content: flex-start;
    margin-left: auto;
    flex-direction: row;
    font-size: 1rem;
}

.template-row {
    display: flex;
    position: relative;
}

.swiper-wrapper {
    display: flex;
    padding-left: 0px;
    box-sizing: content-box;
    width: 100%;
}

/* 左側main-product <li> */
.main-swiper-slide {
    position: relative;
    width: 660px;
    display: flex;
    justify-content: center;
    align-items: flex-start;
    flex-direction: column;
    height: auto;
}

.main-prod-area {
    width: 100%;
    display: flex;
    justify-content: flex-start;
    align-items: center;
    flex-direction: row;
}

.main-prod-thumb-box {
    width: 234px;
    overflow: hidden;
    display: block;
    margin-left: 20px;
    box-shadow: 10px 10px 30px rgba(0, 0, 0, 0.08);
}

.main-img-box {
    /* height: auto; */
    width: 234px;
    overflow: hidden;
    position: relative;
    box-sizing: border-box;
    border: 1px solid #eaeaea;
}

.main-img-box img {
    max-height: 365.376px;
    width: 100%;
    border: 0;
    /* margin-bottom: 10px; */
}

.main-prod-info-box {
    margin: 50px 0px auto 30px;
}

.main-prod-name {
    max-height: calc(30px * 2);
    font-size: 20px;
    line-height: 30px;
    overflow: hidden;
}

.prod-author {
    max-height: 44px;
    line-height: 22px;
    margin-top: 8px;
}

.prod-price {
    display: flex;
    margin-top: 20px;
    font-weight: 800;
}

.percent {
    color: var(--accent-color);
    margin-right: 8px;
}

.price {
    margin-right: 5px;
}

/* 側邊商品框 */
.swiper-slide {
    margin: 0 0 0 20px;
    width: 142px;
    box-sizing: border-box;
    height: 100%;
    position: relative;
    padding: 0;
    display: list-item;
}

.thumb-img-box {
    width: calc(100% - 2px);
    border: 1px solid #eaeaea;
}

.thumb-img-box img {
    width: 100%;
    vertical-align: middle;
    border: 0;
}

.prod-info-box {
    margin-top: 12px;
}

.side-prod-name {
    height: 38px;
    line-height: 19px;
}

.swiper-btn-prev {
    position: absolute;
    top: 30%;
    left: -50px;
    width: 44px;
    height: 44px;
    border: 1px solid var(--neutral-color);
    border-radius: 50%;
    background-color: var(--background-color);
    z-index: 2;
    box-sizing: border-box;
}

.swiper-btn-next {
    position: absolute;
    top: 30%;
    right: -50px;
    width: 44px;
    height: 44px;
    border: 1px solid var(--neutral-color);
    border-radius: 50%;
    background-color: var(--background-color);
    z-index: 2;
    box-sizing: border-box;
}
</style>