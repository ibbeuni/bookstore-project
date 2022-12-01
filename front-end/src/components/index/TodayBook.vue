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
                        <button type="button" class="btn-category"><span>繪畫</span></button>
                    </li>
                    <li class="category-item">
                        <button type="button" class="btn-category"><span>攝影</span></button>
                    </li>
                    <li class="category-item">
                        <button type="button" class="btn-category"><span>藝術</span></button>
                    </li>
                    <li class="category-item">
                        <button type="button" class="btn-category"><span>鑑賞</span></button>
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
                <ul class="swiper-wrapper">
                    <li class="swiper-slide">
                        <div class="prod-area">
                            <!-- TODO 加入商品連結 -->
                            <a href="">
                                <div class="prod-box">
                                    <!-- TODO 圖片連結用變數替換 -->
                                    <img src="@/assets/img/books/30101.png" alt="封面">
                                </div>
                            </a>
                            <div class="prod-info">
                                <!-- TODO 連結同.prod-img-box -->
                                <a href="">
                                    <!-- 商品名稱 product_name -->
                                    <h5>物見：四十八位物件的閱讀者，與他們所見的世界</h5>
                                </a>
                                <small>作者 auther</small>
                                <div class="prod-price">
                                    <span class="percent">10
                                        <font-awesome-icon icon="fa-solid fa-percent" />
                                    </span>
                                    <span class="price">價格</span>
                                    <span class="unit">元</span>
                                </div>
                            </div>
                        </div>
                    </li>
                    <li class="swiper-slide side-img">
                        <a href="">
                            <div class="prod-box">
                                <!-- TODO 圖片連結用變數替換 -->
                                <img src="@/assets/img/books/30201.png" alt="封面">
                                <!-- TODO 商品名稱 product_name -->
                                <small>藝術史的一千零一夜【暢銷經典插畫版】</small>
                            </div>
                        </a>
                    </li>
                    <li class="swiper-slide side-img">
                        <a href="">
                            <div class="prod-box">
                                <!-- TODO 圖片連結用變數替換 -->
                                <img src="@/assets/img/books/30301.png" alt="封面">
                                <!-- TODO 商品名稱 product_name -->
                                <small>最後的秘境 東京藝大-天才們的華麗日常</small>
                            </div>
                        </a>
                    </li>
                    <li class="swiper-slide side-img">
                        <a href="">
                            <div class="prod-box">
                                <!-- TODO 圖片連結用變數替換 -->
                                <img src="@/assets/img/books/30401.png" alt="封面">
                                <!-- TODO 商品名稱 product_name -->
                                <small>世界是什麼顏色？：橫跨千萬年的人類色彩文化史</small>
                            </div>
                        </a>
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
export default {
    name: 'TodayBook'
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

.swiper-slide {
    position: relative;
    width: fit-content;
}

.prod-area {
    display: flex;
    justify-content: center;
}

.prod-box {
    height: 300px;
    overflow: hidden;
    display: block;
    margin-left: 20px;
}

.prod-box img {
    max-height: 100%;
    max-width: 100%;
    margin-bottom: 10px;
}

.prod-info {
    margin: 50px 0px auto;
}

.prod-price {
    display: flex;
    margin: 20px 0px;
    font-weight: 800;
}

.percent {
    color: var(--accent-color);
    margin-right: 8px;
}

.price {
    margin-right: 5px;
}

.side-img {
    width: 230px;
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