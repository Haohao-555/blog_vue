<template>
  <div class="atMe">
    <div class="atMe_container">
      <h3>提到我的（{{readnum}}未读）</h3>
      <div class="col-md-9 col-sm-9 col-xs-9 left">
        <input-item @fabu="fabu"></input-item>
        <blog-list :blogList="blogList"></blog-list>
      </div>
    </div>
     <nav-footer></nav-footer>
  </div>
</template>
<script>
import inputItem from "../components/inputItem";
import navFooter from "../components/navFooter";
import blogList from "../components/blog_list";
export default {
  name: "atMe",
  components: {
    navFooter,
    blogList,
    inputItem
  },
  data() {
    return {
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
      readnum:4,
      content: '',
    }
  },
  methods: {
    fabu(content) {
      this.content = content
    }
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