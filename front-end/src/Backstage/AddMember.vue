<template>
  <div>
    <p>
      <label for="title">會員姓名:</label
      ><input v-model="memberData.member_name" type="text" required />
    </p>
    <p>
      <label for="title">會員信箱:</label
      ><input v-model="memberData.member_id" type="text" required />
    </p>
    <p>
      <label for="title">會員密碼:</label
      ><input v-model="memberData.member_password" type="text" required />
    </p>
    <p>
      <label for="title">書會員電話:</label
      ><input v-model="memberData.member_phone" type="text" required />
    </p>
    <p>
      <label for="title">會員地址:</label
      ><input v-model="memberData.member_address" type="text" required />
    </p>
    <p>
      <label for="title">會員生日:</label
      ><input v-model="memberData.member_birthday" type="text" required />
    </p>

    <div>
<<<<<<< HEAD
      <button @click="updateMember(item)" class="buttomStyle" style="width: 150px; height: 50px" >
=======
      <button
        @click="addMember"
        class="buttomStyle"
        style="width: 150px; height: 50px"
      >
>>>>>>> e8b75a76f0b3e2905cb8a49bc7fbbfee92c03f44
        新增與修改會員
      </button>
    </div>
  </div>
</template>

<script>
import axios from "axios";
export default {
  data() {
    return {
      b: "",
      memberData: {},
    };
  },
  methods: {
<<<<<<< HEAD
     updateMember(item) {
      this.$router.push({
        name: "memberlist",
        params: item,
=======
    addMember() {
      let data = this.memberData;
      data["member_passwordCfrm"] = "123456";
      axios.post("http://127.0.0.1:3000/acc/", { data }).then((res) => {
        if (res.data == "success") {
          this.$router.push({
            name: "memberlist",
          });
        }
>>>>>>> e8b75a76f0b3e2905cb8a49bc7fbbfee92c03f44
      });
    },
  },
  mounted() {
    if (this.$route.params["member_name"] != undefined) {
      console.log(this.$route.params);
      this.memberData = this.$route.params;
    } else {
      console.log("空");
    }
  },
};

</script>