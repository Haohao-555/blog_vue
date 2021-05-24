<template>
  <div class="square">
    <div class="square_container">
      <div class="col-md-9 col-sm-9 col-xs-9 left">
        <h3>广场页</h3>
        <blog-list :blogList="blogList" v-if="isRouterAlive" @profile="profile"></blog-list>
        <load-more v-if="isShow" @load="getBlogList"></load-more>
      </div>
    </div>
    
  </div>
</template>
<script>
import blogList from "../components/blog_list";
import loadMore from "../components/load-more";
import formatContent from "../utils/_format";
export default {
  name: "square",
  data() {
    return {
      blogList: [],
      pageIndex: 0,
      isRouterAlive: true,
      isShow: true,
    };
  },
  components: {
    blogList,
    loadMore,
  },
  //父组件中通过provide来提供变量，在子组件中通过inject来注入变量。
  provide() {
    return {
      reload: this.reload,
    };
  },
  mounted() {
    this.getBlogList();
  },
  methods: {
    reload() {
      this.isRouterAlive = false; //先关闭，
      this.$nextTick(function () {
        this.isRouterAlive = true; //再打开
      });
    },
    // 获取博客
    getBlogList() {
      let URL = `/square/loadMore/` + this.pageIndex;
      this.axios.get(URL).then((res) => {
        this.blogList = this.blogList.concat(res.blogList.map((item) => formatContent(item)));
        this.pageIndex = res.pageIndex + 1;
        this.isShow = !res.isEmpty;
      });
    },

     // 去其他人的主页
    profile(otherName) {
      if (otherName == this.$store.state.userInfo.userName) {
        sessionStorage.removeItem("otherName");
        this.$router.push({
          path: "/profile",
        });
      } else {
        this.$router.push({
          path: "/Otherprofile/" + otherName,
          query: {
            otherName,
          },
        });
      }
    },
  },
};
</script>
<style lang="scss">
.square {
  width: 100%;
  .square_container {
    width: 80%;
    margin: 0 auto;
    padding-top: 10px;
    .left {
      h3 {
        padding-left: 4px;
        padding-bottom: 12px;
        border-bottom: 1px solid #007bff;
      }
    }
  }
}
</style>