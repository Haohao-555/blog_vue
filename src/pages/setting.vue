<template>
  <div class="setting clearfix">
    <div class="set_container">
      <div class="top col-md-9 col-sm-9 col-xs-9">
        <h3>基本信息</h3>
        <div class="form-horizontal">
          <div class="form-group">
            <label for="inputaccount" class="col-sm-2 control-label"
              >昵称</label
            >
            <div class="col-sm-10">
              <input
                type="text"
                class="form-control"
                id="inputaccount"
                placeholder="请输入您的昵称"
                v-model="nickName"
              />
            </div>
          </div>
          <div class="form-group">
            <label for="inputcity" class="col-sm-2 control-label">城市</label>
            <div class="col-sm-10">
              <input
                type="text"
                class="form-control"
                id="inputcity"
                placeholder="请输入城市"
                v-model="city"
              />
            </div>
          </div>
          <div class="form-group">
            <div style="width: 400px; margin-left: 90px">
              <img :src="imageUrl" style="width: 100px; height: 100px" />
              <button class="btn" style="margin-left: 20px" @click="updateImg">
                更换头像
              </button>
            </div>
          </div>
          <div class="form-group">
            <div class="col-sm-offset-6 col-sm-4">
              <button class="btn btn-primary" @click="save">保存</button>
            </div>
          </div>
        </div>
      </div>
      <div class="bottom col-md-9 col-sm-9 col-xs-9">
        <h3>修改密码</h3>
        <form class="form-horizontal">
          <div class="form-group">
            <label for="password" class="col-sm-2 control-label"
              >当前密码</label
            >
            <div class="col-sm-10">
              <input
                type="password"
                class="form-control"
                id="password"
                placeholder="请输入当前密码"
                v-model="cur_password"
              />
            </div>
          </div>
          <div class="form-group">
            <label for="newpassword" class="col-sm-2 control-label"
              >新密码</label
            >
            <div class="col-sm-10">
              <input
                type="password"
                class="form-control"
                id="newpassword"
                placeholder="请输入新密码"
                v-model="new_password"
              />
            </div>
          </div>
          <div class="form-group">
            <label for="newpassword1" class="col-sm-2 control-label"
              >确认密码</label
            >
            <div class="col-sm-10">
              <input
                type="password"
                class="form-control"
                id="newpassword1"
                placeholder="请输入确认密码"
                v-model="new_password1"
              />
            </div>
          </div>
          <div class="form-group">
            <div class="col-sm-offset-6 col-sm-6">
              <button class="btn btn-success" @click="updatePas">
                修改密码
              </button>
            </div>
          </div>
        </form>
      </div>
      <div
        class="loginout col-md-9 col-sm-9 col-xs-9"
        style="text-align: center"
      >
        <button
          class="btn btn-danger"
          style="width: 300px; margin-top: 20px; margin-left: 109px"
          @click="loginout"
        >
          退出登录
        </button>
      </div>
    </div>
    <nav-footer ></nav-footer>
  </div>
</template>
<script>
import navFooter from "../components/navFooter";
import constant from "../conf/constant";
export default {
  name: "setting",

  components: {
    navFooter,
  },

  data() {
    return {
      city: "",
      nickName: "",

      cur_password: "",
      new_password: "",
      new_password1: "",
      picture: "",
      imageIndex: 0,
      imageUrl:
        "https://ss2.bdstatic.com/70cFvnSh_Q1YnxGkpoWK1HF6hhy/it/u=550723927,1346838877&fm=27&gp=0.jpg",
      imageArray: [
        {
          imageUrl:
            "https://ss2.bdstatic.com/70cFvnSh_Q1YnxGkpoWK1HF6hhy/it/u=550723927,1346838877&fm=27&gp=0.jpg",
        },
        {
          imageUrl:
            "https://ss1.baidu.com/9vo3dSag_xI4khGko9WTAnF6hhy/zhidao/wh%3D450%2C600/sign=a587b23df11f3a295a9dddcaac159007/500fd9f9d72a60590cfef2f92934349b023bba62.jpg",
        },
        {
          imageUrl:
            "https://ss1.baidu.com/-4o3dSag_xI4khGko9WTAnF6hhy/zhidao/pic/item/30adcbef76094b36c896219ba1cc7cd98d109dbb.jpg",
        },
        {
          imageUrl:
            "https://ss1.bdstatic.com/70cFuXSh_Q1YnxGkpoWK1HF6hhy/it/u=1973670407,3684163024&fm=26&gp=0.jpg",
        },
        {
          imageUrl:
            "https://ss1.bdstatic.com/70cFvXSh_Q1YnxGkpoWK1HF6hhy/it/u=726172760,443351279&fm=26&gp=0.jpg",
        },
      ],
    };
  },
  watch: {
    imageIndex() {
      this.imageUrl = this.imageArray[this.imageIndex].imageUrl;
    },
  },
  mounted() {
    this.getUserInfo();
  },

  methods: {
    // 获取个人信息
    getUserInfo() {
      this.axios.get("/user/isLogin").then((res) => {
        this.city = res.city;
        this.nickName = res.nickName;
        this.imageUrl = res.picture;
        this.$store.dispatch("saveUserInfo", res);
      });
    },

    // 修改密码
    updatePas() {
      if (
        this.new_password.length != 0 &&
        this.new_password == this.new_password1
      ) {
        this.axios
          .patch("/user/changePassword", {
            password: this.cur_password,
            newPassword: this.new_password,
          })
          .then((res) => {
            if (res.errno && res.errno == 10006) {
              this.cur_password = "";
              this.new_password = "";
              this.new_password1 = "";
              this.$message.error(res.message);
            } else {
              this.cur_password = "";
              this.new_password = "";
              this.new_password1 = "";
              this.$message.success("修改密码成功");
            }
          });
      } else {
        this.$message.error("两次密码不一致");
      }
    },

    // 更换头像
    updateImg() {
      if (this.imageIndex == this.imageArray.length - 1) {
        this.imageIndex = 0;
      } else {
        this.imageIndex = this.imageIndex + 1;
      }
    },

    // 保存
    save() {
      this.axios
        .patch("/user/changeInfo", {
          nickName: this.nickName,
          city: this.city,
          picture: this.imageUrl,
        })
        .then((res) => {
          if (!res.errno) {
            this.$message.success("修改成功");
            // 更新用户信息
            this.getUserInfo();
          } else {
            this.$message.error(res.message);
          }
        });
    },

    // 退出登录
    loginout() {
      this.axios.post("/user/logout").then(() => {
        this.$cookie.delete(constant.COOKIE);
        this.$cookie.delete(constant.SESSION);
        this.$router.push("/login");
      });
    },
  },
};
</script>
<style lang="scss">
.setting {
  width: 100%;
  .set_container {
    width: 80%;
    margin: 0 auto;
    padding-top: 10px;
    .top {
      padding-bottom: 16px;
      border-bottom: 1px solid #007bff;
      h3 {
        padding-left: 92px;
        font-size: 20px;
        padding-bottom: 12px;
      }
      img {
        width: 100%;
        height: 100%;
        border-radius: 50%;
      }
    }
    .bottom {
      padding-bottom: 16px;
      border-bottom: 1px solid #007bff;
      h3 {
        padding-left: 73px;
        font-size: 20px;
        padding-bottom: 12px;
        padding-top: 20px;
      }
    }
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