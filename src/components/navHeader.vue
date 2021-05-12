<template>
  <div class="header ">
    <div class="header_container">
      <span>微博</span>
      <div class="nav">
        <span class="index">首页</span>
        <span class="profile">我的空间</span>
        <span class="square">广场</span>
        <span class="setting">设置</span>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: "navheader",
};
</script>
<style lang="scss">

.header {
  width: 100%;
  height: 60px;
  background-color: #007bff;
  .header_container {
    color: #78bdff;
    height: 60px;
    width: 98%;
    margin: 0px auto;
    line-height: 60px;
    display: flex;
    span {
      font-size: 24px;
      font-weight: bold;
      display: inline-block;
      padding-top: 2px;
    }
    .nav {
      margin-left: 24px;
      height: 60px;
      span {
        font-size: 18px;
        font-weight: 600;
        display: inline-block;
        margin-right: 16px;
        padding-left: 28px;
        padding-top: 2px;
        cursor: pointer;
      }
      .index {
        background:  url("/img/index.png") no-repeat;
        background-position: center left;
        background-size: 24px 24px;
      }

      .profile {
        background:  url("/img/profile.png") no-repeat;
        background-position: center left;
        background-size: 24px 24px;
      }
      .square {
        background:  url("/img/square.png") no-repeat;
        background-position: center left;
        background-size: 24px 24px;
      }
      .setting {
        background:  url("/img/setting.png") no-repeat;
        background-position: center left;
        background-size: 20px 20px;
      }
    }
  }
}
</style>