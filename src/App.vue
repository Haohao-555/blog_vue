<template>
  <div id="app">
    <router-view :key="$route.fullPath"></router-view>
  </div>
</template>

<script>
export default {
  name: "App",
  created() {
    window.addEventListener("beforeunload", () => {
      const state = this.$store.state;
      window.sessionStorage.setItem("store", JSON.stringify(state));
    });
    this.init();
  },
  data() {
    return {
     
    };
  },
  methods: {
    init() {
      let store = window.sessionStorage.getItem("store")
      if (store) {
        this.$store.dispatch("saveUserInfo", JSON.parse(store).userInfo);
        sessionStorage.removeItem("store"); 
      } else {
        this.axios.get("/user/isLogin").then((res) => {
        if (res) {
          this.$store.dispatch("saveUserInfo", res);
        }
      });
      }
    },
  },
};
</script>

<style lang="scss">
@import "../public/reset.scss";
@import "../public/icon.css";
</style>
