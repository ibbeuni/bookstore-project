<template>
    <div>
        <input v-model="k" type="text" /> <button @click="yy">送出</button>
        <!-- {{s}} -->
        <!-- <div v-for="item in s" :key="item.id">
            {{ item.age }}
        </div> -->
        <test-test :ww="t"></test-test>
    </div>

</template>

<script>
import TestTest from '../components/best/TestTest.vue'

export default {
    components: {
        'test-test': TestTest,
    },
    data() {
        return {
            k: 2,
            e: 1,
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
            return this.a.filter( b => b.age > this.t );
        }
    }
}

</script>



<style scoped>

</style>