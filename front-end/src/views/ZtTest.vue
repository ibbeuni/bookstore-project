<template>
  <div class="col-md-10" align="center">
    <!-- <div id="app">{{data}}</div> -->
    <div>
      <button @click="get()">获取user表数据</button>
    </div>



    <br><br>
    <table class="table- table-bordered">
      <tr>
        <th>|| username ||</th>
        <th> userphone ||</th>
        <th> useraddress ||</th>
        <th> usermail ||</th>
      </tr>
      <!-- <tr v-for="users in alluser" :key="users.member_num"> -->
      <tr v-for="(item, index) in alluser" :key="index">
        <td>{{ alluser[index].member_num }}</td>
        <td>{{ alluser[index].member_phone }}</td>
        <td>{{ alluser[index].member_email }}</td>


      </tr>



    </table>

  </div>
</template>

<script>

import axios from "axios"




export default {
  props: {
    String
  },
  data() {
    return {
      alluser: '',
      userName: '',
      userPhone: '',
      userAddress: '',
      userMail: '',
    }
  },
  mounted() {
    axios.get('http://127.0.0.1:3000/member').then(res => {
      this.alluser = res.data
      console.log(res.data)
    })
  },


  methods: {
    get() {
      axios.get('http://127.0.0.1:3000/member').then(res => {
        console.log(res.data);
        // this.alluser = res.data;
        // this.userName = this.alluser[0].member_num
        // this.userPhone = this.alluser[0].member_phone
        // this.userMail = this.alluser[0].member_email
        // console.log(this.alluser)

      }).catch(err => {
        console.log("获取数据失败" + err);
      })
    }
  },

}

</script>

<style scoped>

</style>