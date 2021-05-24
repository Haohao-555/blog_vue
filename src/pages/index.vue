<template>
  <div class="souye">
    <div class="index_container">
      <div class="col-md-9 col-sm-9 col-xs-9 left">
        <input-item @fabu="fabu" :content="content"></input-item>
        <blog-list
          :blogList="blogList"
          :huifu="true"
          @hui="hui"
          @profile="profile"
        
        ></blog-list>
        <load-more v-if="isShow" @load="getBlogList"></load-more>
      </div>
      <div class="col-md-3 col-sm-3 col-xs-3 right">
        <user-info
          v-if="isRouterAlive"
          :userInfo="userInfo"
          @atMe="$router.push('/atMe')"
          :atMe="atcount"
          :flag="true"
        ></user-info>

        <fans
          :fansList="fansList"
          :fansNum="fansNum"
          :flag="fanflag"
          @profile="profile"
          @getFans="getFans"
        ></fans>
        <follower
          :followerList="followerList"
          :followerNum="followerNum"
          :flag="followerflag"
          @profile="profile"
          @getFollows="getFollows"
        ></follower>
      </div>
    </div>
  </div>
</template>
<script>
import inputItem from "../components/inputItem";
import blogList from "../components/blog_list";
import userInfo from "../components/user-info";
import fans from "../components/fans";
import follower from "../components/follower";
import loadMore from "../components/load-more";

import formatContent from "../utils/_format";
export default {
  name: "index",

  data() {
    return {
      isShow: true, //表示是否显示加载更多
      content: "",

      blogList: [],
      blogPageIndex: 0,

      // 当前用户信息
      userInfo: this.$store.state.userInfo,

      fansList: [],
      fansNum: 0,
      fanflag: false,

      followerList: [],
      followerNum: 0,
      followerflag: false,

      // @我的数量
      atcount: 0,

      //控制视图是否显示的变量
      isRouterAlive: true,
    };
  },

  components: {
    inputItem,
    blogList,
    userInfo,
    fans,
    follower,
    loadMore,
  },

  //父组件中通过provide来提供变量，在子组件中通过inject来注入变量。
  provide() {
    return {
      reload: this.reload,
    };
  },
  created() {
    this.getBlogList();
    this.getAt();
  },
  methods: {
    reload() {
      this.isRouterAlive = false; //先关闭，
      this.$nextTick(function () {
        this.isRouterAlive = true; //再打开
      });
    },

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
            this.getBlogList();
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
          path: "/Otherprofile/" + otherName,
          query: {
            otherName,
          },
        });
      }
    },

    // 获取博客列表
    getBlogList() {
      let URL = "/blog/loadMore/" + this.blogPageIndex;
      this.axios.get(URL).then((res) => {
        this.blogList = this.blogList.concat(
          // 格式化
          res.blogList.map((item) => formatContent(item))
        );
        this.blogPageIndex = res.pageIndex + 1;
        this.isShow = !res.isEmpty;
      });
    },

    // 获取粉丝
    getFans() {
      let URL = `/user_relation/getfans`;
      this.axios
        .post(URL, {
          userId: this.userInfo.id,
        })
        .then((res) => {
          this.fansList = res.userList;
          this.fansNum = res.count;
          this.fanflag = true;

          // 存入 vuex
          this.$store.dispatch("saveFanList", res.userList);
          this.$store.dispatch("saveFansNum", res.count);
        });
    },

    // 获取关注人
    getFollows() {
      let URL = `/user_relation/getfollows`;
      this.axios
        .post(URL, {
          userId: this.userInfo.id,
        })
        .then((res) => {
          this.followerList = res.userList;
          this.followerNum = res.count;
          this.followerflag = true;

          // 存入 vuex
          this.$store.dispatch("saveFollowerList", res.userList);
          this.$store.dispatch("saveFollowerNum", res.count);
        });
    },

    // 获取 atMe 未读数量
    getAt() {
      this.axios.get("/atMe/number").then((res) => {
        this.atcount = res.count;
      });
    },

    // 回复
    hui(content) {
      this.content = content;
    },
  },
};
</script>
<style lang="scss">
.souye {
  width: 100%;
  .index_container {
    width: 80%;
    margin: 0 auto;
    padding-top: 10px;
  }
}
</style>