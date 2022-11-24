<template>
    <div class="wrapper">
        <!-- HEADER_COMPONENT -->
        <header class="header-wrapper">
            <!-- HEADER_INNER 限制內容物最寬1200px，包住search和nav -->
            <div class="contents-inner">
                <div class="search-wrap">
                    <div class="logo-box">
                        <a href="/#/home">
                            <img src="../assets/BookstoreLogo.png" alt="">
                        </a>
                    </div>
                    <div class="search-box">
                        <!-- 下拉式選單 -->
                        <div class="form-sel">
                            <!-- TODO 取消下拉式選單預設樣式 -->
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
        <main class="container-wrapper">
            <section class="contents-wrap">
                <div class="contents-inner main-section">
                    <aside class="aside-wrap">
                        <div class="aside-header">
                            <div class="aside-title-wrap">
                                <h2>暢銷排行</h2>
                            </div>
                        </div>
                        <div class="aside-body">
                            <div class="snb-wrap">
                                <ul class="snb-list">
                                    <li class="snb-item"><a href=""><h5>綜合</h5></a></li>
                                    <li class="snb-item"><a href=""><h5>藝術</h5></a></li>
                                    <li class="snb-item"><a href=""><h5>攝影</h5></a></li>
                                    <li class="snb-item"><a href=""><h5>繪畫</h5></a></li>
                                    <li class="snb-item"><a href=""><h5>鑑賞</h5></a></li>
                                </ul>
                            </div>
                        </div>
                    </aside>
                    <section class="section-wrap">
                        <div class="title-wrap">
                            <h4 class="title-heading">綜合</h4>
                            <div class="sub-title-wrap">
                                <p class="info-text">
                                    熱門暢銷書單
                                </p>
                            </div>
                        </div>
                        <div class="section-contents">
                            <div class="list-result-wrap">
                                <div class="pagination">
                                    <button class="btn-page prev"><font-awesome-icon icon="fa-solid fa-angle-left" /></button>
                                    <div class="page-num">
                                        <a href="">1</a>
                                        <span class="text-ellipsis">...</span>
                                    </div>
                                    <button class="btn-page next"><font-awesome-icon icon="fa-solid fa-angle-right" /></button>
                                </div>
                                <div class="right-area">
                                    <div class="item-group">
                                        <button class="btn-wish">
                                            <font-awesome-icon icon="fa-solid fa-heart" />
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </section>
                </div>
            </section>
        </main>
    </div>
    
</template>

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
    max-width: 1920px;
    min-width: 1440px;
    overflow: hidden;
    min-height: 100vh;
    background-color: var(--background-color);
}

.container-wrapper {
    min-height: calc(100vh - 80px);
}

.header-wrapper {
    margin: auto;
    background-color: var(--background-color);
    border-bottom: 1px solid var(--primary-color);
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
    box-shadow: 0px 3px 9px var(--accent-color);
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

/* main */
.main-section {
    display: flex;
}
.contents-wrap {
    padding-top: 42px;
}

.aside-wrap {
    width: 170px;
    padding-right: 46px;
}

.aside-header {
    margin-bottom: 30px;
}

.aside-title-wrap {
    display: flex;
}

.snb-list {
    display: block;
    padding: 0;
    margin-block-start: 14px;
    margin-block-end: 14px;
    margin-inline-start: 0px;
    margin-inline-end: 0px;
}

.snb-item {
    display: list-item;
    margin-bottom: 20px;
    padding: 0;

}

.title-wrap {
    /* display: flex; */
    padding-bottom: 30px;
    flex-wrap: wrap;
    justify-content: flex-start;
    align-items: center;
}

.sub-title-wrap {
    width: 100%;
    justify-content: flex-start;
    align-items: center;
    margin-top: 6px;
}

.list-result-wrap {
    display: flex;
    justify-content: space-between;
    /* align-items: flex-end; */
}

.pagination {
    text-align: center;
    margin-top: 30px;
    margin-bottom: 18px;
    display: flex;
    align-items: center;
}

.btn-page {
    display: inline-block;
    width: 24px;
    height: 24px;
    border-radius: 12px;
    text-align: center;
    font-size: 13px;
}

.text-ellipsis {
    width: 10px;
    height: 2px;
    margin: 11px 8px 0;
}

.right-area {
    display: flex;
    justify-content: flex-start;
    align-items: flex-end;
    margin-bottom: 11px;
    margin-left: auto;
}

.item-group {
    margin-left: 5px;
}

.btn-wish {
    width: 38px;
    height: 38px;
    box-sizing: border-box;
    text-align: center;
    border: 1px solid var(--neutral-color);
    border-radius: 6px;
    background-color: var(--background-color);
    color: var(--font-color);
}

</style>