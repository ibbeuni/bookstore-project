
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
          <th scope="col">會員性別</th>
          <th scope="col">會員生日</th>
          <th scope="col">操作</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="(item, index) in memberList" :key="index">
          <th scope="row">{{index +1}}</th>
          <td>{{item.name}}</td>
          <td>{{item.email}}</td>
          <td>{{item.password}}</td>
          <td>{{item.phone}}</td>
          <td>{{item.address}}</td>
          <td>{{item.gender}}</td>
          <td>{{item.birth}}</td>
          <td>
            <button>編輯</button>
            <button>刪除</button>
          </td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
export default {
  data() {
    return {
        memberList:[
            {
                name:"小丸子",
                email:"marunko@gmail.com",
                password:"P288555io",
                phone:"0989015586",
                address:"日本靜岡縣清水市",
                gender:"F",
                birth:"1988/2/8",
            },
              {
                name:"小丸子",
                email:"marunko@gmail.com",
                password:"P288555io",
                phone:"0989015586",
                address:"日本靜岡縣清水市",
                gender:"F",
                birth:"1988/2/8",
            },
              {
                name:"小丸子",
                email:"marunko@gmail.com",
                password:"P288555io",
                phone:"0989015586",
                address:"日本靜岡縣清水市",
                gender:"F",
                birth:"1988/2/8",
            },
        ],
    };
  },
  methods: {
    addMember() {
      this.$router.push({
        name: "addmember",
        params: {
          id: 111, // 注意，傳送後會轉為字串
          name: "Alysa",
        },
      });
    },
  },
};
</script>