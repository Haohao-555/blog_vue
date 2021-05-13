<template>
  <div class="inputItem col-md-12 col-sm-12 col-xs-12">
    <div class="col-md-12 col-sm-12">
      <textarea class="form-control" rows="4" style="resize: none" v-model="content"></textarea>
    </div>
    <div class="col-md-7 col-sm-7 col-xs-7 pic" style="padding-top: 10px"> 
      <button type="button" class="btn btn-primary" @click="submit">发布微博</button>
      <a>插入一张图片</a>
    </div>
  </div>
</template>
<script>
export default {
  name: "inputitem",
  data() {
    return {
      content: ''
    }
  },
  methods: {
    submit() {
      this.$emit('fabu', this.content)
    }
  },
};
</script>
<style lang="scss">
.inputItem {
  border-bottom: 1px solid #007bff;
  padding-bottom: 22px;
  .pic {
    padding-top: 10px;
    a {
      color: #007bff;
      font-size: 18px;
      background:  url("/img/pic.png") no-repeat;
      background-size: 30px;
      padding-left: 33px;
      padding-top: 2px;
      height: 30px;
      display: inline-block;
      margin-left: 10px;
      cursor: pointer;
    }
  }
}
</style>