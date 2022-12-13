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
            <today-book></today-book>
            <!-- component: picks -->
            <my-picks></my-picks>
            <!-- component: bestseller -->
            <best-seller></best-seller>
            <!-- component: video -->
            <!-- TODO 改套用Vue幻燈片套件：vue-awesome-swiper -->
            <video-banner></video-banner>
        </main>
    </div>
</template>

<script>
import WelcomeBanner from '../components/index/WelcomeBanner.vue';
import WelcomeMarketing from '../components/index/WelcomeMarketing.vue';
import TodayBook from '../components/index/TodayBook.vue';
import MyPicks from '../components/index/MyPicks.vue';
import BestSeller from '../components/index/BestSeller.vue';
import VideoBanner from '../components/index/VideoBanner.vue';

export default {
    components: {
        'welcome-banner': WelcomeBanner,
        'welcome-marketing': WelcomeMarketing,
        'today-book': TodayBook,
        'my-picks': MyPicks,
        'best-seller': BestSeller,
        'video-banner': VideoBanner,
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

</style>