<template>

    <div class="wrap">
        <div class="header">
            <div class="list center">
            </div>
        </div>
        <!-- 活動文字內容與時間 -->
        <div class="bookname">
            <div>
                <h2>《就算是空的》 發表活動</h2>
            </div>
            <div>
                <p>2022-10-21~2022-11-20</p>
            </div>
        </div>
        <!-- 活動圖片區 -->
        <div class="bookimg">
            <img src="../assets/img/event/event_info/event_101.jpeg" alt="">
        </div>
        <div class="bookname">
            <!-- 類別按鈕 -->
            <div>
                <ul>
                    <a href="" style="font-size: 25px">其他書籍活動</a><br><br>
                    <li><button><span>所有活動</span></button></li>
                    <li><button><span>收藏</span></button></li>
                    <li><button><span>繪畫</span></button></li>
                    <li><button><span>藝術</span></button></li>
                    <li><button><span>攝影</span></button></li>
                </ul>
            </div>
            <!-- 活動minicover -->
            <div>
                <ul class="liflex" style="display:flex;">
                    <li>
                        <div>
                            <a href="">
                                <div>
                                        <img src="../assets/img/event/event_minicover/event_minicover_101.jpeg" alt="">
                                </div>
                            </a>
                        </div>
                    </li>
                    <li>
                        <div>
                            <a href="">
                                <div>
                                        <img src="../assets/img/event/event_minicover/event_minicover_101.jpeg" alt="">
                                </div>
                            </a>
                        </div>
                    </li>
                    <li>
                        <div>
                            <a href="">
                                <div>
                                        <img src="../assets/img/event/event_minicover/event_minicover_101.jpeg" alt="">
                                </div>
                            </a>
                        </div>
                    </li>
                    <li>
                        <div>
                            <a href="">
                                <div>
                                        <img src="../assets/img/event/event_minicover/event_minicover_101.jpeg" alt="">
                                </div>
                            </a>
                        </div>
                    </li>
                </ul>
            </div>
        </div>



        <div class="footer"></div>
    </div>

</template>
<style scoped>
.header {
    width: 100%;
    height: 100px;
    /* background-color: white; */
    display: flex;
}

.footer {
    width: 100%;
    height: 100px;
    /* background-color: blue; */
    display: margin-bottom;
}

.bookname {
    width: 100%;
    flex-wrap: wrap;
    height: 100%;
    /* background-color: yellowgreen; */
    margin: 30px;
    /* text-align: center; */
}
.bookimg {
    text-align: center;
}
/* 按鈕樣式 */
button {
    display: inline-block;
    text-align: center;
    vertical-align: middle;
    padding: 0px 20px;
    border: 0px solid #e9e8e8;
    border-radius: 50px;
    background: #e9e8e8;
    font: normal normal bold 20px arial;
    color: #272727;
    text-decoration: none;
    text-transform: uppercase
}
/* 按鈕觸碰與點擊後樣式 */
button:hover,
button:focus {
    background: #454545;
    color: #cfcece;
}
/* li編排方式 */
li {
    display: inline;
    margin-right: 10px;
}
.liflex li{
    flex: 25%;
}
</style>