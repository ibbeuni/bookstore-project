<template>
  <div>
    <p><label for="title">會員姓名:</label><input v-model="memberData.name" type="text" required /></p>
    <p><label for="title">會員信箱:</label><input v-model="memberData.email" type="text" required /></p>
    <p><label for="title">會員密碼:</label><input v-model="memberData.password" type="text" required /></p>
    <p><label for="title">書會員電話:</label><input v-model="memberData.phone" type="text" required /></p>
    <p><label for="title">會員地址:</label><input v-model="memberData.address" type="text" required /></p>
    <p><label for="title">會員性別:</label><input v-model="memberData.gender" type="text" required /></p>
    <p><label for="title">會員生日:</label><input v-model="memberData.birth" type="text" required /></p>

    <div>
      <button class="buttomStyle" style="width: 150px; height: 50px">
        新增會員
      </button>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      b: "",
      memberData:{},
    };
  },
  mounted() {
    if(this.$route.params['name'] != undefined){
        console.log(this.$route.params)
        this.memberData = this.$route.params
    }else{
        console.log("空")
    }
  },
};
</script>