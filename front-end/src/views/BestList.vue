<template>
    <div class="wrap">
        <!-- HEADER_COMPONENT -->
        <full-header></full-header>
        <main>
            <!-- 導覽列 breadcrumb_wrap -->
            <section class="breadcrumb-wrap">
                <div class="contents-inner">
                    <ol class="breadcrumb-list">
                        <li class="breadcrumb-item">
                            <a href="#/home"><font-awesome-icon icon="fa-solid fa-house" /></a>
                        </li>
                        <li class="breadcrumb-item">
                            <a href="#/best">暢銷書單</a>
                        </li>
                        <li class="breadcrumb-item">
                            <a href="#/best">綜合</a>
                        </li>
                    </ol>
                </div>
            </section>
            <!-- 主要內容區 -->
            <section class="contents-wrap">
                <div class="contents-inner flex">
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
                                        <a href="" class="snb-line">綜合暢銷排行榜</a>
                                    </li>
                                    <li class="snb-item">
                                        <!-- TODO 加入連結 -->
                                        <a href="" class="snb-line">綜合暢銷排行榜</a>
                                    </li>
                                    <li class="snb-item">
                                        <!-- TODO 加入連結 -->
                                        <a href="" class="snb-line">綜合暢銷排行榜</a>
                                    </li>
                                    <li class="snb-item">
                                        <!-- TODO 加入連結 -->
                                        <a href="" class="snb-line">綜合暢銷排行榜</a>
                                    </li>
                                    <li class="snb-item">
                                        <!-- TODO 加入連結 -->
                                        <a href="" class="snb-line">綜合暢銷排行榜</a>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </aside>
                </div>
            </section>

        </main>


        <!-- FOOTER -->
        <full-footer></full-footer>
    </div>

</template>

<script>
import FullHeader from '../components/index/FullHeader.vue';
import FullFooter from '../components/index/FullFooter.vue';

export default {
    components: {
        'full-header': FullHeader,
        'full-footer': FullFooter
    },
    data() {
        return {
            a: ''
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

.breadcrumb-wrap {
    padding: 20px 0 0 ;
}

.contents-inner {
    /* position: relative; */
    width: 1200px;
    margin: 0 auto;
}

.flex {
    display: flex;
}

/* breadcrumb */
.breadcrumb-list {
    list-style: none;
    margin: 0;
    padding: 0;
    display: flex;
    /* margin-block-start: 1em;
    margin-block-end: 1em;
    margin-inline-start: 0px;
    margin-inline-end: 0px;
    padding-inline-start: 40px; */
}

.breadcrumb-item {
    padding: 0 12px 0 0;
}

.breadcrumb-item a {
    padding: 0 0 0 12px;
    color: var(--neutral-color);
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