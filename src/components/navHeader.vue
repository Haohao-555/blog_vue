<template>
  <div class="navHeader">
    <div class="navheader_container">
      <div class="item" style="font-size: 24px; padding-top: 3px">微博</div>
      <div class="item" @click="go(1)">
        <span class="iconfont icon-index">首页</span>
      </div>
      <div class="item" @click="go(2)">
        <span class="iconfont icon-gerenzhuye">我的空间</span>
      </div>
      <div class="item" @click="go(3)">
        <span class="iconfont icon-guangchang">广场</span>
      </div>
      <div class="item" @click="go(4)">
        <span class="iconfont icon-shezhi">设置</span>
      </div>
      <div class="item" @click="author()">
        <span class="iconfont icon-zuozhe">作者</span>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: "navheader",
  data() {
    return {
      type: 0,
    };
  },
  methods: {
    go(type) {
      this.$emit("go", type);
    },
    author() {
      window.open("https://blog.csdn.net/weixin_44659458", "_blank")
    }
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
    display: flex;
    justify-content: flex-start;
    .item {
      margin: 0;
      padding: 0;
      height: 60px;
      line-height: 60px;
      display: inline-block;
      margin-right: 16px;
      span {
        width: 100%;
        height: 40px;
        font-size: 20px;
        line-height: 40px;
        display: inline-block;
        margin-top: 12px;
        cursor: pointer;
        &:hover {
          color: #fff;
        }
      }
      .active {
        color: #fff;
      }
    }
  }
}
</style>