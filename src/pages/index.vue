<template>
  <div class="souye">
    <div class="index_container">
      <div class="col-lg-9 left">
        <input-item @fabu="fabu"></input-item>
        <blog-list :blogList="blogList"></blog-list>
      </div>
      <div class="col-lg-3 right">
        <user-info :userInfo="userInfo"></user-info>
        <fans :fansList="fansList" :fansNum="fansNum"></fans>
      </div>
    </div>
  </div>
</template>
<script>
import inputItem from "../components/inputItem";
import blogList from "../components/blog_list";
import userInfo from "../components/user-info";
import fans from "../components/fans";
export default {
  name: "index",
  data() {
    return {
      content: "",
      blogList: [
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
        },
         {
          touxiang:
            "https://ss2.bdstatic.com/70cFvnSh_Q1YnxGkpoWK1HF6hhy/it/u=550723927,1346838877&fm=27&gp=0.jpg",
          nickName: "李四",
        },
         {
          touxiang:
            "https://ss2.bdstatic.com/70cFvnSh_Q1YnxGkpoWK1HF6hhy/it/u=550723927,1346838877&fm=27&gp=0.jpg",
          nickName: "赵六",
        },
         {
          touxiang:
            "https://ss2.bdstatic.com/70cFvnSh_Q1YnxGkpoWK1HF6hhy/it/u=550723927,1346838877&fm=27&gp=0.jpg",
          nickName: "王一",
        },
      ],
      fansNum: 4,
    };
  },
  components: {
    inputItem,
    blogList,
    userInfo,
    fans,
  },

  methods: {
    fabu(content) {
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
    .right {
    //   background-color: yellow;
      //   height: 1000px;
    }
  }
}
</style>