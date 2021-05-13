<template>
  <div>
    <nav-header @go="go"></nav-header>
    <router-view></router-view>
    
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
      type: 0,
    };
  },
  methods: {
    go(type) {
      this.type = type;
      if (type == 1) {
        this.$router.push("/index");
      } else if (type == 2) {
        this.$router.push("/profile/huangjiahao");
      } else if (type == 3) {
        this.$router.push("/square");
      } else if (type == 4) {
        this.$router.push("/setting");
      }
    },
  },
};
</script>
<style lang="scss">
</style>