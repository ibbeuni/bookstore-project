<template>
    <section class="contents">
        <div class="picks-wrap">
            <div class="contents-inner">
                <div class="picks-wrap-inner">
                    <div class="title-wrap">
                        <h2 class="title-heading">Picks</h2>
                        <div class="right-area">
                            <!-- TODO 加上位址 -->
                            <a href="" class="btn-more-plus">
                                <span>看更多 </span>
                                <font-awesome-icon icon="fa-solid fa-plus" />
                            </a>
                        </div>
                    </div>
                    <div class="picks-contents">
                        <div class="picks-left-area">
                            <div class="picks-info-box">
                                <small class="picks-desc">發現的喜悅是一種禮物</small>
                                <h4>我們記得您的口味，<br>
                                    很樂意為您推薦合適的書！
                                </h4>
                            </div>
                            <div class="picks-btn">
                                <a href="/#/login">登入並獲得更多推薦</a>
                            </div>
                        </div>
                        <div class="picks-right-area">
                            <ul class="picks-item-list">
                                <li class="picks-item">
                                    <div class="picks-item-inner">
                                        <div class="img-box">
                                            <img src="@/assets/img/index/picks_item/img_welcome_picks_item_01.png"
                                                alt="">
                                        </div>
                                        <div class="picks-info">
                                            <p class="picks-info-title">綜合推薦</p>
                                            <p class="picks-info-desc">
                                                我們分析了的品味<br>
                                                來看看你朝思暮想的<br>
                                                那本書吧。
                                            </p>
                                        </div>
                                    </div>
                                </li>
                                <li class="picks-item">
                                    <div class="picks-item-inner">
                                        <div class="img-box">
                                            <img src="@/assets/img/index/picks_item/img_welcome_picks_item_02.png"
                                                alt="">
                                        </div>
                                        <div class="picks-info">
                                            <p class="picks-info-title">作家Picks</p>
                                            <p class="picks-info-desc">
                                                來認識看看，<br>
                                                與你喜歡的作家<br>
                                                相似的新作家！<br>
                                            </p>
                                        </div>
                                    </div>
                                </li>
                                <li class="picks-item">
                                    <div class="picks-item-inner">
                                        <div class="img-box">
                                            <img src="@/assets/img/index/picks_item/img_welcome_picks_item_03.png"
                                                alt="">
                                        </div>
                                        <div class="picks-info">
                                            <p class="picks-info-title">隨心所欲Picks</p>
                                            <p class="picks-info-desc">
                                                試試吧！<br>
                                                隨著自己的心情<br>
                                                挑一本書如何？
                                            </p>
                                        </div>
                                    </div>
                                </li>
                                <li class="picks-item">
                                    <div class="picks-item-inner">
                                        <div class="img-box">
                                            <img src="@/assets/img/index/picks_item/img_welcome_picks_item_01.png"
                                                alt="">
                                        </div>
                                        <div class="picks-info">
                                            <p class="picks-info-title">Soulmates Picks</p>
                                            <p class="picks-info-desc">
                                                與你取向相似的<br>
                                                靈魂伴侶們<br>
                                                都在讀什麼書呢？
                                            </p>
                                        </div>
                                    </div>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
</template>

<script>
export default {
    name: 'MyPicks'
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
.contents-inner {
    /* position: relative; */
    width: 1200px;
    margin: 0 auto;
}

/* Picks */
.picks-wrap {
    background-color: rgba(83, 146, 155, 0.18);
}

.picks-wrap-inner {
    padding: 80px 0px;
}

.title-wrap {
    padding-bottom: 30px;
    display: flex;
    justify-content: flex-start;
    flex-direction: row;
}

.right-area {
    display: flex;
    align-items: center;
    justify-content: flex-start;
    margin-left: auto;
    flex-direction: row;
    font-size: 1rem;
}

.picks-contents {
    display: flex;
    justify-content: space-between;
    align-items: center;
}

.picks-left-area {
    width: 327px;
}
.picks-info-box h4 {
    margin-top: 20px;
}
.picks-desc {
    color: var(--primary-color);
}

.picks-btn {
    margin-top: 62px;
    width: 250px;
    height: 50px;
    border-radius: 6px;
    background-color: var(--accent-color);
    display: flex;
    justify-content: center;
    align-items: center;
}

.picks-btn a {
    color: var(--background-color);
    font-weight: 900;
}

.picks-right-area {
    flex: 1;
    margin-left: 25px;
}

.picks-item-list {
    display: flex;
    justify-content: space-between;
}

.picks-item {
    width: 200px;
}

.picks-item-inner {
    width: 100%;
    border-radius: 16px;
}

.img-box {
    border-radius: 16px 16px 0px 0px;
    overflow: hidden;
    height: 180px;
}

.img-box img {
    width: 100%;
    vertical-align: middle;
}

.picks-info {
    height: calc(100% - 180px);
    border: 1px solid #EAEAEA;
    border-radius: 0px 0px 16px 16px;
    padding-top: 20px;
    background-color: var(--background-color);
    box-sizing: border-box;
    text-align: center;
}

.picks-info-title {
    font-weight: bolder;
    margin: 0px;
}

.picks-info-desc {
    font-size: 14px;
    color: var(--neutral-color);
}
</style>