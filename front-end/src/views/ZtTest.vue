<template>
  <div class="col-md-10" align="center">

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
        <tr>
          <td>{{alluser}}</td>
          <td>{{aaa}}</td>
         

        </tr>

      
   
    </table>
   
  </div>
</template>

<script>

import axios from "axios"


export default{
  props:{
    String
  },
  data(){
    return{
      alluser:'',
      
      mounted(){
        axios.get('http://127.0.0.1:3000/member').then(res => {
          this.alluser = res.data;
          console.log(res.data);
        })
      },

      aaa:48984,
    }
  },
  methods: {
    get() {
      axios.get('http://127.0.0.1:3000/member').then(res=>{
          console.log(res.data);
      }).catch(err=>{
          console.log("获取数据失败" + err);
      })
    }
  },
  
}

</script>

<style scoped>

</style>