<template>
  <div class="navHeader">
    <div class="navheader_container">
      <div class="item" style="font-size: 24px; padding-top:3px;">微博</div>
      <div class="item" @click="go(1)">
        <span class="index_img" :class="{active: type == 1? true: false}">首页</span>
      </div>
      <div class="item" @click="go(2)">
        <span class="profile_img" :class="{active: type == 2? true: false}">我的空间</span>
      </div>
      <div class="item" @click="go(3)">
        <span class="square_img" :class="{active: type == 3? true: false}">广场</span>
      </div>
      <div class="item" @click="go(4)">
        <span class="setting_img" :class="{active: type == 4? true: false}">设置</span>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: "navheader",
  data() {
    return {
      type: 1,
    };
  },
  methods: {
    go(type) {
      this.type = type;
      this.$emit("go", type);
    },
  },
};
</script>
<style lang="scss">
.navHeader {
  width: 100%;
  height: 60px;
  background-color: #007bff;
  .navheader_container {
    color: #78bdff;
    height: 60px;
    width: 98%;
    margin: 0px auto;
    // background-color: red;
    display: flex;
    justify-content: flex-start;
    .item {
      margin: 0;
      padding: 0;
      height: 60px;
      line-height: 60px;
      display: inline-block;
      // background-color: green;
      margin-right: 16px;
      span {
        width: 100%;
        height: 40px;
        font-size: 20px;
        line-height: 40px;
        display: inline-block;
        margin-top: 12px;
        cursor: pointer;
      }
      .index_img {
        background: url("/img/index.png") no-repeat;
        background-position: center left;
        background-size: 22px;
        padding-left: 26px;
      }
      .profile_img {
        background: url("/img/profile.png") no-repeat;
        background-position: center left;
        background-size: 24px 24px;
        padding-left: 29px;
      }
      .square_img {
        background: url("/img/square.png") no-repeat;
        background-position: center left;
        background-size: 24px 24px;
        padding-left: 29px;
      }
      .setting_img {
        background:  url("/img/setting.png") no-repeat;
        background-position: center left;
        background-size: 20px 20px;
        padding-left: 24px;
      }
      .active {
       color: #fff;
      }
    }
  }
}
</style>