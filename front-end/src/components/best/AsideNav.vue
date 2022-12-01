<template>
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
                        <a href="" class="snb-line">
                            <h5>綜合</h5>
                        </a>
                    </li>
                    <li class="snb-item">
                        <!-- TODO 加入連結 -->
                        <a href="" class="snb-line">
                            <h5>繪畫</h5>
                        </a>
                    </li>
                    <li class="snb-item">
                        <!-- TODO 加入連結 -->
                        <a href="" class="snb-line">
                            <h5>攝影</h5>
                        </a>
                    </li>
                    <li class="snb-item">
                        <!-- TODO 加入連結 -->
                        <a href="" class="snb-line">
                            <h5>藝術</h5>
                        </a>
                    </li>
                    <li class="snb-item">
                        <!-- TODO 加入連結 -->
                        <a href="" class="snb-line">
                            <h5>鑑賞</h5>
                        </a>
                    </li>
                </ul>
            </div>
        </div>
    </aside>

</template>

<script>

export default {
    name: 'AsideNav'
}

</script>

<style scoped>
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

.snb-list {
    list-style: none;
    padding: 0;
    margin-block-start: 1em;
    margin-block-end: 1em;
    /* padding-inline-start: 40px; */
}

.snb-item {
    display: list-item;
}

.snb-line h5 {
    margin-bottom: 2rem;
    line-height: 23px;
}
</style>