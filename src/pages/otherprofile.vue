<template>
  <div class="otherprofile">
    <div class="otherprofile_container">
      <div class="col-md-9 col-sm-9 col-xs-9 left">
        <h3>个人主页</h3>
        <blog-list :blogList="blogList" v-if="isRouterAlive"></blog-list>
        <load-more v-if="isShow" @load="getBlogList"></load-more>
      </div>
      <div class="col-md-3 col-sm-3 col-xs-3 right">
        <user-info
          :userInfo="otherInfo"
          v-if="isRouterAlive"
          :flag="false"
          :guangzhu="guanzhu"
          @quxiao="unfollow"
          @guanzhu="follow"
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
import blogList from "../components/blog_list";
import userInfo from "../components/user-info";
import fans from "../components/fans";
import follower from "../components/follower";
import loadMore from "../components/load-more";
import formatContent from "../utils/_format";
export default {
  name: "otherprofile",

  data() {
    return {
      // 是否关注了
      guanzhu: false,

      // 该个人主页的个人信息
      otherInfo: {},

      fansList: [],
      fansNum: 0,
      fanflag: false,

      followerList: [],
      followerNum: 0,
      followerflag: false,

      pageIndex: 0,
      blogList: [],
      isShow: true,

      //控制视图是否显示的变量
      isRouterAlive: true,
    };
  },

  components: {
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

  mounted() {
    this.getUserInfo(this.$route.query.otherName);
  },

  watch: {
    // 监听路由变化来控制组件的加载
    $route: "reload",
  },

  methods: {
    reload() {
      this.isRouterAlive = false; //先关闭，
      this.close();
      this.getUserInfo(this.$route.query.otherName);
      this.$nextTick(function () {
        this.isRouterAlive = true; //再打开
      });
    },

    // 将一些数据清空，防止造成不必要的污染
    close() {
      this.fansList = [];
      this.followerList = [];
      this.fanflag = false;
      this.followerflag = false;
      this.blogList = [];
      this.pageIndex = 0;
    },

    profile(otherName) {
      // if (this.$store.state.followerList.length == 0) {
      //   this.getMeFollows();
      // }
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

    // 获取粉丝
    getFans() {
      let URL = `/user_relation/getfans`;
      this.axios
        .post(URL, {
          userId: this.otherInfo.id,
        })
        .then((res) => {
          this.fansList = res.userList;
          this.fanflag = true;
          this.fansNum = res.count;
        });
    },

    // 获取关注人
    getFollows() {
      let URL = `/user_relation/getfollows`;
      this.axios
        .post(URL, {
          userId: this.otherInfo.id,
        })
        .then((res) => {
          this.followerflag = true;
          this.followerList = res.userList;
          this.followerNum = res.count;
        });
    },

    // 获取自己的关注人
     getMeFollows(userName) {
      let URL = `/user_relation/getfollows`;
      this.axios
        .post(URL, {
          userId: this.$store.state.userInfo.id,
        })
        .then((res) => {
          // 判断用户是否关注当前用户
          this.guanzhu = res.userList.some(item => {
            return item.userName == userName;
          })
          // 存入 vuex
          this.$store.dispatch("saveFollowerList", res.userList);
          this.$store.dispatch("saveFollowerNum", res.count);
        });
    },

    // 获取信息
    getUserInfo(userName) {
      if (userName == undefined) {
        userName = window.sessionStorage.getItem("otherName");
        sessionStorage.removeItem("otherName");
      } else {
        window.sessionStorage.setItem("otherName", userName);
      }
        this.getMeFollows(userName);
  
      let URL = `/user/getOtherInfo/` + userName;
      this.axios.get(URL).then((res) => {
        this.otherInfo = res;
        this.getBlogList(res.userName);
      });
    },

    // 获取博客
    getBlogList(userName) {
      if (userName == undefined) {
        userName = this.otherInfo.userName;
      }
      let URL = `/profile/loadMore/` + userName + "/" + this.pageIndex;
      this.axios.get(URL).then((res) => {
        this.blogList = this.blogList.concat(
          res.blogList.map((item) => formatContent(item))
        );
        this.pageIndex = res.pageIndex + 1;
        this.isShow = !res.isEmpty;
      });
    },

    follow() {
      this.axios
        .post("/profile/follow", {
          userId: this.otherInfo.id,
        })
        .then((res) => {
          if (!res.errno) {
            this.$message.success("关注成功");
            this.guanzhu = true;
          }
        });
    },

    unfollow() {
      this.axios
        .post("/profile/unfollow", {
          userId: this.otherInfo.id,
        })
        .then((res) => {
          if (!res.errno) {
            this.guanzhu = false;
          }
        });
    },
  },
};
</script>
<style lang="scss">
.otherprofile {
  width: 100%;
  .otherprofile_container {
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