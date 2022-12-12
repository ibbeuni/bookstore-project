<template>
    <!-- BODY_WRAPPER -->
    <!-- <div class="wrap">
        <header class="header-wrapper"></header>
        <main></main>
        <footer></footer>
        <h6>h6: hello 哈囉</h6>
        <p>p: hello</p>
        <small>p-s: hello</small>
        <h1> 源石黑體 </h1>
        <h2> 送別 </h2>
        <a href="/#/home/product/102">test</a>
    </div> -->
    <!-- SWIPER -->
    <!-- <swiper ref="mySwiper" :options="swiperOptions">
        <swiper-slide>
            <img src="@/assets/img/index/welcome_banner/A01.jpg" alt="">
        </swiper-slide>
        <swiper-slide>
            <img src="@/assets/img/index/welcome_banner/A02.jpg" alt="">
        </swiper-slide>
        <swiper-slide>
            <img src="@/assets/img/index/welcome_banner/B01.jpg" alt="">
        </swiper-slide>
        <swiper-slide>
            <img src="@/assets/img/index/welcome_banner/C01.jpg" alt="">
        </swiper-slide>
        <swiper-slide>
            <img src="@/assets/img/index/welcome_banner/D01.jpg" alt="">
        </swiper-slide>
        <div class="swiper-pagination" slot="pagination"></div>
    </swiper> -->
    <div>
        <div id="carouselExampleFade" class="carousel slide carousel-fade" data-bs-ride="carousel">
            <div class="carousel-inner">
                <div class="carousel-item active" data-bs-interval="1000">
                    <img src="../assets/img/index/welcome_banner/A01.jpg" class="d-block w-100" alt="...">
                </div>
                <div class="carousel-item" data-bs-interval="1000">
                    <img src="../assets/img/index/welcome_banner/A02.jpg" class="d-block w-100" alt="...">
                </div>
                <div class="carousel-item" data-bs-interval="1000">
                    <img src="../assets/img/index/welcome_banner/B01.jpg" class="d-block w-100" alt="...">
                </div>
            </div>
            <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleFade"
                data-bs-slide="prev">
                <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                <span class="visually-hidden">Previous</span>
            </button>
            <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleFade"
                data-bs-slide="next">
                <span class="carousel-control-next-icon" aria-hidden="true"></span>
                <span class="visually-hidden">Next</span>
            </button>
        </div>
    </div>

</template>

<script>
// export default {
//     name: 'TestSwiper',
//     data() {
//         return {
//             swiperOptions: {
//                 pagination: {
//                     el: '.swiper-pagination'
//                 },
//                 // Some Swiper option/callback...
//             }
//         }
//     },
//     computed: {
//         swiper() {
//             return this.$refs.mySwiper.$swiper
//         }
//     },
//     mounted() {
//         console.log('Current Swiper instance object', this.swiper)
//         this.swiper.slideTo(3, 1000, false)
//     }
// }
</script>


<style scoped>
* {
    box-sizing: border-box
}

body {
    font-family: Verdana, sans-serif;
}

.mySlides {
    display: none
}

/* 幻灯片容器 */
.slideshow-container {
    max-width: 1000px;
    position: relative;
    margin: auto;
}

/* 下一张 & 上一张 按钮 */
.prev,
.next {
    cursor: pointer;
    position: absolute;
    top: 50%;
    width: auto;
    margin-top: -22px;
    padding: 16px;
    color: white;
    font-weight: bold;
    font-size: 18px;
    transition: 0.6s ease;
    border-radius: 0 3px 3px 0;
}

/* 定位 "下一张" 按钮靠右 */
.next {
    right: 0;
    border-radius: 3px 0 0 3px;
}

/* On hover, add a black background color with a little bit see-through */
.prev:hover,
.next:hover {
    background-color: rgba(0, 0, 0, 0.8);
}

/* 标题文本 */
.text {
    color: #f2f2f2;
    font-size: 15px;
    padding: 8px 12px;
    position: absolute;
    bottom: 8px;
    width: 100%;
    text-align: center;
}

/* 数字文本 (1/3 等) */
.numbertext {
    color: #f2f2f2;
    font-size: 12px;
    padding: 8px 12px;
    position: absolute;
    top: 0;
}

/* 标记符号 */
.dot {
    cursor: pointer;
    height: 13px;
    width: 13px;
    margin: 0 2px;
    background-color: #bbb;
    border-radius: 50%;
    display: inline-block;
    transition: background-color 0.6s ease;
}

.active,
.dot:hover {
    background-color: #717171;
}

/* 淡出动画 */
.fade {
    -webkit-animation-name: fade;
    -webkit-animation-duration: 1.5s;
    animation-name: fade;
    animation-duration: 1.5s;
}

@-webkit-keyframes fade {
    from {
        opacity: .4
    }

    to {
        opacity: 1
    }
}

@keyframes fade {
    from {
        opacity: .4
    }

    to {
        opacity: 1
    }
}

.wrap {
    z-index: 99;
}

/* 全域變數 */
:root {
    --background-color: #fff;
    --primary-color: #53929B;
    /* 主色 60% */
    --secondary-color: #E3D096;
    /* 輔色 30* */
    --accent-color: #FD9301;
    /* 強調色 10% */
    --neutral-color: #87806D;
    /* 中性色 */
    --font-color: #2E2A39;
    color: var(--font-color)
        /* 預設文字色 */
}

html {
    /* font-size: 16px; */
    scroll-behavior: smooth;
    font-family: 'Genseki-R', Sans-Serif;
}

/* hx適用於標題 */
h1 {
    font-size: 2.375rem;
    /* 38px */
    line-height: 55px;
    font-family: 'Genseki-H';
}

/* 區塊標題 */
h2 {
    font-size: 1.875rem;
    /* 30px */
    line-height: 40px;
    font-family: 'Genseki-B';
}

h3 {
    font-size: 1.75rem;
    /* 28px */
    font-family: 'Genseki-M';
}

h4 {
    font-size: 1.5rem;
    /* 24px */
    font-family: 'Genseki-M';
}

h5 {
    font-size: 1.25rem;
    /* 20px */
    font-family: 'Genseki-R';
}

/* 大小與<p>相同，字體為非襯線字體 */
h6 {
    font-size: 1rem;
    /* 16px */
    font-family: 'Genseki-R';
}

/* 適用於內文，字體為襯線字體 */
p {
    font-size: 1rem;
    /* 16px */
    font-family: 'Genseki-R';
    /* //TODO 改安裝襯線字體 */
}

small {
    font-size: 0.75rem;
    /* 12px */
    font-family: 'Genseki-L';
}

/* BODY_WRAPPER */
.wrap {
    /* 網頁內容最大寬度 */
    /* max-width: 1920px; */
    min-width: 1440px;
    overflow: hidden;
    min-height: 100vh;
    /* 測試用 */
    background-color: var(--primary-color);
}

/* <a>預設樣式 */
a {
    color: var(--font-color);
    text-decoration: none
}

a:hover {
    color: var(--font-color);
    text-decoration: none
}
</style>