<style lang='scss'>
.list {
  li {
    font-size: 30px; /*px*/
    line-height: 150px;
    border-bottom: 1px solid #666; /*no*/
    padding-left: 20px;
    .avatar {
      width: 100px;
      height: 100px;
      border-radius: 100px;
      vertical-align: middle;
    }
    .singer_name {
      margin-left: 20px;
    }
  }
}
</style>

<template>
<div>
 <ul class="list" v-if="HotSinger.length>0" v-show="isHome" >
   <li v-for="(item,index) in HotSinger"@click="goDetail(item)" :key="index"
   >
   <img :src="item.avatar" class="avatar">
   <span class="singer_name"> {{item.Fsinger_name}}</span>
   </li>
 </ul>
 <router-view></router-view>
</div>
</template>

<script>
export default {
  name: "Singer",
  data() {
    return {
      HotSinger: [],
      isHome: true
    };
  },
  created() {
    this.getHotSong();
  },
  beforeRouteUpdate(to, from, next) {
    // 在渲染该组件的对应路由被 confirm 前调用
    // 不！能！获取组件实例 `this`
    // 因为当守卫执行前，组件实例还没被创建
   
    if(from.name==='SingerDetail'){
      this.isHome=true
    }else{
      this.isHome=false
    }
    next();
  },
 
  methods: {
    goDetail(item) {
    
    
      this.$router.push({
        name: "SingerDetail",
        params: { id: item.Fsinger_mid }
      });
    },
    getHotSong() {
      const params = {
        channel: "singer",
        page: "list",
        key: "all_all_all",
        pagesize: 100,
        pagenum: 1
      };
      const url = "https://c.y.qq.com/v8/fcg-bin/v8.fcg";

      this.$jsonp(url, params).then(res => {
        console.log(res);
        this.HotSinger = res.data.list.map(item => {
          item.avatar = `https://y.gtimg.cn/music/photo_new/T001R150x150M000${
            item.Fsinger_mid
          }.jpg?max_age=2592000`;
          return item;
        });
      });
    },
    getSearchResult() {
      const params2 = {
        uin: 0,
        platform: "h5",
        needNewCode: 1,
        zhidaqu: 1,
        catZhida: 1,
        t: 0,
        flag: 1,
        ie: "utf-8",
        sem: 1,
        aggr: 0,
        perpage: 20,
        n: 20,
        p: 1,
        remoteplace: "txt.mqq.all",
        _: new Date().getTime(),
        w: "告白气球"
      };
      jsonp("https://c.y.qq.com/soso/fcgi-bin/search_for_qq_cp", params2);
    }
  }
};
</script>