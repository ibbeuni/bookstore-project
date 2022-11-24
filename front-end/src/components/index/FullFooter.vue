<template>
    <footer class="footer-wrapper">
        <div class="contents-inner">
            <div class="footer-inner">
                <div class="service-group-area">
                    <div class="service-group-box">
                        <small class="group-name">關於我們</small>
                        <ul class="service-list">
                            <li class="service-item">
                                <!-- TODO 如有連結補上 -->
                                <a href=""><small>品牌故事</small></a>
                            </li>
                            <li class="service-item">
                                <!-- TODO 如有連結補上 -->
                                <a href=""><small>服務條款</small></a>
                            </li>
                            <li class="service-item">
                                <!-- TODO 如有連結補上 -->
                                <a href=""><small>隱私政策</small></a>
                            </li>
                            <li class="service-item">
                                <!-- TODO 如有連結補上 -->
                                <a href=""><small>異業合作</small></a>
                            </li>
                        </ul>
                    </div>
                    <div class="service-group-box">
                        <small class="group-name">購物指南</small>
                        <ul class="service-list">
                            <li class="service-item">
                                <!-- TODO 如有連結補上 -->
                                <a href=""><small>優惠券／商品券</small></a>
                            </li>
                            <li class="service-item">
                                <!-- TODO 如有連結補上 -->
                                <a href=""><small>書店禮品卡</small></a>
                            </li>
                            <li class="service-item">
                                <!-- TODO 如有連結補上 -->
                                <a href=""><small>企業採購</small></a>
                            </li>
                        </ul>
                    </div>
                    <div class="service-group-box">
                        <small class="group-name">配送及退換貨</small>
                        <ul class="service-list">
                            <li class="service-item">
                                <!-- TODO 如有連結補上 -->
                                <a href=""><small>會員常見問題</small></a>
                            </li>
                            <li class="service-item">
                                <!-- TODO 如有連結補上 -->
                                <a href=""><small>購物常見問題</small></a>
                            </li>
                            <li class="service-item">
                                <!-- TODO 如有連結補上 -->
                                <a href=""><small>配送取貨時間</small></a>
                            </li>
                            <li class="service-item">
                                <!-- TODO 如有連結補上 -->
                                <a href=""><small>退換貨及退款</small></a>
                            </li>
                        </ul>
                    </div>
                    <div class="service-group-box">
                        <small class="group-name">聯絡我們</small>
                        <ul class="service-list">
                            <li class="service-item">
                                <!-- TODO 如有連結補上 -->
                                <a href=""><small>營業時間：10:00-22:00</small></a>
                            </li>
                            <li class="service-item">
                                <!-- TODO 如有連結補上 -->
                                <a href=""><small>聯絡電話：04-12345678</small></a>
                            </li>
                            <li class="service-item">
                                <!-- TODO 如有連結補上 -->
                                <a href="xxx@ispan.com"><small>E-mail：xxx@ispan.com</small></a>
                            </li>
                            <li class="service-item">
                                <!-- TODO 如有連結補上 -->
                                <a href="https://goo.gl/maps/YazNrB8v4wqSpAqh8"><small>地址：台中市公益路二段51號</small></a>
                            </li>
                        </ul>
                    </div>
                    <div class="service-group-box footer-right">
                        <small class="group-name">社群媒體</small>
                        <div class="social-media">
                            <a href="#" target="_blank">
                                <div class="social-media-icon facebook">
                                    <font-awesome-icon icon="fa-brands fa-facebook-f" />
                                </div>
                            </a>
                            <a href="https://www.instagram.com/sweetspot920/" target="_blank">
                                <div class="social-media-icon instagram">
                                    <font-awesome-icon icon="fa-brands fa-instagram" />
                                </div>
                            </a>
                            <a href="https://www.youtube.com/channel/UCwy3MJXaPj0de0p2cUn9HLw/featured" target="_blank">
                                <div class="social-media-icon youtube">
                                    <font-awesome-icon icon="fa-brands fa-youtube" />
                                </div>
                            </a>
                        </div>
                        <div class="find-us">
                            <div class="find-us-icon">
                                <font-awesome-icon icon="fa-solid fa-magnifying-glass" />
                            </div>
                            <div class="find-us-text">
                                <span>藝・Bookstore</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </footer>
</template>

<script>
export default {
    name: 'FullFooter'
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

.contents-inner {
    /* position: relative; */
    width: 1200px;
    margin: 0 auto;
}

.footer-wrapper {
    margin-top: 60px;
    padding: 40px 0 50px;
    border-top: 1px solid #EAEAEA;
    background-color: #F7F7F7;
}

.footer-inner {
    display: flex;
    justify-content: center;
    align-items: center;
}

.service-group-area {
    display: flex;
    width: 100%;
    justify-content: flex-start;
}

.service-group-box {
    flex: 1;
    padding: 0px 15px;
    border-right: 1px solid #EAEAEA;
}

.footer-right {
    border-right: none;
}

.group-name {
    font-weight: 900;
}

.service-list {
    display: block;
    margin-block-start: 1em;
    margin-block-end: 1em;
    margin-inline-start: 0px;
    margin-inline-end: 0px;
    /* padding-inline-start: 40px; */
}

.service-item {
    display: list-item;
    padding: 8px 0px;
}

.service-item a {
    color: var(--neutral-color);
}

.social-media {
    display: flex;
    margin: 2rem 0px;
}

.social-media-icon {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 3.3rem;
    height: 3.3rem;
    margin-right: 0.8rem;
    border-radius: 50%;
    font-size: 2rem;
    color: var(--background-color);
}

.facebook {
    background-color: #3C5996;
}

.instagram {
    background-color: #D84A62;
}

.youtube {
    background-color: #FE0000;
}

.find-us {
    border: 1px solid;
    border-radius: 10px;
    width: 12rem;
    height: 3rem;
    display: flex;
    align-items: center;
    font-size: 1.2rem;
    color: var(--font-color);
}

.find-us-icon {
    display: flex;
    justify-content: center;
    align-items: center;
    margin: 0px 0.7rem;
}

.find-us-text {
    letter-spacing: 2px;
    font-size: 1rem;
}

</style>