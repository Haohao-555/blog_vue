<template>
  <div class="fansList col-md-12 col-sm-12 col-xs-12">
    <h3 class="iconfont icon-fensi" @click="$emit('getFans')">
      粉丝 
      <span>({{ flag ? fansNum : "显示粉丝" }})</span>
    </h3>
    <div
      class="fan col-md-3 col-sm-4 col-xs-6"
      v-for="(item, index) of fansList"
      :key="index"
    >
      <img :src="item.picture" />
      <span @click="profile(index)">{{ item.nickName }}</span>
    </div>
  </div>
</template>
<script>
export default {
  name: "fans",
  props: {
    fansList: Array,
    fansNum: Number,
    flag: Boolean,
  },
  methods: {

    profile(index) {
      // 获取粉丝的userName
      const fans = this.fansList[index];
      this.$emit("profile", fans.userName);
    },
    
  },
};
</script>
<style lang="scss">
.fansList {
  padding-top: 2px;
  border-bottom: 1px solid #007bff;
  h3 {
    font-size: 16px;
    font-weight: bold;
    padding-bottom: 16px;
    padding-top: 13px;
    cursor: pointer;
    span:hover {
      text-decoration: underline;
      color: #007bff;
    }
  }
  .fan {
    padding-left: 0px;
    padding-right:0px ;
     text-align: center;
    img {
      width: 100%;
      height: 100%;
      border-radius: 50%;
    }
    span {
      padding-bottom: 10px;
      padding-top: 6px;
      cursor: pointer;
      font-size: 12px; 
      &:hover {
        text-decoration: underline;
        color: #007bff;
      }
    }
  }
}
</style>