<style lang='scss'>
  .list{
    li{
      font-size:30px;/*px*/
      line-height:150px;
      border-bottom:1px solid #666;/*no*/
      padding-left:20px;
      .avatar{
        width:100px;
        height:100px;
        border-radius:100px;
        vertical-align: middle;
      }
      .singer_name{
        margin-left:20px;
      }
    }
  }
</style>

<template>
<div>
 <ul class="list" v-if="HotSinger.length>0">
   <li v-for="(item,index) in HotSinger" :key="index"
   >
   <img :src="item.avatar" class="avatar">
   <span class="singer_name"> {{item.Fsinger_name}}</span>
   </li>
 </ul>
</div>
</template>

<script>
import jsonp from "@/common/jsonp";
export default {
  name: "Home",
  data() {
    return {
      HotSinger: []
    };
  },
  created() {
    this.getHotSong();
  },
  methods: {
    getHotSong() {
      const params = {
        channel: "singer",
        page: "list",
        key: "all_all_all",
        pagesize: 100,
        pagenum: 1
      };
      const url = "https://c.y.qq.com/v8/fcg-bin/v8.fcg";

      jsonp(url, params).then(res => {
        console.log(res);
        this.HotSinger = res.data.list.map(item=>{
          item.avatar=`https://y.gtimg.cn/music/photo_new/T001R150x150M000${item.Fsinger_mid
}.jpg?max_age=2592000`
          return item
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