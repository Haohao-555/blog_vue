<template>
  <div class="inputItem col-md-12 col-sm-12 col-xs-12">
    <div class="col-md-12 col-sm-12">
      <at-ta :members="members" name-key="fullName">
        <template v-slot:item="s">
          <img :src="s.item.picture" />
          <span>{{ s.item.nickName }} - {{ s.item.userName }}</span>
        </template>
        <el-input
          id="textarea"
          type="textarea"
          class="element-editor resizeNone"
          v-model="fullcontent"
          rows="7"
        ></el-input>
      </at-ta>
    </div>
    <div class="col-md-7 col-sm-7 col-xs-7 pic" style="padding-top: 10px">
      <button type="button" class="btn btn-primary" @click="submit">
        发布
      </button>
      <!-- <a class="iconfont icon-tupian1">插入一张图片</a> -->
    </div>
  </div>
</template>
<script>
import AtTa from "vue-at/dist/vue-at-textarea";
export default {
  name: "inputitem",
  props: ["content"],
  data() {
    return {
      members: [],
      fullcontent: "",
    };
  },
  components: {
    AtTa,
  },
  mounted() {
    this.init();
  },
  watch: {
    content(newValue) {
      if (this.content != false) {
        this.fullcontent = newValue;
      }
    },
  },
  methods: {
    // 抛出
    submit() {
      const content = document.getElementById("textarea").value;
      this.$emit("fabu", content);
      this.fullcontent = "";
    },
    // 获取粉丝
    init() {
      let URL = `/user_relation/getfollows`;
      this.axios
        .post(URL, {
          userId: this.$store.state.userInfo.id,
        })
        .then((res) => {
          this.members = res.userList.map((item) => {
            let target = {};
            Object.assign(target, item);
            target.fullName = target.nickName + " - " + target.userName;
            return Object.assign(item, target);
          });
          // 存入 vuex
          this.$store.dispatch("saveFollowerList", res.userList);
          this.$store.dispatch("saveFollowerNum", res.count);
        });
    },
  },
};
</script>
<style lang="scss">
.inputItem {
  position: relative;
  border-bottom: 1px solid #007bff;
  padding-bottom: 22px;
  .resizeNone {
    .el-textarea__inner {
      //el_input中的隐藏属性
      resize: none; //主要是这个样式
    }
  }
  .pic {
    padding-top: 10px;
    a {
      color: #007bff;
      font-size: 18px;
      padding-left: 10px;
      padding-top: 2px;
      height: 30px;
      display: inline-block;
      margin-left: 10px;
      cursor: pointer;
    }
  }
  .atwho-view {
    bottom: -136px;
    .atwho-ul {
      .atwho-li {
        img {
          height: 100%;
          width: auto;
          transform: scale(0.8);
          border-radius: 50%;
        }
        span {
          padding-left: 8px;
        }
      }
    }
  }
}
</style>