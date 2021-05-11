<template>
  <div class="login">
    <h2>注册</h2>
    <form class="form-horizontal">
      <div class="form-group">
        <label for="inputEmail3" class="col-sm-2 control-label">账号：</label>
        <div class="col-sm-10">
          <input
            type="email"
            class="form-control"
            id="inputEmail3"
            placeholder="请输入账号"
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
          />
        </div>
      </div>
        <div class="form-group">
        <label for="inputPassword3" class="col-sm-2 control-label"
          >确定密码：</label
        >
        <div class="col-sm-10">
          <input
            type="password"
            class="form-control"
            id="inputPassword3"
            placeholder="请再次输入密码"
          />
        </div>
      </div>
      <div class="form-group">
        <div class="col-sm-12">
          <button type="submit" class="btn btn-primary btn-block" @click="register();">注册</button>
        </div>
      </div>
    </form>
  </div>
</template>
<script>
export default {
    name: "register",
    data() {
        return {
           
        }
    },
}
</script>
<style lang="scss">
    
</style>