<template>
  <div class="followerList col-md-12 col-sm-12 col-xs-12">
    <h3 class="iconfont icon-guanzhuren" @click="$emit('getFollows')">
      关注
      <span> ({{ flag ? followerNum : "显示关注" }})</span>
    </h3>
    <div
      class="follower col-md-3 col-sm-4 col-xs-6"
      v-for="(item, index) of followerList"
      :key="index"
    >
      <img :src="item.picture" alt="" />
      <span @click="profile(index)">{{ item.nickName }}</span>
    </div>
  </div>
</template>
<script>
export default {
  name: "follower",
  props: {
    followerList: Array,
    followerNum: Number,
    flag: Boolean,
  },
  methods: {
    profile(index) {
      // 获取关注人的 userName
      const follow = this.followerList[index];
      this.$emit("profile", follow.userName);
    },
  },
};
</script>
<style lang="scss">
.followerList {
  padding-top: 2px;
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
  .follower {
    padding-left: 0px;
    padding-right: 0px;
    margin-right: 10px;
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