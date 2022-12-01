<template>
    <div class="wrap">
        <!-- HEADER_COMPONENT -->
        <!-- <full-header></full-header> -->

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
                            <prod-list></prod-list>
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
import ProdList from '../components/best/ProdList.vue';

export default {
    components: {
        'bread-crumb': BreadCrumb,
        'aside-nav': AsideNav,
        'section-title': SectionTitle,
        'prod-list': ProdList,
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

</style>