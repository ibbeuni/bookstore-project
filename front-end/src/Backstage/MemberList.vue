
<template>
  <div>
    <button @click="addMember()" style="margin-bottom: 20px">新增會員</button>
    <table class="table table-hover table-dark">
      <thead>
        <tr>
          <th scope="col">ID</th>
          <th scope="col">會員姓名</th>
          <th scope="col">會員信箱</th>
          <th scope="col">會員密碼</th>
          <th scope="col">會員電話</th>
          <th scope="col">會員地址</th>
          <th scope="col">會員生日</th>
          <th scope="col">操作</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="(item, index) in memberList" :key="index">
          <th scope="row">{{ index + 1 }}</th>
          <td>{{ item.member_name }}</td>
          <td>{{ item.member_id }}</td>
          <td>{{ item.member_password }}</td>
          <td>{{ item.member_phone }}</td>
          <td>{{ item.member_address }}</td>
          <td>{{ item.member_birthday }}</td>
          <td>
            <button @click="updateMember(item)">編輯</button>
            <button @click="deleteMember(item, index)">刪除</button>
          </td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
import axios from "axios";
export default {
  data() {
    return {
      memberList: [],
    };
  },
  methods: {
    addMember() {
      this.$router.push({
        name: "addmember",
      });
    },
    updateMember(item,index) {
        this.$router.push({
            name: "addmember",
            params: item,
        });
        axios
        .update("http://127.0.0.1:3000/acc/")
        .then((res) => {
          if (res.data == "success") {
            this.memberList.splice(index, 1);
          }
        });
    },
    deleteMember(item, index) {
      axios
        .delete("http://127.0.0.1:3000/acc/" + item["member_id"])
        .then((res) => {
          if (res.data == "success") {
            this.memberList.splice(index, 1);
          }
        });
    },
  },
  mounted() {
    axios.get("http://127.0.0.1:3000/acc/").then((res) => {
      this.memberList = res.data;
    });
  },
};
</script>