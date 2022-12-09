<template>
    
    <div class="bg-wrap">
        <test-swiper></test-swiper>
    </div>
</template>

<script>
import TestSwiper from '../views/TestPage.vue';
export default {
    name: 'TestSwiper',
    components: {
        'test-swiper': TestSwiper,
    },
}

</script>



<style scoped>

.bg-wrap {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
    height: 100vh;
    color: #5e5f6b;
    font-weight: bolder;
    background-color: #f0efea;
}

.card-wrap {
    display: flex;
    flex-direction: column;
    width: 400px;
    height: 80vh;
    padding: 40px 0;
    background: #fff;
    box-shadow: 0 0 5px rgba(0, 0, 0, 0.1);
}
/*標題*/
.header-wrap {
    display: flex;
    height: 50px;
    margin-bottom: 50px;
    justify-content: space-between;
    align-items: center;
    color: #5f6270;
    padding: 0 40px;
}

.date-wrap {
    display: flex;
    font-size: 50px;
}

.date-wrap > div:first-child {
    margin-right: 10px;
    font-weight: bolder;
}

.date-wrap > div:nth-child(2) {
    display: flex;
    flex-direction: column;
    justify-content: space-around;
}

.date-text {
    font-size: 16px;
}
/*新增列*/
.add-wrap {
    display: flex;
    line-height: 40px;
    margin-bottom: 30px;
    padding: 0 40px;
}

.add-input {
    flex: 1;
    margin-right: 15px;
    color: #44454e;
    background-color: #fff;
    border: none;
    border-bottom: 1.5px solid #6cd4b4;
}

.add-input::placeholder {
    color: #b9b9b9;
}

.add-btn {
    padding: 0 15px;
    background-color: #6cd4b4;
    color: #fff;
    border-radius: 20px;
}

.add-btn:hover {
    filter: brightness(1.1);
    cursor: pointer;
}
/*筆數*/
.count-wrap{
    padding: 0 40px;
    margin-bottom: 30px;
    display: flex;
}
/*列表*/
.list-wrap {
    overflow: auto;
    padding: 0 20px;
    margin: 0 20px;
}

.todo-item {
    display: flex;
    line-height: 40px;
    margin-bottom: 20px;
    align-items: center;
}

.content {
    flex: 1;
    margin: 0 10px;
}

.delete-btn {
    color: #e0e0e0;
}

.delete-btn:hover {
    color: #6cd4b4;
    cursor: pointer;
}

.check-todo {
    width: 15px;
    height: 15px;
}

.check-todo:hover {
    cursor: pointer;
}

.check-todo-checked{
    color: #b9b9b9;
    text-decoration: line-through;
}
</style>