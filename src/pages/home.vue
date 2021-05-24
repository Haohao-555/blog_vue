<template>
  <div class="home">
    <!-- :isAt="isAt" -->
    <nav-header @go="go"></nav-header>
    <router-view></router-view>
    <el-backtop >回到顶部</el-backtop>
  </div>
</template>
<script>
import navHeader from "../components/navHeader";

export default {
  name: "home",
  components: {
    navHeader,
  },
  data() {
    return {
      // isAt: false,
    };
  },

  // watch: {
  //   $route: 'getPath'
  // },
  methods: {
    go(type) {
      this.type = type;
      if (type == 1) {
        if (this.$route.path !== "/index") {
          this.$router.push("/index");
        }
      } else if (type == 2) {
        if (this.$route.path !== "/profile" ) {
          this.$router.push("/profile");
        }
      } else if (type == 3) {
        if (this.$route.path !== "/square") {
          this.$router.push("/square");
        }
      } else if (type == 4) {
        if (this.$route.path !== "/setting") {
          this.$router.push("/setting");
        }
      }
    },

    // getPath() {
    //   let path = this.$route.path
    //   if (path == "/atMe") {
    //     this.isAt = true
    //   } else {
    //     this.isAt = false
    //   }
    // }
  },
};
</script>
<style lang="scss">
</style>