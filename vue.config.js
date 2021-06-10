module.exports = {
    devServer:{
      host:'localhost',
      port:8080,
      proxy:{
        '/api':{
          target:'http://127.0.0.1:8000',
          changeOrigin:true,
          pathRewrite:{
            '/api':'/api'
          }
        }
      }
    },
    publicPath:'./',
    productionSourceMap:false,
    configureWebpack: (config) => {
      config.mode = 'production';
      config["performance"] = {
        "maxEntrypointSize": 10000000,
        "maxAssetSize": 30000000,
      }  
    },
    css: {
      extract:{
         ignoreOrder: true,
      } 
    },

  }
