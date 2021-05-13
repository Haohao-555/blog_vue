<template>
  <div class="blog_list col-md-12 col-sm-12 col-xs-12">
    <div
      class="blog_container col-md-12 col-sm-12 col-xs-12"
      v-for="(item, index) of blogList"
      :key="index"
    >
      <div class="top col-md-12 col-sm-12 col-xs-12">
        <img :src="item.touxiang" />
        <span class="nickName">{{ item.nickName }}</span>
      </div>
      <div class="wrapper col-md-12 col-sm-12 col-xs-12">
        <div class="col-lg-10">
          <p class="content">{{ item.content }}</p>
        </div>
        
        <div class="col-md-2 col-sm-2 col-xs-2">
          <img :src="item.img" />
        </div>
      </div>
      <div class="createTime col-md-12 col-sm-12 col-xs-12">
          <span>{{item.createTime}}</span>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: "blog-list",
  props: {
    blogList: Array,
  },
};
</script>
<style lang="scss">
.blog_list {
  .blog_container {
    margin-top: 10px;
    position: relative;
    .top {
      padding-top: 14px;
      img {
        width: 50px;
        height: 50px;
      }
      .nickName {
        display: inline-block;
        margin-left: 10px;
        color: #007bff;
        font-size: 17px;
      }
      .content {
        font-size: 17px;
        margin-left: 4px;
      }
    }
    .wrapper {
      margin-top: 4px;
     padding-bottom: 20px;
      padding-left: 58px;
      border-bottom: 1px solid #007bff;
      padding-bottom: 70px;
      .content {
          font-size: 16px;
          line-height: 26px;
      }
      img {
        width: 80px;
        height: 80px;
      }
      span {
        position: absolute;
        bottom: 21px;
      }
    }
    .createTime {
        position: absolute;
        bottom: 12px;
    }
  }
}
</style>