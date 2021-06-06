<template>
  <div class="register">
    <div class="form-horizontal" v-if="!islogin">
      <h2 style="margin-bottom:20px;">注册</h2>
      <div class="form-group">
        <div class="col-sm-8">
          <input
            type="text"
            class="form-control"
            id="inputAccount"
            placeholder="请输入账号"
            v-model="userName"
          />
          <span class="exit" v-if="isExistUserName">用户名存在</span>
        </div>
      </div>
      <div class="form-group">
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
        <div class="col-sm-8">
          <input
            type="password"
            class="form-control"
            id="inputPassword2"
            placeholder="请再次输入密码"
            v-model="password1"
          />
          <span class="exit" v-if="!isExistPassword">两次密码不一致</span>
        </div>
      </div>
      <div class="form-group">
        <div class="col-sm-8">
          <select class="form-control" v-model="selected">
            <option disabled value="">请选择性别</option>
            <option value="1">男</option>
            <option value="2">女</option>
            <option value="3">保密</option>
          </select>
        </div>
      </div>
      <div class="form-group">
        <div class="col-sm-8">
          <button type="button" class="btn btn-primary" @click="register">
            注册
          </button>
          <button
            type="button"
            class="btn btn-link"
            @click="$router.push('/login')"
          >
            已有账号，返回登录》》
          </button>
        </div>
      </div>
    </div>
    <div class="already_login" v-if="islogin">
      <h2>注册</h2>
      你已成功登录，请直接访问
      <span @click="$router.push('/index')">首页</span>
    </div>
  </div>
</template>
<script>
import constant from "../conf/constant";
export default {
  name: "register",
  
  data() {
    return {
      userName: "",
      password: "",
      password1: "",
      selected: "",
      islogin: false,

      // 用户名是否存在
      isExistUserName: false,
      // 两次密码是否一致
      isExistPassword: true,
    };
  },

  mounted() {
    this.isLogin();
  },

  // 属性监听（判断用户名是否存在，及密码是否一致）
  watch: {
    userName: function () {
      this.axios
        .post("/user/isExist", {
          userName: this.userName,
        })
        .then((res) => {
          if (res.errno == 10003) {
            this.isExistUserName = false;
          } else {
            this.isExistUserName = true;
          }
        });
    },
    password: function () {
      if (this.password === this.password1) {
        this.isExistPassword = true;
      } else {
        this.isExistPassword = false;
      }
    },
    password1: function () {
      if (this.password === this.password1) {
        this.isExistPassword = true;
      } else {
        this.isExistPassword = false;
      }
    },
  },

  methods: {

    // 注册
    register() {
      if (this.isExistUserName == false && this.isExistPassword == true) {
        this.axios
          .post("/user/register", {
            userName: this.userName,
            password: this.password,
            gender: parseInt(this.selected),
          })
          .then((res) => {
            if (res.errno && res.errno == 10009) {
              this.$message.error("您输入的数据格式不正确");
            } else {
              this.$message.success("注册成功");
              this.$router.push("/login");
            }
          });
      } else {
        this.$message.error("输入的信息有错误");
      }
    },

    // 判断是否登录
    isLogin() {
      // 通过获取 cookie 来判断是否登录
      if (this.$cookie.get(constant.COOKIE)) {
        this.islogin = true;
      } else {
        this.islogin = false;
      }
    },
   
  },
};
</script>
<style lang="scss">
.register {
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
  .exit {
    font-size: 10px;
  }
}
</style>