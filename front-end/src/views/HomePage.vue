<template>
    <!-- BODY_WRAPPER -->
    <div class="wrap">
        <!-- HEADER_COMPONENT -->
        <header class="header-wrapper">
            <!-- HEADER_INNER 限制內容物最寬1200px，包住search和nav -->
            <div class="contents-inner">
                <div class="search-wrap">
                    <div class="logo-box">
                        <!-- TODO <a>首頁連結 -->
                        <a href="/#/test">
                            <img src="../assets/BookstoreLogo.png" alt="">
                        </a>
                    </div>
                    <div class="search-box">
                        <!-- 下拉式選單 -->
                        <div class="form-sel">
                            <!-- // TODO 取消預設樣式 -->
                            <select title="選擇搜索類別" name="" id="">
                                <option value="total">綜合檢索</option>
                                <option value="painting">繪畫</option>
                                <option value="photography">攝影</option>
                                <option value="art">藝術</option>
                                <option value="appreciation">鑑賞</option>
                            </select>
                        </div>
                        <!-- 搜尋匡 -->
                        <div class="search-input-wrap">
                            <input type="search" title="請輸入關鍵字" placeholder="熱門關鍵字">
                        </div>
                        <!-- 放大鏡搜尋按鈕 -->
                        <a href="">
                            <!-- // TODO 取得input的內容後，丟到後端撈資料回傳 -->
                            <font-awesome-icon icon="fa-solid fa-magnifying-glass" size="xl" />
                        </a>
                    </div>
                    <!-- 購物車、會員icon -->
                    <div class="user-menu-list">
                        <div class="user-menu-item">
                            <font-awesome-icon icon="fa-solid fa-cart-shopping" size="2x" />
                        </div>
                        <!-- TODO LOGIN後，加上li.user_menu_item [login] class -->
                        <div class="user-menu-item user-icon">
                            <font-awesome-icon icon="fa-solid fa-user" size="xl" />
                        </div>
                    </div>
                </div>
                <nav class="nav-wrap">
                    <!-- 漢堡選單 -->
                    <div class="menu-wrap">
                        <button class="menu_btn">
                            <font-awesome-icon icon="fa-solid fa-bars" />
                        </button>
                        <!-- TODO 做展開的漢堡選單：點擊時顯示 -->
                        <div class="menu_area"></div>
                    </div>
                    <ul class="nav-list">
                        <li class="nav_item">
                            <a href="">暢銷排行</a>
                        </li>
                        <li>・</li>
                        <li class="nav_item">
                            <a href="">新進書單</a>
                        </li>
                        <li>・</li>
                        <li class="nav_item">
                            <a href="">活動公告</a>
                        </li>
                        <li>・</li>
                        <li class="nav_item">
                            <a href="">藝・選物</a>
                        </li>
                        <li>・</li>
                        <li class="nav_item">
                            <a href="">CONTENT</a>
                        </li>
                    </ul>
                    <ul class="sub-list">
                        <li class="sub_item">
                            <a href="">
                                <small>加入會員</small>
                            </a>
                        </li>
                        <li><small>・</small></li>
                        <li class="sub_item">
                            <a href="">
                                <small>會員登入</small>
                            </a>
                        </li>
                        <li><small>・</small></li>
                        <li class="sub_item">
                            <a href="">
                                <small>Q&A</small>
                            </a>
                        </li>
                    </ul>
                </nav>
            </div>
        </header>
        <!-- 主要內容區 -->
        <main class="container-wrapper">
            <!-- component -->
            <section class="contents">
                <div class="welcome-banner-wrapper">
                    <div class="welcome-banner-inner">
                        <!-- 幻燈片區、幻燈片搭配標題 -->
                        <div class="swiper-container">
                            <!-- 幻燈片區 -->
                            <ul class="swiper-wrapper">
                                <li class="swiper-slide">
                                    <a href="" class="banner-link">
                                        <h1 class="banner-title">
                                            禮物首選！
                                            <br>
                                            文青系質感文具上架
                                        </h1>
                                        <div class="banner-visual-box">
                                            <div img-box>
                                                <!-- TODO 根據幻燈片資料表跑迴圈 -->
                                                <img src="../assets/img/index/welcome_banner/A02.jpg" alt="">
                                            </div>
                                        </div>
                                    </a>
                                </li>
                            </ul>
                        </div>
                        <div class="banner-floating-box">
                            <div class="banner-control-box">
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
                                    <img src="../assets/img/index/writer.jpeg" alt="作家照片">
                                    <div class="content-info-box">
                                        <p class="content-type">與作家相遇</p>
                                        <p class="content-title">講座標題</p>
                                        <small class="content-desc">點我看更多⋯</small>
                                    </div>
                                </a>
                            </div>
                        </div>
                        <!-- 幻燈片控制nav -->
                        <div class="welcome-banner-control">
                            <!-- SWIPER控制列 -->
                            <div class="banner-control-inner">
                                <!-- TODO 跑迴圈顯示banner slider分類（目前先寫死，寫完刪除多的<li>） -->
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
                                    <button type="button" class="swiper-button-prev"><font-awesome-icon icon="fa-solid fa-chevron-left" /></button>
                                    <button type="button" class="swiper-button-next"><font-awesome-icon icon="fa-solid fa-chevron-right" /></button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <!-- APP按鈕區 -->
            <section class="contents">
                <div class="contents-inner">
                    <div class="welcome-marketing-wrap">
                        <ul class="welcome-marketing-list">
                            <li class="item">
                                <!-- TODO 連結到活動分頁 -->
                                <a href="">
                                    <div class="icon-box">
                                        <font-awesome-icon icon="fa-solid fa-tags" />
                                    </div>
                                    <small>領券中心</small>
                                </a>
                            </li>
                            <li class="item">
                                <!-- TODO 連結到下方section -->
                                <a href="">
                                    <div class="icon-box">
                                        <font-awesome-icon icon="fa-solid fa-wand-magic-sparkles" />
                                    </div>
                                    <small>Picks</small>
                                </a>
                            </li>
                            <li class="item">
                                <!-- TODO 連結到新進書單分頁 -->
                                <a href="">
                                    <div class="icon-box">
                                        <font-awesome-icon icon="fa-solid fa-lines-leaning" />
                                    </div>
                                    <small>話題新書</small>
                                </a>
                            </li>
                            <li class="item">
                                <!-- TODO 連結到下方section -->
                                <a href="">
                                    <div class="icon-box">
                                        <font-awesome-icon icon="fa-solid fa-gift" />
                                    </div>
                                    <small>藝・選物</small>
                                </a>
                            </li>
                            <li class="item">
                                <!-- TODO 連結到影片分頁 -->
                                <a href="">
                                    <div class="icon-box">
                                        <font-awesome-icon icon="fa-solid fa-book-open" />
                                    </div>
                                    <small>線上讀書會</small>
                                </a>
                            </li>
                            <li class="item">
                                <!-- TODO 連結到EVENT分頁 -->
                                <a href="">
                                    <div class="icon-box">
                                        <font-awesome-icon icon="fa-solid fa-bullhorn" />
                                    </div>
                                    <small>EVENT</small>
                                </a>
                            </li>
                            <li class="item">
                                <!-- TODO 連結到新進書單 -->
                                <a href="">
                                    <div class="icon-box">
                                        <font-awesome-icon icon="fa-solid fa-bag-shopping" />
                                    </div>
                                    <small>預約販售</small>
                                </a>
                            </li>
                            <li class="item">
                                <!-- TODO 連結到追蹤書單功能（要登入） -->
                                <a href="">
                                    <div class="icon-box">
                                        <font-awesome-icon icon="fa-solid fa-hand-holding-heart" />
                                    </div>
                                    <small>我的書單</small>
                                </a>
                            </li>
                            <li class="item">
                                <!-- TODO 連結到..某個分頁吧 -->
                                <a href="">
                                    <div class="icon-box">
                                        <font-awesome-icon icon="fa-solid fa-money-bills" />
                                    </div>
                                    <small>禮物卡</small>
                                </a>
                            </li>
                        </ul>
                    </div>
                </div>
            </section>
        </main>
        <footer></footer>
    </div>
</template>

<script>
export default {
    data() {
        return {
            a:''
        }
    }
}
</script>

<style scoped>
ul,
li {
    list-style: none;
    display: inline;
    cursor: default;
}

a {
    cursor: default;
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
    background-color: var(--primary-color);
}

.header-wrapper {
    margin: auto;
    background-color: var(--background-color);
    border-bottom:1px solid var(--primary-color);
}

/* 所有section wrap中的第一層 */
.contents-inner {
    /* position: relative; */
    width: 1200px;
    margin: 0 auto;
}

/* LOGO+搜尋列+購物車會員icon */
.search-wrap {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 30px auto 0px;
    background-color: var(--background-color);
}

/* // TODO .logo_box */
.logo-box {
    height: 92px;
    width: 174px;
}

.logo-box img {
    object-fit: contain;
    height: 80px;
}

/* 搜尋欄 */
.search-box {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 550px;
    background-color: var(--background-color);
    border-radius: 50px;
    border: 1px solid;
    border-color: var(--primary-color);
    /* //TODO 設定圓角外匡 */
}

.search-box a {
    color: var(--primary-color);
    cursor: default;
}

/* <select>初始化 */
.form-sel select {
    border: 0;
    /*取消邊框*/
    width: 120px;
    height: 40px;
    outline-style: none;
    color: var(--font-color);
    font-size: 1rem;
    padding-left: 1rem;
    /*文字置中*/
    /* 隱藏三角 */
    /* appearance: none;
    -webkit-appearance: none;
    -moz-appearance: none; */
}

/* <input>初始化 */
.search-input-wrap input {
    /* padding: 10px 250px 10px 0px; */
    width: 350px;
    height: 40px;
    outline-style: none;
    border: 0px;
    padding-left: 20px;
    font-size: 1rem;
}

/* 去除<input> X */
.search-input-wrap input::-webkit-search-cancel-button {
    display: none;
}

/* 會員、購物車icon */
.user-menu-list {
    display: flex;
    /* TODO 確認是否要讓搜尋欄置中 */
    /* margin-left: auto; */
}

.user-menu-item {
    width: 50px;
    height: 50px;
    display: flex;
    justify-content: center;
    align-items: center;
    margin-left: 30px;
}

.user-icon {
    border-radius: 50%;
    box-shadow:0px 3px 9px var(--accent-color);
    background-color: var(--accent-color);
    color: var(--background-color);
}

/* 漢堡+nav_list+sub_list */
.nav-wrap {
    display: flex;
    margin: 20px 0px;
}

.nav-wrap a {
    padding: 5px 14px;
}

/* 漢堡選單 */
.menu-wrap {
    display: flex;
    justify-content: center;
    align-items: center;
}

.menu-wrap button {
    border: 0.5px solid;
    border-color: var(--neutral-color);
    background-color: var(--background-color);
    width: 44px;
    height: 44px;
    border-radius: 50%;
}

/* 主選單 */
.nav-list {
    margin-right: auto;
    padding-left: 0px;
}

/* 副選單 */
.sub-list {
    margin-left: auto;
}

.welcome-banner-wrapper {
    position: relative;
    height: fit-content;
}

/* 輪播區+控制nav */
.welcome-banner-inner {
    margin-left: calc((100% - 1200px) / 2 - 64px);
    position: relative;
    height: 610.92px;    /* TODO 高度不知為什麼無法fit-content */
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
}

/* 幻燈片<li> */
.swiper-slide {
    position: relative;
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
    background-color: rgba(255, 255, 255, 0.95);
    margin-left: calc((100% - 1200px) / 2 + 110px);
    bottom: 0px;
    left: 0px;
    right: 0px;
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
    border-bottom: 2px solid transparent;  /* TODO 當輪播到的時候，加上.active 改為深色底線 */
    display: flex;
    justify-content: center;
    align-items: center;
    margin-right: 30px;
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
    background-color: var(--background-color);
}

/* .welcome-marketing-list {
    margin: 70px 0px;
} */

.welcome-marketing-list {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding-left: 0px;
}

.item {
    text-align: center;
    /* flex: 0 0 90px; */
}

.icon-box {
    width: 68px;
    height: 68px;
    border-radius: 24px;
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 33px;
    margin-bottom: 10px;
    color: var(--primary-color);
    /* font-size: x-large; */
    /* background-color: rgba(228, 228, 228, 0.98); */
}

</style>