<template>
    <section class="contents">
        <div class="video-banner-wrap" v-for="(item, index) in products" :key="index">
            <div class="swiper-container">
                <ul class="swiper-wrapper">
                    <li class="swiper-slide">
                        <div class="blur-img-box">
                            <!-- <img src="@/assets/img/index/video_banner/v-banner01.jpg" alt=""> -->
                            <img v-bind:src="'http://127.0.0.1:3000/img/video/' + products[index].video_title_img + '.jpg'" alt="">
                        </div>
                    </li>
                </ul>
            </div>
            <div class="contents-inner">
                <!-- VIDEO_CONTENTS -->
                <div class="video-contents">
                    <div class="title-wrap">
                        <h2 class="title-heading">線上讀書會</h2>
                        <div class="right-area">
                            <a href="/#/home/videopage" class="btn-more-plus">
                                <span>看更多 </span>
                                <font-awesome-icon icon="fa-solid fa-plus" />
                            </a>
                        </div>
                    </div>
                    <!-- swiper-container -->
                    <div class="swiper-container-fade">
                        <ul class="swiper-wrapper-fade">
                            <li class="swiper-slide-fade">
                                <div class="video-banner-area">
                                    <div class="video-title-box">
                                        <h2 class="video-title">{{ products[index].video_name }}</h2>
                                        <p class="video-class">{{ products[index].video_class }}</p>
                                        <h2 class="video-title">{{otherVideo[0].product_name}}</h2>
                                        <small class="video-host">{{otherVideo[0].auther}}</small>
                                    </div>
                                    <div class="video-visual-box">
                                        <div class="prod-area">
                                            <div class="prod-thumb-box">
                                                <a href="">
                                                    <div class="img-box">
                                                        <img v-bind:src="'http://127.0.0.1:3000/img/books/' + products[index].product_id + '01.png'" alt="">
                                                        <img src="@/assets/img/books/31001.png" alt="">
                                                    </div>
                                                </a>
                                            </div>
                                            <div class="prod-info-box">
                                                <a :href="'/#/home/product/' + products[index].product_id">
                                                    <span class="prod-auther">{{ products[index].auther }}</span>
                                                </a>
                                            </div>
                                        </div>
                                        <a href="/#/home/videopage" class="video-img-link">
                                            <div class="img-wrap">
                                                <div class="play-btn">
                                                    <font-awesome-icon icon="fa-solid fa-play" />
                                                </div>
                                            </div>
                                        </a>
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
import axios from 'axios';
export default {
    name: 'VideoBanner',
  
    data() {
        return {
            products:'',
        }
    },
    mounted() {
        axios.get('http://127.0.0.1:3000/random_video').then(res => {
            this.products = res.data;
        })
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

.contents {
    margin: 60px 0px;
    background-color: var(--background-color);
}

.contents-inner {
    /* position: relative; */
    width: 1200px;
    margin: 0 auto;
}

/* casting */
.video-banner-wrap {
    position: relative;
}

.swiper-container {
    position: absolute;
    width: 100%;
    height: 470px;
    left: 0;
    top: 0;
    margin: 0 auto;
}

.swiper-wrapper {
    position: relative;
    width: 100%;
    height: 100%;
    display: flex;
    z-index: 1;
    box-sizing: content-box;
}

.swiper-slide {
    display: list-item;

}

.blur-img-box {
    position: absolute;
    top: 0;
    left: 0;
    z-index: 2;
    overflow: hidden;
    width: 100%;
    height: 100%;
    background-color: rgba(0, 0, 0, 0.6);
}

.blur-img-box img {
    display: block;
    width: 100%;
    top: 50%;
    left: 0;
    transform: translateY(-50%);
    position: absolute;
    /* vertical-align: middle; */
}

.video-contents {
    position: relative;
    padding-top: 107px;
    z-index: 2;
}

.title-wrap {
    padding-bottom: 30px;
    position: relative;
    display: flex;
    justify-content: flex-start;
    align-items: center;
    flex-direction: row;
}

.title-heading {
    line-height: 40px;
    display: inline-block;
    position: relative;
    color: var(--background-color);
}

.right-area {
    display: flex;
    align-items: center;
    justify-content: flex-start;
    margin-left: auto;
    flex-direction: row;
    font-size: 1rem;
}

.btn-more-plus {
    color: var(--background-color);
}

.swiper-container-fade {
    margin: 0 auto;
    position: relative;
    overflow: hidden;
    list-style: none;
    padding: 0;
    z-index: 1;
}

.swiper-wrapper-fade {
    position: relative;
    width: 100%;
    height: 100%;
    z-index: 1;
    display: flex;
    box-sizing: content-box;

}

.swiper-slide-fade {
    width: 1200px;
    opacity: 1;
    position: relative;
    display: list-item;
}

.video-banner-area {
    display: flex;
    justify-content: space-between;
    align-items: flex-start;
    flex-direction: row;
}

.video-title-box {
    flex: 1;
    color: var(--background-color);
    padding-right: 30px;
}

.video-title {
    overflow: hidden;
    max-height: 120px;
    line-height: 40px;
    color: var(--background-color);
}

.video-class {
    margin-top: 17px;
    line-height: 23px;
    color: var(--background-color);
}

.video-visual-box {
    display: flex;
    justify-content: space-between;
    align-items: flex-end;
    flex-direction: row;
}

.prod-area {
    width: 118px;
    margin-right: 36px;
    margin: auto auto 0;
    margin-top: auto;
}

.prod-thumb-box {
    width: 118px;
    position: relative;
    overflow: hidden;
    margin-top: auto;
}

.img-box {
    overflow: hidden;
    position: relative;
    box-sizing: border-box;
    cursor: pointer;
}

.prod-thumb-box img {
    max-height: calc((118px - 2px) * 1.168 - 10px);
    width: 100%;
    min-height: 50px;
    vertical-align: middle;
    border: 0;
}

.prod-info-box {
    margin-top: 16px;
}

.prod-auther {
    color: var(--font-color);
}

.video-img-link {
    display: block;
    width: 685px;
    height: 403px;
    border-radius: 30px;
    overflow: hidden;
    text-decoration: none;
    cursor: pointer;
    margin-left: 50px;
}

.img-wrap {
    /* background-image:url('@/assets/img/index/video_banner/v-box01.jpg'); */
    height: 100%;
    background-size: cover;
    background-repeat: no-repeat;
    background-position: center;
    display: flex;
    justify-content: center;
    align-items: center;
}

.play-btn {
    width: 70px;
    height: 70px;
    color: var(--background-color);
    font-size: 30px;
    border: 1px solid #fff;
    border-radius: 50%;
    display: flex;
    justify-content: center;
    align-items: center;
}

.hidden {
    display: none;
}
</style>