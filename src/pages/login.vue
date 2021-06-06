<template>
  <div class="login">
    <div class="form-horizontal" v-if="!isLogin">
      <div class="form-group">
        <h3 style="margin-left: 50px">登录</h3>
      </div>
      <div class="form-group">
        <label for="inputAccount" class="col-sm-2 control-label">账号：</label>
        <div class="col-sm-8">
          <input
            type="text"
            class="form-control"
            id="inputAccount"
            placeholder="请输入账号"
            v-model="userName"
          />
        </div>
      </div>
      <div class="form-group">
        <label for="inputPassword" class="col-sm-2 control-label">密码：</label>
        <div class="col-sm-8">
          <input
            type="password"
            class="form-control"
            id="inputPassword"
            placeholder="请输入密码"
            v-model="password"
          />
        </div>
      </div>
      <div class="form-group">
        <div class="col-sm-10 col-sm-offset-1">
          <button type="button" class="btn btn-primary" @click="login">
            登录
          </button>
          <button type="button" class="btn btn-link" @click="$router.push('/register')">
            注册账号》》
          </button>
        </div>
      </div>
    </div>
    <div class="already_login" v-if="isLogin">
      <h2>登录</h2>
      您已成功登录，请直接访问
      <span @click="$router.push('/index')">首页</span>
    </div>
  </div>
</template>
<script>
import constant from "../conf/constant";
export default {
  name: "login",
  data() {
    return {
      userName: "",
      password: "",
      isLogin: false,
      account: "",
    };
  },
  mounted() {
    this.islogin();
  },
  methods: {

    // 登录
    login() {
      const { userName, password } = this;
      this.axios
        .post("/user/login", {
          userName,
          password,
        })
        .then((res) => {
          if (res.errno && res.errno != 0) { // 有错误
            this.$message.warning(res.message);
          } else {
            // 将信息保存到 vuex
            this.$store.dispatch("saveUserInfo", res);
            this.$router.push("/index");
          }
        });
    },

    // 判断是否登录
    islogin() {
      // 获取 cookie来判断是否已经登录
      if (this.$cookie.get(constant.COOKIE)) {
        this.isLogin = true;
      } else {
        this.isLogin = false;
      }
    },
    
  },
};
</script>
<style lang="scss">
.login {
  max-width: 600px;
  margin: 150px auto;
  .already_login {
    font-size: 18px;
    h3 {
      font-size: 24px;
    }
    span {
      cursor: pointer;
      color: #337ab7;
    }
  }
}
</style>