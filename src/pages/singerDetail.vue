<style lang='scss' scoped>
.singer-detail {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: 99;
  background-color: #fff;
}
.info__box {
  height: 490px;
  position: relative;
  .info__box__con {
    padding-top: 88px;
    z-index: 5;
    .info__avatar {
      width: 150px;
      height: 150px;
    }
  }
  .js__img__bg {
    object-fit: cover;
    -webkit-transform: scale(1, 1) translateZ(0);
    -webkit-filter: blur(36px); /*px*/
  }
}
.info__box__bg {
  position: absolute;
  top: 0;
  left: 0;
  z-index: 3;
  width: 100%;
  height: 100%;
}
.singer-detail /deep/ .mint-header {
  background-color: rgba(179, 179, 184, 0.5);
}
.singer-detail /deep/ .h__back {
  color: #068938;
}
.singer-detail /deep/ .is-fixed {
  z-index: 6;
}
.info__box {
  color: #fff;
  text-align: left;
  height: 490px;
  position: relative;
  .info__box__con {
    display: flex;
    padding-top: 110px;
    padding-left: 20px;
    z-index: 5;
    .info__avatar {
      width: 150px;
      height: 150px;
    }
    .album {
      margin-left: 20px;
      .album__detail {
        width: 95%;
        line-height: 35px;
        display: -webkit-box;
        -webkit-box-orient: vertical;
        -webkit-line-clamp: 3;
        overflow: hidden;
      }
    }
  }
  .js__img__bg {
    object-fit: cover;
    -webkit-transform: scale(1, 1) translateZ(0);
    -webkit-filter: blur(36px); /*px*/
  }
}
.list__box {
  overflow: scroll;
}
.item__box {
  border-bottom: 1px solid #666;
  box-shadow: 0px 0px 0px 0px #666;
}
.item__title {
  line-height: 100px;
  padding-left: 20px;
}
.mint-loadmore-bottom span {
  display: inline-block;
  -webkit-transition: 0.2s linear;
  transition: 0.2s linear;
  vertical-align: middle;
}
.mint-loadmore-bottom span.is-rotate {
  -webkit-transform: rotate(180deg);
  transform: rotate(180deg);
}

</style>

<template>
  <div class="singer-detail">
    <qq-head>
       <router-link  slot="left" to="/" class="h__back" >返回</router-link>
    </qq-head>
    <div class="info__box">
      <div class="info__box__bg info__box__con">
        <img :src="singerBg" alt="" class="info__avatar">
        <div class="album">
          <h1 class="album__name">{{singerInfo.singerName}}</h1>
          <p class="fans-number">粉丝：{{singerInfo.fans}}人</p>
          <p class="album__detail" @click="showInfoDetail(singerInfo.detail)">{{singerInfo.detail}}</p>
        </div>
      </div>
      <img :src="singerBg" class="info__box__bg js__img__bg">
    </div>
    <div class="list__box" ref="list__box"  >
      <mt-loadmore  
      v-if="songList.length>0"
      :bottom-method="loadBottom"  
      :auto-fill="false" 　
      :bottom-all-loaded="allLoad"
     
      @bottom-status-change="handleBottomChange"
        ref="loadmore">
        <ul>
          <li v-for="item in songList" class="item__box">
            <p class="item__title">{{ item.musicData.songname }}</p>
          </li>
        </ul>
         <div slot="bottom" class="mint-loadmore-bottom">
          <span v-show="bottomStatus !== 'loading'" :class="{ 'is-rotate': bottomStatus === 'drop' }">↑</span>
     
      <mt-spinner v-show="isLoading" type="fading-circle"></mt-spinner>
    </div>
      </mt-loadmore>
    </div>
  </div>
</template>

<script>
import Head from "@/components/header";
import { MessageBox } from 'mint-ui';
export default {
  name: "SingerDetail",
  data() {
    return {
      singerBg: "",
      singerInfo: {},
      songList: [],
      pageIndex: 0,
      pageNum: 15,
      allLoad: false,
      bottomStatus: "",
      isLoading: false
    };
  },
  created() {
    console.log(this.$route.params.id);
  },
  mounted() {
    this.$refs.list__box.style.height =
      document.documentElement.clientHeight -
      this.$refs.list__box.getBoundingClientRect().top +
      "px";
    this.getSingerData();
  },
  components: {
    qqHead: Head
  },
  methods: {
    showInfoDetail(mes) {
      MessageBox({
        title: "",
        message:mes ,
      
      });
    },
    handleBottomChange(status) {
      console.log(status);

      this.bottomStatus = status;
    },
    getSingerData() {
      const singerId = this.$route.params.id;
      const url = "https://c.y.qq.com/v8/fcg-bin/fcg_v8_singer_track_cp.fcg";
      const params = {
        singermid: singerId,
        order: "listen",
        from: "h5",
        num: this.pageNum,
        begin: this.pageIndex
      };
      const _this = this;
      this.$jsonp(url, params).then(res => {
        this.singerBg = `https://y.gtimg.cn/music/photo_new/T001R150x150M000${singerId}.jpg?max_age=2592000`;
        this.singerInfo = {
          singerName: res.data.singer_name,
          fans: res.data.fans,
          detail: res.data.SingerDesc
        };
        if (res.data.list.length === 0) {
          this.allLoaded = true; // 若数据已全部获取完毕
        }
        this.songList.push(...res.data.list);
        this.isLoading = false;
      });
    },
    loadBottom() {
      this.isLoading = true;
      this.pageIndex = this.pageIndex + this.pageNum;
      setTimeout(() => {
        this.getSingerData();
        this.$nextTick(() => {
          this.$refs.loadmore.onBottomLoaded();
        });
      }, 500);
    }
  },
  beforeRouteLeave(to, from, next) {
    this.$emit("back");
    next();
  }
};
</script>