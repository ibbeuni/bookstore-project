<template>
    <div class="wrap">
        <div class="header">
            <div class="list center">
            </div>
        </div>
        <!-- 活動輪播圖 -->
        <div style="text-align:center">
            <img style="border-radius: 30px;" width="1200" height="340"
                src="../assets/img/event/event_cover/event_cover004.jpeg" alt="">
        </div>
        <div class="bookname">
            <!-- 分類按鈕 -->
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
            <!-- 所有活動minicover圖片 -->
            <div>
                <ul class="event_list col4">
                    <li class="event_item" v-for="(item, index) in allevent" :key="index">
                        <a :href="('http://localhost:8081/#/home/eventdetail/' + allevent[index].event_id )">
                            <div class="event_area">
                                <div class="event_thumb_box">
                                    <span class="img_box">
                                        <img class=""
                                            v-bind:src="'http://127.0.0.1:3000/img/event/event_minicover/' + allevent[index].event_minicover + '.jpeg'"
                                            alt="">
                                    </span>
                                </div>
                                <div class="event_info_box">
                                    <div class="event_period">活動時間{{ (allevent[index].date_start) }}</div>
                                    <div class="event_period">結束時間{{ (allevent[index].date_end) }}</div>
                                </div>
                            </div>
                        </a>
                    </li>
                </ul>
            </div>
        </div>



        <div class="footer"></div>
    </div>
</template>
<script>
import axios from "axios"

export default {
    data() {
        return {
            allevent: '',
            pageevent: '',
        };
    },
    mounted() {
        axios.get('http://127.0.0.1:3000/eventtable').then(res => {
            this.allevent = res.data;
            this.pageevent = res.data.slice(0, 15);
            console.log(res.data);
            // console.log(this.allevent[1].event_minicover + ".jpeg");
            // console.log(this.imgSrc);
        })
        axios.get(`http://localhost:3000/eventtable${this.id}`).then(res => {
            this.item = res.data;
        }),
            axios.get(`http://localhost:3000/eventtable${this.id}`).then(res => {
                this.bookinfo = res.data;
            })
    },

    methods: {

    }
}
</script>
<style scoped>
.header {
    width: 100%;
    height: 100px;
    background-color: white;
    display: flex;
}

.footer {
    width: 100%;
    height: 100px;
    /* background-color: blue; */
    display: margin-bottom;
}

/* li排列方式 */
li {
    display: inline;
    margin-right: 10px;
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

/* 按鈕觸碰及點擊後樣式 */
button:hover,
button:focus {
    background: #454545;
    color: #cfcece;
}

ul {
    display: block;
    margin-bottom: 20px;
}

/* ul排列 */
.event_list {
    justify-content: center;
}

/* li排列與間隔 */
.event_item {
    display: inline-block;
    list-style-type: none;
    padding: 25px;
    /* border:1px solid #ccc ; */
    position: relative;
    overflow: hidden;
    flex-wrap: wrap;
    /* width: 273;
  height: 148px; */
    /* flex-basis: 60%; */
    /* flex-wrap: wrap; */
}
</style>