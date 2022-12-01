<template>
    <section class="contents">
        <div class="video-banner-wrap">
            <div class="contents-inner">
                <div class="contents-inner">
                    <!-- 標題 -->
                    <div class="title-wrap">
                        <h2 class="title-heading">線上讀書會</h2>
                        <div class="right-area">
                            <!-- TODO 加上位址 -->
                            <a href="" class="btn-more-plus">
                                <span>看更多 </span>
                                <font-awesome-icon icon="fa-solid fa-plus" />
                            </a>
                        </div>
                    </div>
                    <div class="video-swiper-container">
                        <ul class="video-swiper-wrapper">
                            <li class="video-swiper-slide">
                                <div class="video-banner-area">
                                    <div class="video-title-box">
                                        <h2>我是影片的標題</h2>
                                        <small>與談人姓名</small>
                                    </div>
                                    <div class="video-visual-box">
                                        <div class="prod-area">
                                            <div class="prod-thumb-box">
                                                <a href="">
                                                    <img src="@/assets/img/books/30101.png" alt="">
                                                </a>
                                                <p>書籍名稱</p>
                                            </div>
                                        </div>
                                        <div class="video-frame-wrap">
                                            <iframe width="685px" height="403px"
                                                src="https://www.youtube.com/embed/K2vBHUUqWoI"
                                                title="YouTube video player" frameborder="0"
                                                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                                                allowfullscreen></iframe>
                                        </div>
                                    </div>
                                </div>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    </section>
</template>

<script>
export default {
    name: 'VideoBanner'
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

/* casting */
.video-banner-wrap {
    position: relative;
    /* background-color: red; */
}

.video-swiper-container {
    /* background-color: aqua; */
    width: 100%;
    margin: 0 auto;
    padding: 0;
    z-index: 99;
}

.video-swiper-wrapper {
    /* background-color: red; */
    width: 100%;
    height: 100%;
    display: flex;
    box-sizing: content-box;
}

.video-swiper-slide {
    height: 100%;
    width: 100%;
}

.video-banner-area {
    display: flex;
    justify-content: center;
    width: 100%;
    height: 300px;
    
}

.video-title-box {
    padding-right: 30px;
    margin-right: auto;
}

.video-visual-box {
    display: flex;
    margin-left: 30px;
    position: relative;
}

.prod-area {
    width: 118px;
    margin: auto auto 0;
    /* margin-right: 36px;
    margin-top: auto; */
}

.prod-thumb-box {
    margin-top: auto;
}

.prod-thumb-box img {
    width: 118px;
}

.video-frame-wrap {
    border-radius: 18px;
    overflow: hidden;
    margin-left: 30px;
    width: 100%;
    height: 100%;
}
</style>