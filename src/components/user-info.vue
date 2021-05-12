<template>
  <div class="userInfo col-lg-12">
    <div class="top">
      <img :src="userInfo.touxiang" />
      <h3 class="userName">{{ userInfo.userName }}</h3>
    </div>
    <span>@提到我的{{ userInfo.atMe }}</span>
  </div>
</template>
<script>
export default {
  name: "user-info",
  props: {
    userInfo: Object,
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
  }
}
</style>