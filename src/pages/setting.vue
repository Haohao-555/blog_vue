<template>
  <div class="setting">
    <div class="set_container">
      <div class="top col-md-9 col-sm-9 col-xs-9">
        <h3>基本信息</h3>
        <form class="form-horizontal">
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
            <label for="inputcity" class="col-sm-2 control-label">头像</label>
            <div class="col-sm-2 col-md-2 col-xs-2">
              <img src="/img/1.jpg" />
            </div>
            <div class="col-sm-1" style="padding-top: 44px">
              <button type="file" class="btn btn-primary">选择头像</button>
            </div>
          </div>
          <div class="form-group">
            <div class="col-sm-offset-6 col-sm-4">
              <button type="submit" class="btn btn-primary">保存</button>
            </div>
          </div>
        </form>
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
            <div class="col-sm-offset-6 col-sm-4">
              <button type="submit" class="btn btn-danger">修改密码</button>
            </div>
          </div>
        </form>
      </div>
    </div>
    <nav-footer></nav-footer>
  </div>
</template>
<script>
import navFooter from "../components/navFooter";
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
    };
  },
};
</script>
<style lang="scss">
.setting {
  width: 100%;
  .set_container {
    width: 80%;
    // background-color: red;
    margin: 0 auto;
    padding-top: 10px;
    // height: 1000px;
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
      }
    }
    .bottom {
      padding-bottom: 16px;

      h3 {
        padding-left: 92px;
        font-size: 20px;
        padding-bottom: 12px;
      }
    }
  }
}
</style>