<template>
    <section class="contents">
            <div class="welcome-banner-wrapper">
                <div class="welcome-banner-inner">
                    <!-- 幻燈片區、幻燈片搭配標題 -->
                    <div class="swiper-container">
                        <!-- 幻燈片區 -->
                        <ul class="swiper-wrapper">
                            <li class="swiper-slide">
                                <!-- <a href="" class="banner-link"> -->
                                <h1 class="banner-title">
                                    禮物首選！
                                    <br>
                                    文青系質感文具上架
                                </h1>
                                <div id="carouselExampleFade" class="banner-visual-box carousel slide carousel-fade"
                                    data-bs-ride="carousel">
                                    <div class="carousel-inner">
                                        <div class="img-box carousel-item active" data-bs-interval="2000">
                                            <img src="@/assets/img/index/welcome_banner/A01.jpg" alt="">
                                        </div>
                                        <div class="img-box carousel-item" data-bs-interval="2000">
                                            <img src="@/assets/img/index/welcome_banner/A02.jpg" alt="">
                                        </div>
                                        <div class="img-box carousel-item" data-bs-interval="2000">
                                            <img src="@/assets/img/index/welcome_banner/B01.jpg" alt="">
                                        </div>
                                        <div class="img-box carousel-item" data-bs-interval="2000">
                                            <img src="@/assets/img/index/welcome_banner/C01.jpg" alt="">
                                        </div>
                                        <div class="img-box carousel-item" data-bs-interval="2000">
                                            <img src="@/assets/img/index/welcome_banner/D01.jpg" alt="">
                                        </div>
                                        <div class="img-box carousel-item" data-bs-interval="2000">
                                            <img src="@/assets/img/index/welcome_banner/E01.jpg" alt="">
                                        </div>
                                        <div class="img-box carousel-item" data-bs-interval="2000">
                                            <img src="@/assets/img/index/welcome_banner/F01.jpg" alt="">
                                        </div>
                                        <div class="img-box carousel-item" data-bs-interval="2000">
                                            <img src="@/assets/img/index/welcome_banner/G01.jpg" alt="">
                                        </div>
                                    </div>
                                </div>
                                <!-- </a> -->
                            </li>
                        </ul>
                    </div>
                    <div class="banner-floating-box">
                        <div class="banner-control-box hidden">
                            <div class="swiper-page">
                                <!-- TODO 改成welcome_banner_table的總張數 -->
                                <span class="swiper-page-current">1</span>
                                -
                                <span class="swiper-page-total">8</span>
                            </div>
                            <button class="btn-swiper-pause">
                                <font-awesome-icon icon="fa-solid fa-pause" />
                            </button>
                        </div>
                        <!-- 與作家相遇BOX -->
                        <div class="banner-content-box">
                            <a href="">
                                <div class="img-box">
                                    <img src="@/assets/img/index/welcome_writer/w02.jpeg" alt="作家照片">
                                </div>
                                <div class="content-info-box">
                                    <p class="content-type">與創作者相遇</p>
                                    <p class="content-title">藝術的本質是什麼？</p>
                                    <small class="content-desc">點我看更多⋯</small>
                                </div>
                            </a>
                        </div>
                    </div>
                    <!-- 幻燈片控制nav -->
                    <div class="welcome-banner-control">
                        <!-- SWIPER控制列 -->
                        <div class="banner-control-inner">
                            <ul class="banner-group-list">
                                <li class="banner-group-item">
                                    <button type="button" class="btn-banner-group">近期推薦</button>
                                </li>
                                <li class="banner-group-item">
                                    <button type="button" class="btn-banner-group">熱門話題</button>
                                </li>
                                <li class="banner-group-item">
                                    <button type="button" class="btn-banner-group">最新出版</button>
                                </li>
                                <li class="banner-group-item">
                                    <button type="button" class="btn-banner-group">主題企劃</button>
                                </li>
                                <li class="banner-group-item">
                                    <button type="button" class="btn-banner-group">有聲書</button>
                                </li>
                                <li class="banner-group-item">
                                    <button type="button" class="btn-banner-group">本月主打</button>
                                </li>
                                <li class="banner-group-item">
                                    <button type="button" class="btn-banner-group">閱讀講座</button>
                                </li>
                            </ul>
                            <div class="divider">
                                <font-awesome-icon icon="fa-solid fa-grip-lines-vertical" />
                            </div>
                            <div class="banner-btn-box">
                                <button type="button" class="swiper-button-prev" data-bs-target="#carouselExampleFade"
                                    data-bs-slide="prev">
                                    <span class="carousel-control-prev-icon" aria-hidden="true">
                                        <font-awesome-icon icon="fa-solid fa-chevron-left" />
                                    </span>
                                    <!-- <span class="visually-hidden">Previous</span> -->
                                </button>
                                <button type="button" class="swiper-button-next" data-bs-target="#carouselExampleFade"
                                    data-bs-slide="next">
                                    <span class="carousel-control-next-icon" aria-hidden="true">
                                        <font-awesome-icon icon="fa-solid fa-chevron-right" />
                                    </span>
                                    <!-- <span class="visually-hidden">Next</span> -->
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
</template>

<script>
export default {
    name: 'WelcomeBanner'
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
    cursor: default;
}

button {
    border: 0;
    background-color: none;
}

.contents {
    margin: 60px 0px;
    background-color: var(--background-color);
}

.welcome-banner-wrapper {
    position: relative;
    height: fit-content;
}

/* 輪播區+控制nav */
.welcome-banner-inner {
    margin-left: calc((100% - 1200px) / 2 - 64px);
    position: relative;
    height: 610.92px;
    /* TODO 高度不知為什麼無法fit-content */
}

/* 幻燈片區、搭配標題 */
.swiper-container {
    margin: 0px auto;
    padding: 0px;
    background-color: var(--background-color);
}

/* 幻燈片區 */
.swiper-wrapper {
    display: flex;
    padding-left: 0px;
    box-sizing: content-box;
    width: 100%;
}

/* 幻燈片<li> */
.swiper-slide {
    position: relative;
    width: fit-content;
}

.banner-title {
    display: inline-block;
    max-width: 750px;
    margin-left: 64px;
}

.banner-visual-box {
    position: absolute;
    border-radius: 20px 0px 0px 20px;
    left: 0;
}

.banner-floating-box {
    position: absolute;
    top: 0px;
    right: calc(100% - 1200px - 64px);
    display: flex;
    z-index: 1;
}

/* banner控制按鈕及張數顯示 */
.banner-control-box {
    display: flex;
    justify-content: flex-start;
    align-items: center;
    height: fit-content;
    margin-top: 80px;
}

.swiper-page {
    color: var(--neutral-color);
    line-height: 22px;
    left: auto;
    bottom: auto;
    width: auto;
    min-width: auto;
    height: auto;
    padding: 0px;
    box-sizing: border-box;
}

.swiper-page-current {
    color: var(--font-color);
    font-weight: 600;
}

.btn-swiper-pause {
    width: 30px;
    height: 30px;
    margin-left: 12px;
    border: 0.5px solid;
    border-radius: 50%;
    border-color: var(--neutral-color);
    background-color: var(--background-color);
    color: var(--neutral-color);
}

/* 與作家相遇<div> */
.banner-content-box {
    display: inline-block;
    width: 273px;
    background-color: var(--background-color);
    border-radius: 20px 0px 20px 20px;
    margin-left: 50px;
    overflow: hidden;
}

.content-info-box {
    padding: 20px 24px 30px;
}

.content-type {
    color: var(--accent-color);
    font-size: 13px;
}

.content-title {
    margin-top: 5px;
    line-height: 23px;
    font-size: 15px;
}

.welcome-banner-control {
    position: absolute;
    height: 70px;
    background-color: rgba(255, 255, 255, 0.98);
    margin-left: calc((100% - 1200px) / 2 + 110px);
    bottom: 0px;
    left: 0px;
    right: 0px;
    z-index: 1;
}

.banner-control-inner {
    display: flex;
    justify-content: flex-start;
    align-items: center;
    flex-direction: row;
    width: 940px;
    height: 100%;
}

.banner-group-list {
    display: flex;
    justify-content: space-around;
    align-items: center;
    height: 100%;
    /* flex: 0 0 893px; */
}

.banner-group-item {
    height: 100%;
    box-sizing: border-box;
    border-bottom: 2px solid transparent;
    /* TODO 當輪播到的時候，加上.active 改為深色底線 */
    display: flex;
    justify-content: center;
    align-items: center;
    margin: 0 15px;
}

.btn-banner-group {
    color: var(--neutral-color);
    font-weight: 500;
    border: 0px;
    background-color: transparent;
    display: inline-block;
    box-sizing: border-box;
}

.divider {
    display: flex;
    justify-content: center;
    align-items: center;
    color: lightgrey;
    width: 30px;
    flex: 1;
}

.banner-btn-box {
    display: flex;
    justify-content: space-between;
    align-items: center;
    flex-direction: row;
}

.banner-btn-box button {
    width: 30px;
    height: 30px;
    background-color: none;
    margin: 0px 20px;
    border: 0px;
    background-color: transparent;
}

.hidden {
    display: none;
}


</style>