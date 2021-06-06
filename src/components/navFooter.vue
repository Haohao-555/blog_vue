<template>
    <div class="navFooter col-md-12 col-sm-12 col-xs-12" >
       <div class="footer_container">
           <h2>基于 koa2 + Vue 全家桶-微博系统</h2>
           <span>前端涉及的技术栈: Vue + Vue-router + axios + vue-cookie + element UI + bootstrap + vue-at + textarea-caret + node-sass + sass-loader </span>
           <span>后端涉及的技术栈： Node + Koa2 + koa-redis + koa-router + sequelize + pm2 + redis + date-fns + mysql + supertest</span>
           <span>服务器： 阿里云 ECS 服务器 </span>
           <span @click="load">项目源码下载</span>
       </div>
    </div>
</template>
<script>
export default {
    name: "navfooter",
    methods: {
        load() {
            window.open("https://gitee.com/huang_student/blog_vue", "_blank")
        },
    },    
}
</script>
<style lang="scss">
    .navFooter {
        bottom: 0px;
        margin-top:126px;
        width: 100%;
        height: 240px;
        background-color: #007bff;
        .footer_container {
            width: 80%;
            margin: 0 auto;
            height: 200px;
            text-align: center;
            h2 {
                padding-top: 20px;
                padding-bottom:20px ;
                color: #fff;
                cursor: pointer;
            }
            span {
              color: #333;
              font-size: 16px;
              cursor: pointer;
              display: block;
              padding-bottom: 12px;
              &:last-child {
                  color: red;
                  &:hover {
                      text-decoration: underline;
                  }
              }
            }
        }
    }
</style>