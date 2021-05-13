<template>
  <div class="square">
    <div class="square_container">
      <div class="col-md-9 col-sm-9 col-xs-9 left">
        <h3>广场页</h3>
        <blog-list :blogList="blogList"></blog-list>
      </div>
    </div>
    <nav-footer></nav-footer>
  </div>
</template>
<script>
import blogList from "../components/blog_list";
import navFooter from "../components/navFooter";
export default {
  name: "square",
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
    };
  },
  components: {
    blogList,
    navFooter
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