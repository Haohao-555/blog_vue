<template>
  <div class="login">
    <h2>登录</h2>
    <form class="form-horizontal">
      <div class="form-group">
        <label for="inputEmail3" class="col-sm-2 control-label">账号：</label>
        <div class="col-sm-10">
          <input
            type="text"
            class="form-control"
            id="inputEmail3"
            placeholder="请输入账号"
             v-model="userName"
          />
        </div>
      </div>
      <div class="form-group">
        <label for="inputPassword3" class="col-sm-2 control-label"
          >密码：</label
        >
        <div class="col-sm-10">
          <input
            type="password"
            class="form-control"
            id="inputPassword3"
            placeholder="请输入密码"
            v-model="password"
          />
        </div>
      </div>
      <div class="form-group">
        <div class="col-sm-12">
          <button type="submit" class="btn btn-primary btn-block" @click="login()">登录</button>
          <button type="submit" class="btn btn-primary btn-block" @click="register();">注册</button>
        </div>
      </div>
    </form>
  </div>
</template>
<script>
export default {
  name: "login",
   data() {
        return {
            userName:'',
            password: '',
        }
    },
  methods: {
      register() {
           this.$router.push("/register");
      },
      login() {
        const { userName, password } = this
        this.axios.post("/user/login",{
          userName,
          password,
          gender:3,
        }).then((res) => {
          console.log(res);
        })
      }
  }
};
</script>
<style lang="scss">
.login {
  text-align: center;
  width: 756px;
  align-items: center;
  margin-left: -378px;
  margin-right: -104px;
  position: absolute;
  left: 50%;
  top: 30%;
}
</style>