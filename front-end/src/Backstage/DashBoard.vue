<template>
    <div class="container">
        <div class="iconline">
            <div>
                <font-awesome-icon class="iconSize" icon="fa-solid fa-book" style="color:pink;"/>
                <p>收藏書籍數量</p>
                <p>183</p>
            </div>
            <div>
                <font-awesome-icon class="iconSize" icon="fa-solid fa-book" style="color:bisque;"/>
                <p>繪畫書籍數量</p>
                <p >179</p>
            </div>
            <div>
                <font-awesome-icon class="iconSize" icon="fa-solid fa-book" style="color:Indianred;"/>
                <p>藝術書籍數量</p>
                <p>194</p>
            </div>
            <div>
                <font-awesome-icon class="iconSize" icon="fa-solid fa-book" style="color:blue;"/>
                <p>攝影書籍數量</p>
                <p>207</p>
            </div>
            <div>
                <font-awesome-icon class="iconSize" icon="fa-solid fa-book" style="color:yellow;"/>
                <p>總書籍數量</p>
                <p>763</p>
            </div>
        </div>
        <div>
            <div class="schart-box">
                <div class="content-title">柱狀圖</div>
                <schart class="schart" canvasId="bar" :options="options1"></schart>
            </div>
            <div class="schart-box">
                <div class="content-title">折線圖</div>
                <schart class="schart" canvasId="line" :options="options2"></schart>
            </div>
        </div>
    </div>
</template>

<script setup lang="ts" name="basecharts">
// import axios from "axios"
import Schart from 'vue-schart';

const options1 = {
    type: 'bar',
    title: {
        text: '最近一周各類書籍銷售'
    },
    bgColor: '#fbfbfb',
    labels: ['周一', '周二', '周三', '周四', '周五', '週六', '週日'],
    datasets: [
        {
            label: '收藏/鑑賞',
            fillColor: 'rgba(241, 49, 74, 0.5)',
            data: [11, 14, 12, 17, 8, 19, 17]
        },
        {
            label: '繪畫',
            data: [21, 22, 14, 15, 17, 23, 25]
        },
        {
            label: '藝術',
            data: [12, 14, 17, 12, 18, 21, 16]
        },
        {
            label: '攝影',
            data: [22, 25, 27, 21, 12, 14, 17]
        },
    ]
};
const options2 = {
    type: 'line',
    title: {
        text: '近月各類書籍銷售走勢圖'
    },
    bgColor: '#fbfbfb',
    labels: ['9月', '10月', '11月'],
    datasets: [
        {
            label: '收藏/鑑賞',
            data: [121, 137, 145]
        },
        {
            label: '繪畫',
            data: [150, 169, 146]
        },
        {
            label: '藝術',
            data: [134, 137, 153]
        },
        {
            label: '攝影',
            data: [147, 161, 153]
        },
    ]
};
</script>

<style scoped>
p{
    font-size: 24px;
}
.schart-box {
    display: inline-block;
    margin: 20px;
}

.schart {
    width: 600px;
    height: 400px;
}

.content-title {
    clear: both;
    font-weight: 400;
    line-height: 50px;
    margin: 10px 0;
    font-size: 22px;
    color: #1f2f3d;
}

.iconSize {
    font-size: 50px;
}

.iconline {
    display: flex;
    text-align: center
}

.iconline div {
    margin: 0 auto;
}
</style>
