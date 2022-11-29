<template>
    <div class="wrap">
        <main>
            <!-- 導覽列 breadcrumb_wrap -->
            <bread-crumb></bread-crumb>
            <!-- contents_wrap -->
            <section class="contents-wrap">
                <div class="contents-inner flex">
                    <!-- LNB -->
                    <aside class="aside-wrap">
                        <div class="aside-header">
                            <div class="title-wrap">
                                <h2 class="title-heading">
                                    暢銷書單
                                </h2>
                            </div>
                        </div>
                        <div class="aside-body">
                            <div class="snb-wrap">
                                <ul class="snb-list">
                                    <li class="snb-item">
                                        <!-- TODO 加入連結 -->
                                        <a href="" class="snb-line">綜合</a>
                                    </li>
                                    <li class="snb-item">
                                        <!-- TODO 加入連結 -->
                                        <a href="" class="snb-line">繪畫</a>
                                    </li>
                                    <li class="snb-item">
                                        <!-- TODO 加入連結 -->
                                        <a href="" class="snb-line">攝影</a>
                                    </li>
                                    <li class="snb-item">
                                        <!-- TODO 加入連結 -->
                                        <a href="" class="snb-line">藝術</a>
                                    </li>
                                    <li class="snb-item">
                                        <!-- TODO 加入連結 -->
                                        <a href="" class="snb-line">鑑賞</a>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </aside>
                    <!-- contents -->
                    <section class="section-wrap">
                        <!-- title 根據aside切換，更換內容 -->
                        <h1 class="title-heading"></h1>
                    </section>
                </div>
            </section>

        </main>


        <!-- FOOTER -->
        <full-footer></full-footer>
    </div>

</template>

<script>
// import FullHeader from '../components/index/FullHeader.vue';
// import FullFooter from '../components/index/FullFooter.vue';
// import BreadCrumb from '../components/best/BreadCrumb.vue'

// export default {
//     components: {
//         'full-header': FullHeader,
//         'full-footer': FullFooter,
//         'bread-crumb': BreadCrumb,
//     },
//     data() {
//         return {
//             a: ''
//         }
//     }
// }
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

/* 主要內容區 */
.contents-wrap {
    padding-top: 42px;
}

/* aside */
.aside-wrap {
    width: 170px;
    padding-right: 46px;
}

.aside-header {
    margin-bottom: 30px;
}

.title-wrap {
    padding-bottom: 0;
    display: flex;
    justify-content: start;
    align-items: center;
    flex-direction: row;
}

.title-heading {
    line-height: 30px;
}

</style>