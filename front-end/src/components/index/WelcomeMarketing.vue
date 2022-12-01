<template>
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
</template>

<script>
export default {
    name: 'WelcomeMarketing'
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

.contents {
    margin: 60px 0px;
    background-color: var(--background-color);
}
.contents-inner {
    /* position: relative; */
    width: 1200px;
    margin: 0 auto;
}
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
    background-color: rgba(245, 245, 245, 0.98);
}
</style>