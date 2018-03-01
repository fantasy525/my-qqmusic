<style lang="scss">
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
.app_main {
 
}
ul {
  list-style: none;
  padding: 0;
  margin: 0;
  text-align: left;
}
h1,
h2 ,p{
  margin: 0;
  padding: 0;
}
a {
  text-decoration: none;
}
.mint-header {
  height: 88px;
  background-color: #31c27c;
}
.logo {
  display: block;
  width: 180px;
  height: 50px;
  margin-left: 10px;
  background-image: url(https://y.gtimg.cn/mediastyle/mobile/yqq_v5/img/logo.png?max_age=19830212&d=20151105145423);
  background-size: cover;
  background-repeat: no-repeat;
  text-indent: -9999px;
}
.btn__download {
  display: inline-block;
  width: 160px;
  height: 56px;
  background-color: #149c5a;
  border-radius: 56px;
  text-align: center;
  line-height: 56px;
  font-size: 30px; /*px*/
  color:#fff;
}
.navbar {
  margin-top: 88px;
  .mint-tab-item-label {
    font-size: 36px; /*px*/
  }
}
</style>

<template>
  <div id="app">
    <qq-head>
       <router-link  slot="right" to="/" class="btn__download" >下载app</router-link>
        <router-link to="/" slot="left" class="logo" ></router-link>
     
    </qq-head>
   <nav-bar></nav-bar>
   <div class="app_main">
      <router-view/>
   </div>
  </div>
</template>

<script>
import "normalize.css";

import NavBar from "@/components/navBar";
import Head from "@/components/header";
export default {
  name: "App",
  components: {
    navBar: NavBar,
    qqHead: Head
  }
};
</script>

