<template>
  <div class="profile">
    <div class="profile_container">
      <div class="col-md-9 col-sm-9 col-xs-9 left">
         <h3>个人主页</h3>
        <blog-list :blogList="meBlogList"></blog-list>
      </div>
      <div class="col-md-3 col-sm-3 col-xs-3 right">
        <user-info :userInfo="userInfo" @atMe="atme"></user-info>
        <fans :fansList="fansList" :fansNum="fansNum" @profile="profile"></fans>
        <follower
          :followerList="followerList"
          :followerNum="followerNum"
          @profile="profile"
        ></follower>
      </div>
    </div>
    <nav-footer></nav-footer>
  </div>
</template>
<script>
import blogList from "../components/blog_list";
import userInfo from "../components/user-info";
import fans from "../components/fans";
import follower from "../components/follower";
import navFooter from "../components/navFooter";
export default {
  name: "profile",
  data() {
    return {
      meBlogList: [
        {
          id: 1,
          content:
            "内容1内容1内容1内容1内容1内容1内容1内容1内容1内容1内容1内容1内容11内容1内容1内容1内容1内容1内容1内容1内容1内容1内1内容1内容1内容1内容1内容1内容1内容1内容1内容1内1内容1内容1内容1内容1内容1内容1内容1内容1内容1内容1内容1内容1内容1内容1内容1内容1内容1内容1内容1内容1内容1内容1内容1内容1内容1内容1内容1内容1内容1内容1内容1内容1内容1内容1内容1内容1内容1内容1内容1内容1内容1内1内容1内容1内容1内容1内容1内容1内容1内容1内容1内内容1内容1内容1内容1内容1内容1内容1内容1内容1内容1内容1内容1内容1内容1内容1内容1内容1内容1内容1内容1内容1内容1内容1内容1内容1内容1内容1内容1内容1内容1内容1内容1",
          nickName: "用户1",
          touxiang:
            "https://ss2.bdstatic.com/70cFvnSh_Q1YnxGkpoWK1HF6hhy/it/u=550723927,1346838877&fm=27&gp=0.jpg",
          img: "/img/1.jpg",
          createTime: "2021.05.12 16:08",
        },
        {
          id: 2,
          content:
            "内容2内容1内容1内容1内容1内容1内容1内容1内容1内容1内容1内容1内容1内容1内容1内容1内容",
          nickName: "用户2",
          touxiang:
            "https://ss2.bdstatic.com/70cFvnSh_Q1YnxGkpoWK1HF6hhy/it/u=550723927,1346838877&fm=27&gp=0.jpg",
          img: "/img/1.jpg",
          createTime: "2021.05.12 16:04",
        },
        {
          id: 3,
          content: "内容3",
          nickName: "用户3",
          touxiang:
            "https://ss2.bdstatic.com/70cFvnSh_Q1YnxGkpoWK1HF6hhy/it/u=550723927,1346838877&fm=27&gp=0.jpg",
          img: "/img/1.jpg",
          createTime: "2021.05.12 16:01",
        },
        {
          id: 4,
          content: "内容4",
          nickName: "用户4",
          touxiang:
            "https://ss2.bdstatic.com/70cFvnSh_Q1YnxGkpoWK1HF6hhy/it/u=550723927,1346838877&fm=27&gp=0.jpg",
          img: "/img/1.jpg",
          createTime: "2021.05.12 16:00",
        },
      ],
      userInfo: {
        touxiang:
          "https://ss2.bdstatic.com/70cFvnSh_Q1YnxGkpoWK1HF6hhy/it/u=550723927,1346838877&fm=27&gp=0.jpg",
        userName: "张三",
        atMe: 3,
      },
      fansList: [
       {
          touxiang:
            "https://ss2.bdstatic.com/70cFvnSh_Q1YnxGkpoWK1HF6hhy/it/u=550723927,1346838877&fm=27&gp=0.jpg",
          nickName: "张三",
          userName: "zhangsan",
        },
         {
          touxiang:
            "https://ss2.bdstatic.com/70cFvnSh_Q1YnxGkpoWK1HF6hhy/it/u=550723927,1346838877&fm=27&gp=0.jpg",
          nickName: "李四",
          userName: "lisi",
        },
         {
          touxiang:
            "https://ss2.bdstatic.com/70cFvnSh_Q1YnxGkpoWK1HF6hhy/it/u=550723927,1346838877&fm=27&gp=0.jpg",
          nickName: "赵六",
          userName: "zhaoliu",
        },
         {
          touxiang:
            "https://ss2.bdstatic.com/70cFvnSh_Q1YnxGkpoWK1HF6hhy/it/u=550723927,1346838877&fm=27&gp=0.jpg",
          nickName: "王一",
          userName: "wangyi",
        },
      ],
      fansNum: 4,
      followerList: [
         {
          touxiang:
            "https://ss2.bdstatic.com/70cFvnSh_Q1YnxGkpoWK1HF6hhy/it/u=550723927,1346838877&fm=27&gp=0.jpg",
          nickName: "张三",
          userName: "zhangsan",
        },
         {
          touxiang:
            "https://ss2.bdstatic.com/70cFvnSh_Q1YnxGkpoWK1HF6hhy/it/u=550723927,1346838877&fm=27&gp=0.jpg",
          nickName: "李四",
          userName: "lisi",
        },
         {
          touxiang:
            "https://ss2.bdstatic.com/70cFvnSh_Q1YnxGkpoWK1HF6hhy/it/u=550723927,1346838877&fm=27&gp=0.jpg",
          nickName: "赵六",
          userName: "zhaoliu",
        },
         {
          touxiang:
            "https://ss2.bdstatic.com/70cFvnSh_Q1YnxGkpoWK1HF6hhy/it/u=550723927,1346838877&fm=27&gp=0.jpg",
          nickName: "王一",
          userName: "wangyi",
        },
      ],
      followerNum: 4,
    };
  },
  components: {
    blogList,
    userInfo,
    fans,
    follower,
    navFooter
  },
  methods: {
    profile(userName) {
      this.$router.push("/profile/"+userName)
    },
    atme() {
      this.$router.push("/atMe");
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