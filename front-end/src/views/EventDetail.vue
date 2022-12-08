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
        <div class="bookimg" v-for="(item, index) in allevent" :key="index">
            <img class=""
                v-bind:src="'http://127.0.0.1:3000/img/event/event_info/' + allevent[index].event_1 + '.jpeg'"
                alt="">
        </div>
        <div class="bookname">
            <!-- 類別按鈕 -->
            <div>
                <ul>
                    <a href="http://localhost:8081/#/home/eventpage" style="font-size: 25px">其他書籍活動</a><br><br>
                    <li class="linkLi"><button><span>所有活動</span></button></li>
                    <li class="linkLi"><button><span>收藏</span></button></li>
                    <li class="linkLi"><button><span>繪畫</span></button></li>
                    <li class="linkLi"><button><span>藝術</span></button></li>
                    <li class="linkLi"><button><span>攝影</span></button></li>
                </ul>
            </div>
            <!-- 活動minicover -->
            <div>
                <ul class="event_list col4">
                    <li class="event_item" v-for="(item, index) in allevent" :key="index">
                        <div>
                            <a :href="('http://localhost:8081/#/home/eventdetail/' + allevent[index].event_1)">
                                <div>
                                    <img class=""
                                        v-bind:src="'http://127.0.0.1:3000/img/event/event_minicover/' + allevent[index].event_minicover + '.jpeg'"
                                        alt="">
                                </div>
                            </a>
                        </div>
                        <div class="event_info_box">
                            <div class="event_period">活動時間{{ (allevent[index].date_start) }}</div>
                            <div class="event_period">結束時間{{ (allevent[index].date_end) }}</div>
                        </div>
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
            otherevent: '',
        };
    },
    mounted() {
        axios.get('http://127.0.0.1:3000/eventtable').then(res => {
            this.allevent = res.data;
            var a = res.data;
            this.otherVideo = a.slice(0, 5);
            console.log(a);
            console.log(this.otherevent);
            console.log(res.data);
            // console.log(this.allevent[1].event_minicover + ".jpeg");
            // console.log(this.imgSrc);
        }),
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
.linkLi {
    display: inline;
    margin-right: 10px;
}

/* ul {
  display: block;
  margin-bottom: 20px;
} */
.event_list {
    justify-content: center;
}

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