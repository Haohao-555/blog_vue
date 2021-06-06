<template>
  <div class="userInfo col-md-12 col-sm-12 col-xs-12">
    <div class="top">
      <img :src="userInfo.picture" />
      <h3 class="userName">{{ userInfo.nickName }}</h3>
    </div>
    <span @click="$emit('atMe')" v-if="flag">@提到我的（{{ atMe }}）</span>

    <button
      type="button"
      class="btn btn-primary"
      v-if="!guangzhu && !flag"
      @click="$emit('guanzhu')"
    >
      关注
    </button>
    <button
      type="button"
      class="btn btn-danger"
      v-if="guangzhu && !flag"
      @click="$emit('quxiao')"
    >
      取消关注
    </button>
  </div>
</template>
<script>
export default {
  name: "user-info",
  props: {
    userInfo: Object,
    atMe: Number,
    flag: Boolean,
    guangzhu: Boolean,
  },
};
</script>
<style lang="scss">
.userInfo {
  padding-bottom: 16px;
  border-bottom: 1px solid #007bff;
  .top {
    padding-bottom: 10px;
    img {
      width: 80px;
      height: 80px;
      vertical-align: middle;
      border-radius: 50%;
    }
    .userName {
      font-size: 26px;
      font-weight: bold;
      display: inline-block;
      margin-left: 10px;
    }
  }
  span {
    font-weight: bold;
    color: #007bff;
    font-size: 20px;
    cursor: pointer;
    &:hover {
       text-decoration: underline;
    }
  }
}
</style>