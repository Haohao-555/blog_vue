<template>
  <div class="profile clearfix">
    <div class="profile_container clearfix">
      <div class="col-md-9 col-sm-9 col-xs-9 left">
        <input-item @fabu="fabu" :content="content"></input-item>
        <blog-list :blogList="blogList" :huifu="false" :hui="hui"></blog-list>
        <load-more v-if="isShow" @load="getBlogList"></load-more>
      </div>
      <div class="col-md-3 col-sm-3 col-xs-3 right">
        <user-info
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
import formatContent from "../utils/_format";
import loadMore from "../components/load-more";

export default {
  name: "index",
  components: {
    inputItem,
    blogList,
    userInfo,
    fans,
    follower,
    loadMore,
  },
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

      timer: null,
    };
  },
  created() {
    // 每次进入界面时，先清除之前的所有定时器，然后启动新的定时器
    clearInterval(this.timer);
    this.timer = null;
    this.setTimer();
  },
  destroyed: function () {
    // 每次离开当前界面时，清除定时器
    clearInterval(this.timer);
    this.timer = null;
  },
  mounted() {
    this.getBlogList();
    this.getAt();
    // this.getFans();
    // this.getFollows();
  },

  methods: {
    // 定时器
    setTimer() {
      if (this.timer == null) {
        this.timer = setInterval(() => {
          this.getAt();
        }, 10000);
      }
    },
    // 发布博客
    fabu(content) {
      // console.log("发布前接收的参数是", content);
      this.axios
        .post("/blog/create", {
          content,
        })
        .then((res) => {
          if (res.errno) {
            this.$message.error(res.message);
          } else {
            this.$message.success("发布微博成功");
            this.content = "";
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
        // 判断 vuex中是否有关注人
        // if (this.followerList.length == 0) {
        //   this.getFollows();
        // }
        this.$router.push({
          // path: "Otherprofile/" + otherName,
           path: "/Otherprofile",
          query: {
            otherName,
          },
        });
      }
    },

    // 获取博客列表
    getBlogList() {
      let URL =
        "/profile/loadMore/" +
        this.userInfo.userName +
        "/" +
        this.blogPageIndex;
      this.axios.get(URL).then((res) => {
        this.blogList = this.blogList.concat(
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
.profile {
  width: 100%;
  .profile_container {
    width: 80%;
    margin: 0 auto;
    padding-top: 10px;
  }
}
.clearfix:after {
  content: "";
  display: block;
  clear: both;
  height: 0px;
  visibility: hidden;
}
.clearfix {
  *zoom: 1;
}
</style>
