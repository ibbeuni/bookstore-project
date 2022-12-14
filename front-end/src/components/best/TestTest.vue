<template>
    <div>
        <!-- <input v-model="k" type="text" /> <button @click="yy">送出</button> -->
        <!-- {{s}} -->
        <div v-for="item in s" :key="item.id">
            {{ item.age }}
        </div>
        <!-- {{ww}} -->
    </div>

</template>

<script>
export default {
    // name: 'TestTest',
    props: ["ww"],
    data() {
        return {
            k: 2,
            t: 0,
            a: [
            {age: 1},
            {age: 2},
            {age: 3},
        ],
        }
    },
    methods: {
        yy() {
            this.t = this.k
            this.k = ""
        }
    },
    mounted() {
        const result = this.a.filter( b => b.age > this.t );
        // 將a陣列依照條件篩選成b陣列

        console.log(result);
        // expected output: Array ["exuberant", "destruction", "present"]
    },
    computed: {
        s() {
            return this.a.filter( b => b.age > this.ww );
        }
    }
}

</script>



<style scoped>

</style>