<template>
  <div class="load-more col-md-12 col-sm-12 col-xs-12">
    <div class="load_container" :class="{active:isActive}" @click="load">点击加载更多</div>
  </div>
</template>
<script>
export default {
  name: "load-more",
  data() {
      return {
          isActive: false,
      }
  },
  methods: {
      load() {
          this.$emit('load')
          this.isActive = true
      }
  },
};
</script>
<style lang="scss">
.load-more {
  .load_container {
    width: 400px;
    text-align: center;
    margin: 12px auto 10px auto;
    padding-top: 4px;
    padding-bottom: 4px;
    cursor: pointer;
  }
  .active {
     border: 1px solid #007bff;
     transform: all 2s;
  }
}
</style>