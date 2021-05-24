<template>
  <div class="atMe">
    <div class="atMe_container">
      <h3>提到我的（{{ readnum }}未读）</h3>
      <div class="col-md-9 col-sm-9 col-xs-9 left">
        <input-item @fabu="fabu" :content="content"></input-item>
        <blog-list :blogList="blogList" v-if="isRouterAlive" :huifu="true" @hui="hui"></blog-list>
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
      isShow: true, //表示是否显示加载更多
      blogList: [],
      readnum: 4,
      content: "",
      isRouterAlive: true,
      pageIndex: 0,
      members: [],
    };
  },
  mounted() {
    this.getBlogList();
  },
  //父组件中通过provide来提供变量，在子组件中通过inject来注入变量。
  provide() {
    return {
      reload: this.reload,
    };
  },
  methods: {
    reload() {
      this.isRouterAlive = false; //先关闭，
      this.$nextTick(function () {
        this.isRouterAlive = true; //再打开
      });
    },

    fabu(content) {
      this.content = content;
    },

    getBlogList() {
      let URL = `/atMe//loadMore/` + this.pageIndex;
      this.axios.get(URL).then((res) => {
        this.readnum = res.count;
        this.blogList = this.blogList.concat(res.blogList.map((item) => formatContent(item)));
        this.pageIndex = res.pageIndex + 1;
        this.isShow = !res.isEmpty;
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