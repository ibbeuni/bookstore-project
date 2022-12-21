<template>
    <div style="display: flex;">
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
        ><input v-model="memberData.member_password" type="password" required />
      </p>
      <p>
        <label for="title">會員電話:</label
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
      <p>
        <label for="title">會員備註:</label
        ><input v-model="memberData.member_remark" type="text" required />
      </p>
  
      <div>
        <button
          @click="addMember" class="buttomStyle" style="width: 150px; height: 50px">
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
      addMember() {
        let data = this.memberData;
       
        axios.post("http://127.0.0.1:3000/acc/", { data }).then((res) => {
          if (res.data == "success" ) {
            alert('成功')
            this.$router.push({
              name: "memberlist",
            });
          }
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