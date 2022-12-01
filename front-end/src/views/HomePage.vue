<template>
    <!-- BODY_WRAPPER -->
    <div class="wrap">
     
        <!-- 主要內容區 -->
        <main class="container-wrapper">
            <!-- component: welcome-banner -->
            <welcome-banner></welcome-banner>
            <!-- component: welcome-marketing -->
            <welcome-marketing></welcome-marketing>
            <!-- component: today-book -->
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
                                            <img src="../assets/img/books/30101.png" alt="封面">
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
                                        <img src="../assets/img/books/30201.png" alt="封面">
                                        <!-- TODO 商品名稱 product_name -->
                                        <small>藝術史的一千零一夜【暢銷經典插畫版】</small>
                                    </div>
                                </a>
                            </li>
                            <li class="swiper-slide side-img">
                                <a href="">
                                    <div class="prod-box">
                                        <!-- TODO 圖片連結用變數替換 -->
                                        <img src="../assets/img/books/30301.png" alt="封面">
                                        <!-- TODO 商品名稱 product_name -->
                                        <small>最後的秘境 東京藝大-天才們的華麗日常</small>
                                    </div>
                                </a>
                            </li>
                            <li class="swiper-slide side-img">
                                <a href="">
                                    <div class="prod-box">
                                        <!-- TODO 圖片連結用變數替換 -->
                                        <img src="../assets/img/books/30401.png" alt="封面">
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
            <!-- component: picks -->
            <section class="contents">
                <div class="picks-wrap">
                    <div class="contents-inner">
                        <div class="picks-wrap-inner">
                            <div class="title-wrap">
                                <h2 class="title-heading">Picks</h2>
                                <div class="right-area">
                                    <!-- TODO 加上位址 -->
                                    <a href="" class="btn-more-plus">
                                        <span>看更多 </span>
                                        <font-awesome-icon icon="fa-solid fa-plus" />
                                    </a>
                                </div>
                            </div>
                            <div class="picks-contents">
                                <div class="picks-left-area">
                                    <div class="picks-info-box">
                                        <small class="picks-desc">發現的喜悅是一種禮物</small>
                                        <h4>我們記得您的口味，很樂意為您推薦合適的書！</h4>
                                    </div>
                                    <div class="picks-btn">
                                        <a href="/#/login">登入並獲得更多推薦</a>
                                    </div>
                                </div>
                                <div class="picks-right-area">
                                    <ul class="picks-item-list">
                                        <li class="picks-item">
                                            <div class="picks-item-inner">
                                                <div class="img-box">
                                                    <img src="../assets/img/index/picks_item/img_welcome_picks_item_01.png"
                                                        alt="">
                                                </div>
                                                <div class="picks-info">
                                                    <p class="picks-info-title">綜合推薦</p>
                                                    <p class="picks-info-desc">
                                                        我們分析了的品味<br>
                                                        來看看你朝思暮想的<br>
                                                        那本書吧。
                                                    </p>
                                                </div>
                                            </div>
                                        </li>
                                        <li class="picks-item">
                                            <div class="picks-item-inner">
                                                <div class="img-box">
                                                    <img src="../assets/img/index/picks_item/img_welcome_picks_item_02.png"
                                                        alt="">
                                                </div>
                                                <div class="picks-info">
                                                    <p class="picks-info-title">作家Picks</p>
                                                    <p class="picks-info-desc">
                                                        來認識看看，<br>
                                                        與你喜歡的作家<br>
                                                        相似的新作家！<br>
                                                    </p>
                                                </div>
                                            </div>
                                        </li>
                                        <li class="picks-item">
                                            <div class="picks-item-inner">
                                                <div class="img-box">
                                                    <img src="../assets/img/index/picks_item/img_welcome_picks_item_03.png"
                                                        alt="">
                                                </div>
                                                <div class="picks-info">
                                                    <p class="picks-info-title">隨心所欲Picks</p>
                                                    <p class="picks-info-desc">
                                                        今天<br>
                                                        隨著自己的心情<br>
                                                        挑一本書如何？
                                                    </p>
                                                </div>
                                            </div>
                                        </li>
                                        <li class="picks-item">
                                            <div class="picks-item-inner">
                                                <div class="img-box">
                                                    <img src="../assets/img/index/picks_item/img_welcome_picks_item_01.png"
                                                        alt="">
                                                </div>
                                                <div class="picks-info">
                                                    <p class="picks-info-title">Soulmates Picks</p>
                                                    <p class="picks-info-desc">
                                                        與你取向相似的<br>
                                                        靈魂伴侶們<br>
                                                        都在讀什麼書呢？
                                                    </p>
                                                </div>
                                            </div>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <!-- component: bestseller -->
            <section class="contents">
                <div class="contents-inner">
                    <div class="title-wrap">
                        <h2 class="title-heading">推薦書單</h2>
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
                    <!-- 設定暢銷排行與新進排行的區域 -->
                    <div class="best-steady-wrap">
                        <ul class="prod-list">
                            <!-- TODO  跑迴圈，重複10次 -->
                            <li class="prod-item">
                                <div class="best-prod-area">
                                    <div class="best-prod-head">
                                        <div class="badge-flag">
                                            <!-- TODO 迴圈數字 +1 -->
                                            <span>1</span>
                                        </div>
                                    </div>
                                    <div class="prod-thumb-box">
                                        <!-- TODO 設定書本商品詳情頁網址 -->
                                        <a href="">
                                            <div class="img-box">
                                                <img src="../assets/img/books/30101.png" alt="">
                                            </div>
                                        </a>
                                    </div>
                                    <div class="prod-info-box">
                                        <!-- TODO 設定書本商品詳情頁網址 -->
                                        <a href="">
                                            <p class="prod-name">書籍名稱</p>
                                        </a>
                                        <small class="prod-author">作者名稱</small>
                                    </div>
                                </div>
                            </li>
                        </ul>
                    </div>
                </div>
            </section>
            <!-- component: video -->
            <!-- TODO 改套用Vue幻燈片套件：vue-awesome-swiper -->
            <section class="contents">
                <div class="video-banner-wrap">
                    <div class="contents-inner">
                        <div class="contents-inner">
                            <!-- 標題 -->
                            <div class="title-wrap">
                                <h2 class="title-heading">線上讀書會</h2>
                                <div class="right-area">
                                    <!-- TODO 加上位址 -->
                                    <a href="" class="btn-more-plus">
                                        <span>看更多 </span>
                                        <font-awesome-icon icon="fa-solid fa-plus" />
                                    </a>
                                </div>
                            </div>
                            <div class="video-swiper-container">
                                <ul class="video-swiper-wrapper">
                                    <li class="video-swiper-slide">
                                        <div class="video-banner-area">
                                            <div class="video-title-box">
                                                <h2>我是影片的標題</h2>
                                                <small>與談人姓名</small>
                                            </div>
                                            <div class="video-visual-box">
                                                <div class="prod-area">
                                                    <div class="prod-thumb-box">
                                                        <a href="">
                                                            <img src="../assets/img/books/30101.png" alt="">
                                                        </a>
                                                        <p>書籍名稱</p>
                                                    </div>
                                                </div>
                                                <div class="video-frame-wrap">
                                                    <iframe width="560" height="315"
                                                        src="https://www.youtube.com/embed/K2vBHUUqWoI"
                                                        title="YouTube video player" frameborder="0"
                                                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                                                        allowfullscreen></iframe>
                                                </div>
                                            </div>
                                        </div>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </main>
    </div>
</template>

<script>
import WelcomeBanner from '../components/index/WelcomeBanner.vue';
import WelcomeMarketing from '../components/index/WelcomeMarketing.vue'
export default {
    components: {
        'welcome-banner': WelcomeBanner,
        'welcome-marketing': WelcomeMarketing,
    },
    data() {
        return {
            a: ''
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

a {
    cursor: default;
}

button {
    border: 0;
    background-color: none;
}

/* 每個section的上下間距 */
.contents {
    margin: 60px 0px;
    background-color: var(--background-color);
}

.wrap {
    /* 網頁內容最大寬度 */
    /* max-width: 1920px; */
    min-width: 1440px;
    overflow: hidden;
    min-height: 100vh;
    /* 測試用 */
    background-color: var(--background-color);
}

/* TODO 所有分頁適用：所有section wrap中的第一層 */
.contents-inner {
    /* position: relative; */
    width: 1200px;
    margin: 0 auto;
}

/* 今日選書 */
/* section title */
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

/* Picks */
.picks-wrap {
    background-color: rgba(83, 146, 155, 0.18);
}

.picks-wrap-inner {
    padding: 80px 0px;
}

.picks-contents {
    display: flex;
    justify-content: space-between;
    align-items: center;
}

.picks-left-area {
    width: 327px;
}

.picks-desc {
    color: var(--primary-color);
}

.picks-btn {
    margin-top: 62px;
    width: 250px;
    height: 50px;
    border-radius: 6px;
    background-color: var(--accent-color);
    display: flex;
    justify-content: center;
    align-items: center;
}

.picks-btn a {
    color: var(--background-color);
    font-weight: 900;
}

.picks-right-area {
    flex: 1;
    margin-left: 25px;
}

.picks-item-list {
    display: flex;
    justify-content: space-between;
}

.picks-item {
    width: 200px;
}

.picks-item-inner {
    width: 100%;
    border-radius: 16px;
}

.img-box {
    border-radius: 16px 16px 0px 0px;
    overflow: hidden;
    height: 180px;
}

.img-box img {
    width: 100%;
    vertical-align: middle;
}

.picks-info {
    height: calc(100% - 180px);
    border: 1px solid #EAEAEA;
    border-radius: 0px 0px 16px 16px;
    padding-top: 20px;
    background-color: var(--background-color);
    box-sizing: border-box;
    text-align: center;
}

.picks-info-title {
    font-weight: bolder;
    margin: 0px;
}

.picks-info-desc {
    font-size: 14px;
    color: var(--neutral-color);
}

/* 暢銷排行 */
.best-steady-wrap {
    display: flex;
}

.best-prod-area {
    display: block;
}

.best-prod-head {
    display: flex;
    justify-content: space-between;
    align-items: center;
    flex-direction: row;
    min-height: 26px;
    margin-bottom: 10px;
}

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
    background-color: var(--accent-color);
}

.img-box {
    width: 211px;
    box-sizing: border-box;
    border: 1px solid #EAEAEA;
    cursor: pointer;
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

/* casting */
.video-banner-wrap {
    position: relative;
    /* background-color: red; */
}

.video-swiper-container {
    /* background-color: aqua; */
    width: 100%;
    margin: 0 auto;
    padding: 0;
    z-index: 99;
}

.video-swiper-wrapper {
    width: 100%;
    height: 100%;
    display: flex;
    box-sizing: content-box;
}

.video-swiper-slide {
    height: 100%;
    width: 100%;
}

.video-banner-area {
    display: flex;
    justify-content: center;
    width: 100%;
    height: 300px;
}

.video-title-box {
    padding-right: 30px;
}

.video-visual-box {
    display: flex;
    margin-left: 30px;
}

.prod-thumb-box {
    margin-top: auto;
}

.prod-thumb-box img {
    width: 118px;
}


.video-frame-wrap {
    border-radius: 18px;
    overflow: hidden;
    margin-left: 30px;
}

</style>