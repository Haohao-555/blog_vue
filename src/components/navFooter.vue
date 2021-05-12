<template>
    <div class="footer col-lg-12" >
       <div class="footer_container">
           <h2>基于 node + Vue 全家桶-微博系统</h2>
           <span>源码下载 www.baidu.com</span>
       </div>
    </div>
</template>
<script>
export default {
    name: "navfooter",
}
</script>
<style lang="scss">
    .footer {
        margin-top:30px;
        width: 100%;
        height: 230px;
        background-color: #007bff;
        .footer_container {
            width: 80%;
            margin: 0 auto;
            height: 200px;
            // background-color: yellow;
            text-align: center;
            h2 {
                padding-top: 20px;
                color: #fff;
            }
            span {
              color: #333;
              cursor: pointer;
            }
        }
    }
</style>