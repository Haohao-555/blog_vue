module.exports = {
    devServer:{
      host:'localhost',
      port:8080,
      proxy:{
        '/api':{
          target:'http://127.0.0.1:7000',
          changeOrigin:true,
          pathRewrite:{
            '/api':'/api'
          }
        }
      }
    },
    // publicPath:'/app',
    // outputDir:'dist',
    // indexPath:'index2.html',
    // lintOnSave:false,
    // productionSourceMap:true,
    // chainWebpack:(config)=>{
    //   config.plugins.delete('prefetch');
    // }
  }
