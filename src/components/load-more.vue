<template>
  <div class="load-more col-md-12 col-sm-12 col-xs-12">
    <div class="load_container"  @click="$emit('load')">点击加载更多</div>
  </div>
</template>
<script>
export default {
  name: "load-more",
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
}
</style>