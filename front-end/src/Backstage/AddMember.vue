<template>
    <div>
        新增頁面
    </div>
</template>

<script>
export default {
    data() {
        return {
            b: ''
        }
    },
    mounted() {
        console.log(this.$route.params)
    },
}
</script>