<template>
  <div class="navHeader">
    <div class="navheader_container">
      <div class="item" style="font-size: 24px; padding-top: 3px">微博</div>
      <div class="item" @click="go(1)">
        <span class="iconfont icon-index" :class="{ active: type == 1 ? true : false }"
          >首页</span
        >
      </div>
      <div class="item" @click="go(2)">
        <span class="iconfont icon-gerenzhuye" :class="{ active: type == 2 ? true : false }"
          >我的空间</span
        >
      </div>
      <div class="item" @click="go(3)">
        <span class="iconfont icon-guangchang" :class="{ active: type == 3 ? true : false }"
          >广场</span
        >
      </div>
      <div class="item" @click="go(4)">
        <span class="iconfont icon-shezhi" :class="{ active: type == 4 ? true : false }"
          >设置</span
        >
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: "navheader",
  // props: {
  //   isAt: Boolean,
  // },
  data() {
    return {
      type: 0,
    };
  },
  // watch:{
  //   isAt: 'isAtMe'
  // },
  methods: {
    go(type) {
      // this.type = type;
      this.$emit("go", type);
    },
    // isAtMe(res) {
    //  if (res) {
    //    this.type = 0
    //  } 
    // },
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