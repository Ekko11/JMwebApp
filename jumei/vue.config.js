const path = require("path")

module.exports = {
    //设置服务器代理  
    devServer :{
        proxy:{
            "/index":{
                target:"http://h5.jumei.com",
                changeOrigin:true
            },
            //可用   首页  母婴
            "/muandbaby":{
                target:"http://h5.jumei.com",
                changeOrigin:true
            },
              //可用   一起团
            "/yiqituan":{
                target:"http://s.h5.jumei.com",
                changeOrigin:true
            },

            //http://m.jumei.com/luxury/ajaxList?page=1&card_id=1837
            "/luxury":{
                target:"http://m.jumei.com",
                changeOrigin:true
            },
            "/product":{
                target:"http://h5.jumei.com",
                changeOrigin:true
            },
            "/mobile":{
                target:"http://s.h5.jumei.com",
                changeOrigin:true

            }
        
        }
    },
    //   设置以便于更方便找到对应文件夹
    configureWebpack:{
        resolve:{
            alias:{
                "@":path.join(__dirname,"./src"),
                "api":path.join(__dirname,"./src/api"),
                "components":path.join(__dirname,"./src/components"),
                "views":path.join(__dirname,"./src/views"),
                "common":path.join(__dirname,"./src/common"),
                "utils":path.join(__dirname,"./src/utils"),
                "router":path.join(__dirname,"./src/router"),
                "store":path.join(__dirname,"./src/store"),
                "lib":path.join(__dirname,"./src/lib"),
            }
        }
    }
}