<template>
    <div class="wrap">
        <main>
            <!-- 導覽列 breadcrumb_wrap -->
            <bread-crumb></bread-crumb>
            <!-- contents_wrap -->
            <section class="contents-wrap">
                <div class="contents-inner flex">
                    <!-- LNB -->
                    <aside-nav></aside-nav>
                    <!-- contents -->
                    <section class="section-wrap">
                        <!-- title 根據aside切換，更換內容 -->
                        <section-title></section-title>
                        <!-- list contents -->
                        <div class="switch-prod-wrap">
                            <!-- list -->
                            <!-- <prod-list></prod-list> -->
                            <ol class="prod-list">
                                <li class="prod-item">
                                    <div class="prod-area">
                                        <div class="prod-thumb-box">
                                            <a href="" class="prod-link">
                                                <div class="img-box">
                                                    <!-- TODO 到時用迴圈跑靜態檔案名{{30101}} -->
                                                    <img src="@/assets/img/books/30101.png" alt="">
                                                </div>
                                            </a>
                                        </div>
                                        <div class="prod-info-box">
                                            <a href="" class="prod-info">
                                                <h5 class="prod-name">物見：四十八位物件的閱讀者，與他們所見的世界</h5>
                                            </a>
                                            <p class="prod-author">
                                                作者名
                                                &nbsp;|&nbsp;
                                                <span class="date">2022.11.30 出版</span>
                                            </p>
                                            <div class="prod-price">
                                                <span class="percent">10%</span>
                                                <span class="price">
                                                    <span class="val">售價</span>
                                                    <span class="unit">元</span>
                                                </span>
                                                <span class="price-normal">
                                                    <span class="val">原價</span>
                                                    <span class="unit">元</span>
                                                </span>
                                            </div>
                                            <p class="prod-intro">
                                                當我們在博物館中看見文物，我們或許只看見它們最表面的模樣。換作是長年浸淫在文物、藝術品中的大師級研究者，他們怎麼看見？他們又從「物」中解讀出甚麼訊息？本書是一回史無前例的策畫。邀請48位國際上知名的東亞藝術史學者、考古學者，每人選擇一件物品，帶領我們進入這件物品的世界。48位學者，每一位都閱物無數。當只能選擇一件，他們如何選出最打動自己，最願意為之傾訴的文物？他們選擇的物，有書畫、織品、陶瓷器、石器、出土破片、青銅器、石刻、版畫、電影、相片、早期印刷品、甚至大型宮殿建築。他們與物的關係，有個人獨到的學術見解，有令人顫抖的文物重現世間，有終身難忘的觀看經驗，人與物一期一會的相遇。
                                            </p>
                                        </div>
                                        <div class="prod-btn-wrap">
                                            <button class="btn-wish-icon">
                                                <font-awesome-icon icon="fa-solid fa-heart" />
                                            </button>
                                            <div class="btn-wrap">
                                                <a href="" class="add-cart-btn">
                                                    <span>加入購物車</span>
                                                </a>
                                                <a href="" class="just-buy-btn">
                                                    <span>馬上購買</span>
                                                </a>
                                            </div>
                                        </div>
                                    </div>
                                </li>
                            </ol>
                        </div>
                    </section>
                </div>
            </section>
        </main>
    </div>

</template>

<script>
import BreadCrumb from '../components/best/BreadCrumb.vue';
import AsideNav from '../components/best/AsideNav.vue';
import SectionTitle from '../components/best/SectionTitle.vue';
// import ProdList from '../components/best/ProdList.vue';

export default {
    components: {
        'bread-crumb': BreadCrumb,
        'aside-nav': AsideNav,
        'section-title': SectionTitle,
        // 'prod-list': ProdList,
    },
    data() {
        return {
            all: '',            // 全部
            products:'',        // 隨機10筆
            appreciation: '',   // 鑑賞
            painting: '',       // 鑑賞
            art:'',             // 藝術
            photography:'',     // 攝影
        }
    }
}
</script>

<style scoped>
.wrap {
    /* 網頁內容最大寬度 */
    /* max-width: 1920px; */
    min-width: 1440px;
    overflow: hidden;
    min-height: 100vh;
    /* 測試用 */
    background-color: var(--background-color);
}

.contents-inner {
    /* position: relative; */
    width: 1200px;
    margin: 0 auto;
}

.flex {
    display: flex;
}

/* 主要內容區：aside+右側 */
.contents-wrap {
    padding-top: 42px;
}

/* 右側顯示區 */
.section-wrap {
    width: calc(100% - 150px);
}

/* prod-list */
ol {
    list-style: none;
    padding-left: 0;
}

.prod-list {
    padding-top: 30px;
    border-top: 1px solid #d5d5d5;
}

.prod-item {
    display: flex;
    padding: 0;
}

.prod-area {
    display: flex;
    justify-content: flex-start;
    align-items: flex-start;
}

.prod-info-box{
    flex: 1;
    padding-right: 50px;
}

.btn-wrap {
    flex: 1;
}

.img-box img {
    max-height: calc((142px -2px) * 1.618 - 10px);
    min-height: 50px;
    vertical-align: middle;
}

.prod-info {
    height: auto;
    cursor: pointer;
}

.prod-name {
    line-height: 23px;
    max-height: 46px;
    margin: 15px 0;
}

.prod-author {
    color: var(--neutral-color);
}

.prod-price {
    display: flex;
    margin-top: 12px;
}

.percent {
    margin-right: 8px;
    color: var(--accent-color);
}

.price {
    margin-right: 8px;
}

.price-normal {
    text-decoration: line-through;
}

.prod-intro {
    margin-top: 20px;
    color: var(--font-color);
    overflow: hidden;
    margin-bottom: 0;
    /* TODO 設定多的字改成... */
    max-height: 48px;
}

.prod-btn-wrap {
    width: 135px;
    margin-left: auto;
    text-align: right;
}

.btn-wish-icon {
    margin-bottom: 24px;
    width: 18px;
    height: 18px;
    text-align: center;
    background-color: transparent;
    border: 0;
    border-radius: 0;
    margin-right: 8px;
}

.btn-wrap a {
    display: inline-flex;
    justify-content: center;
    align-items: center;
    height: 38px;
    width: 130px;
    padding: 3px 13px;
    border-radius: 6px;
    color: var(--background-color);
    font-size: 700;
}

.add-cart-btn {
    background-color: var(--secondary-color);
}

.just-buy-btn {
    background-color: var(--primary-color);
    margin-top: 10px;
}
</style>