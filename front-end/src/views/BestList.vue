<template>
    <div class="wrap">
        <!-- HEADER_COMPONENT -->
        <full-header></full-header>
        <!-- breadcrumb_wrap -->
        <main>
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

.contents-inner {
    /* position: relative; */
    width: 1200px;
    margin: 0 auto;
}

/* breadcrumb */
ol {
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

li {
    padding: 0 10px;
}
</style>