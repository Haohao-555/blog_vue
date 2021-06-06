<template>
  <div class="blog_list col-md-12 col-sm-12 col-xs-12">
    <div
      class="blog_container col-md-12 col-sm-12 col-xs-12"
      v-for="(item, index) of blogList"
      :key="index"
    >
      <div class="top col-md-12 col-sm-12 col-xs-12">
        <img :src="item.user.picture" />
        <span
          class="nickName"
          @click="$emit('profile', `${item.user.userName}`)"
          >{{ item.user.nickName }}</span
        >
      </div>
      <div class="wrapper col-md-12 col-sm-12 col-xs-12">
        <div class="col-lg-10">
          <p class="content" v-html="item.contentFormat"></p>
        </div>

        <div class="col-md-2 col-sm-2 col-xs-2">
          <img :src="item.img" v-if="item.img ? true : false" />
        </div>
      </div>
      <div class="createTime col-md-12 col-sm-12 col-xs-12">
        <span>{{ item.createdAtFormat }}</span>
        <span class="iconfont icon-huifu icon" v-if="huifu" @click="hui(index)"
          >回复</span
        >
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: "blog-list",

  props: {
    blogList: Array,
    huifu: Boolean,
  },
  methods: {
    hui(index) {
      this.$emit("hui", this.blogList[index].content);
    },
  },
};
</script>
<style lang="scss">
.blog_list {
  a {
    &:hover {
      cursor: pointer;
      text-decoration: none;
    }
  }
  .blog_container {
    margin-top: 10px;
    position: relative;
    .top {
      padding-top: 14px;
      img {
        width: 50px;
        height: 50px;
        border-radius: 50%;
      }
      .nickName {
        display: inline-block;
        margin-left: 10px;
        color: #007bff;
        font-size: 17px;
        cursor: pointer;
        &:hover {
          text-decoration: underline;
        }
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
      .icon {
        padding-left: 12px;
        font-size: 12px;
        cursor: pointer;
        color: #007bff;
        &:hover {
          text-decoration: underline;
        }
      }
    }
  }
}
</style>