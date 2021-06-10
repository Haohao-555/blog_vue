<template>
  <div class="atMe">
    <div class="atMe_container">
      <!-- <h3>提到我的（{{ readnum }}未读）</h3> -->
      <div class="col-md-9 col-sm-9 col-xs-9 left">
        <input-item @fabu="fabu" :content="content"></input-item>
        <blog-list :blogList="blogList" :huifu="true" @hui="hui" @profile="profile"></blog-list>
        <load-more v-if="isShow" @load="getBlogList"></load-more>
      </div>
    </div>
  </div>
</template>
<script>
import inputItem from "../components/inputItem";
import loadMore from "../components/load-more";
import blogList from "../components/blog_list";
import formatContent from "../utils/_format";
export default {
  name: "atMe",
  components: {
    blogList,
    inputItem,
    loadMore,
  },
  data() {
    return {
      //表示是否显示加载更多
      isShow: true, 

      blogList: [],

      // 未读的数量
      readnum: 0,

      // 回复的内容
      content: "",

      // 当前博客页数
      pageIndex: 0,

      // at
      members: [],
    };
  },

  mounted() {
    this.getBlogList();
  },

  methods: {
  
   // 发布博客
    fabu(content) {
      this.axios
        .post("/blog/create", {
          content,
        })
        .then((res) => {
          if (res.errno) {
            this.$message.error(res.message);
          } else {
            this.$message.success("发布微博成功");
             setTimeout(() => {
              window.location.reload();
            }, 500);
          }
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
          // path: "/Otherprofile/" + otherName,
           path: "/Otherprofile",
          query: {
            otherName,
          },
        });
      }
    },

    getBlogList() {
      let URL = `/atMe/loadMore/` + this.pageIndex;
      this.axios.get(URL).then((res) => {
        this.readnum = res.count;
        // 格式化博客信息
        this.blogList = this.blogList.concat(res.blogList.map((item) => formatContent(item)));
        this.pageIndex = res.pageIndex + 1;
        this.isShow = !res.isEmpty;
      });
    },

    // 点击博客回复
    hui(content) {
      // 将内容传递给子组件
      this.content = content;
    },
    
  },
};
</script>
<style lang="scss">
.atMe {
  width: 100%;
  .atMe_container {
    width: 80%;
    margin: 0 auto;
    padding-top: 10px;
    h3 {
      padding-left: 42px;
      padding-bottom: 12px;
    }
  }
}
</style>