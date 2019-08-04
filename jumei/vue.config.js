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


            //猫眼  试验
            "/api":{
                target:"http://39.97.33.178",
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
                "lib":path.join(__dirname,"./src/lib")
            }
        }
    }
}