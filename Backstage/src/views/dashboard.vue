<template>
    <div>
        <el-row :gutter="20">
            <el-col :span="8">
                <el-card shadow="hover" class="mgb20" style="height: 252px">
                    <div class="user-info">
                        <el-avatar :size="120" :src="imgurl" />
                        <div class="user-info-cont">
                            <div class="user-info-name">{{ name }}</div>
                            <div>{{ role }}</div>
                        </div>
                    </div>
                    <div class="user-info-list">
                        上次登錄時間：
                        <span>2022-10-01</span>
                    </div>
                    <div class="user-info-list">
                        上次登錄地点：
                        <span>台中</span>
                    </div>
                </el-card>
                <!-- <el-card shadow="hover" style="height: 252px">
                    <template #header>
                        <div class="clearfix">
                            <span>商品庫存</span>
                        </div>
                    </template>
                    收藏/鑑賞
                    <el-progress :percentage="31.7" color="#42b983"></el-progress>
                    繪畫
                    <el-progress :percentage="18.3" color="#f1e05a"></el-progress>
                    藝術
                    <el-progress :percentage="29.9"></el-progress>
                    攝影
                    <el-progress :percentage="20.1" color="#f56c6c"></el-progress>
                </el-card> -->
            </el-col>
            <el-col :span="16">
                <el-row :gutter="20" class="mgb20">
                    <el-col :span="8">
                        <el-card shadow="hover" :body-style="{ padding: '0px' }">
                            <div class="grid-content grid-con-1">
                                <el-icon class="grid-con-icon">
                                    <Goods />
                                </el-icon>
                                <div class="grid-cont-right">
                                    <div class="grid-num">1234</div>
                                    <div>收藏書籍數量</div>
                                </div>
                            </div>
                        </el-card>
                    </el-col>
                    <el-col :span="8">
                        <el-card shadow="hover" :body-style="{ padding: '0px' }">
                            <div class="grid-content grid-con-2">
                                <el-icon class="grid-con-icon">
                                    <Goods />
                                </el-icon>
                                <div class="grid-cont-right">
                                    <div class="grid-num">321</div>
                                    <div>繪畫書籍數量</div>
                                </div>
                            </div>
                        </el-card>
                    </el-col>
                    <el-col :span="8">
                        <el-card shadow="hover" :body-style="{ padding: '0px' }">
                            <div class="grid-content grid-con-3">
                                <el-icon class="grid-con-icon">
                                    <Goods />
                                </el-icon>
                                <div class="grid-cont-right">
                                    <div class="grid-num">5000</div>
                                    <div>藝術書籍數量</div>
                                </div>
                            </div>
                        </el-card>
                    </el-col>
                    <el-col :span="8">
                        <el-card shadow="hover" :body-style="{ padding: '0px' }">
                            <div class="grid-content grid-con-4">
                                <el-icon class="grid-con-icon">
                                    <Goods />
                                </el-icon>
                                <div class="grid-cont-right">
                                    <div class="grid-num">5000</div>
                                    <div>攝影書籍數量</div>
                                </div>
                            </div>
                        </el-card>
                    </el-col>
                    <el-col :span="8">
                        <el-card shadow="hover" :body-style="{ padding: '0px' }">
                            <div class="grid-content grid-con-5">
                                <el-icon class="grid-con-icon">
                                    <Goods />
                                </el-icon>
                                <div class="grid-cont-right">
                                    <div class="grid-num">5000</div>
                                    <div>總書籍數量</div>
                                </div>
                            </div>
                        </el-card>
                    </el-col>
                </el-row>
                <el-card shadow="hover" style="height: 403px">
                    <template #header>
                        <div class="clearfix">
                            <span>代辦事项</span>
                            <el-button style="float: right; padding: 3px 0" text>添加</el-button>
                        </div>
                    </template>

                    <el-table :show-header="false" :data="todoList" style="width: 100%">
                        <el-table-column width="40">
                            <template #default="scope">
                                <el-checkbox v-model="scope.row.status"></el-checkbox>
                            </template>
                        </el-table-column>
                        <el-table-column>
                            <template #default="scope">
                                <div class="todo-item" :class="{
                                    'todo-item-del': scope.row.status
                                }">
                                    {{ scope.row.title }}
                                </div>
                            </template>
                        </el-table-column>
                    </el-table>
                </el-card>
            </el-col>
        </el-row>
    </div>
</template>

<script setup lang="ts" name="dashboard">
import Schart from 'vue-schart';
import { reactive } from 'vue';
import imgurl from '../assets/img/img.jpg';
import { ref } from '@vue/runtime-core'
import axios from 'axios'
    // export default {
    //     data() {
    //         return {
    //             alltotal: '',
    //         };
    //     },
    //     mounted() {
    //         axios.get('http://127.0.0.1:3000/total').then(res => {
    //             this.alltotal = res.data;
    //             console.log(res.data);
    //             // console.log(this.imgSrc);
    //         })
    //     },
    //     methods: {
    //         // get() {
    //         //     axios.get('http://127.0.0.1:3000/total').then(res => {
    //         //         console.log(res.data[0]);
    //         //     }).catch(err => {
    //         //         console.log("失敗" + err);
    //         //     })
    //         // }
    //     }
    // }
    // //伺服器 與 params
    // const url = "http://localhost:3000/sales"
    // const urlParams="warning"
    // //接收伺服器的回傳資料
    // const resData = ref()

    // const getAxios = function(){
    //     axios.get(`http://${url}/userstatus`,
    //         { params : {status: urlParams } }
    //     ).then((res)=>{
    //         //獲取伺服器的回傳資料
    //         resData.value = res.data
    //     })
    //     .catch((error)=>{
    //         console.log(error,'失敗');
    //     })
    // }
    // //執行Axios
    // getAxios()

const name = localStorage.getItem('ms_username');
const role: string = name === 'admin' ? '超级管理员' : '普通用户';

const todoList = reactive([
    {
        title: '一堆bug修不完',
        status: false
    },
    {
        title: '今天更多bug',
        status: false
    },
    {
        title: '今天要想100行code加幾個bug吧',
        status: false
    },
    {
        title: '今天要修復100個bug',
        status: false
    },
    {
        title: '今天要修复1個bug',
        status: true
    },
    {
        title: '今天要寫行代碼加個个bug吧',
        status: true
    }
])

</script>

<style scoped>
.el-row {
    margin-bottom: 20px;
}

.grid-content {
    display: flex;
    align-items: center;
    height: 100px;
}

.grid-cont-right {
    flex: 1;
    text-align: center;
    font-size: 14px;
    color: #999;
}

.grid-num {
    font-size: 30px;
    font-weight: bold;
}

.grid-con-icon {
    font-size: 50px;
    width: 100px;
    height: 100px;
    text-align: center;
    line-height: 100px;
    color: #fff;
}

.grid-con-1 .grid-con-icon {
    background: rgb(45, 140, 240);
}

.grid-con-1 .grid-num {
    color: rgb(45, 140, 240);
}

.grid-con-2 .grid-con-icon {
    background: rgb(100, 213, 114);
}

.grid-con-2 .grid-num {
    color: rgb(100, 213, 114);
}

.grid-con-3 .grid-con-icon {
    background: rgb(242, 94, 67);
}

.grid-con-3 .grid-num {
    color: rgb(242, 94, 67);
}
.grid-con-4 .grid-con-icon {
    background: rgb(242, 227, 67);
}

.grid-con-4 .grid-num {
    color:rgb(242, 227, 67);
}
.grid-con-5 .grid-con-icon {
    background: rgb(149, 67, 242);
}

.grid-con-5 .grid-num {
    color: rgb(149, 67, 242);
}

.user-info {
    display: flex;
    align-items: center;
    padding-bottom: 20px;
    border-bottom: 2px solid #ccc;
    margin-bottom: 20px;
}

.user-info-cont {
    padding-left: 50px;
    flex: 1;
    font-size: 14px;
    color: #999;
}

.user-info-cont div:first-child {
    font-size: 30px;
    color: #222;
}

.user-info-list {
    font-size: 14px;
    color: #999;
    line-height: 25px;
}

.user-info-list span {
    margin-left: 70px;
}

.mgb20 {
    margin-bottom: 20px;
}

.todo-item {
    font-size: 14px;
}

.todo-item-del {
    text-decoration: line-through;
    color: #999;
}

.schart {
    width: 100%;
    height: 300px;
}
</style>
