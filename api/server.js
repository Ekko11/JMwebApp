const express = require("express");
const db = require("./module/db");
const help = require("./module/help");
const jwt = require("./module/jwt");
const bodyParser = require("body-parser");
const app = express();
app.use(bodyParser.json());
app.all("*",function (req,res,next) {
    // res.header('Access-Control-Allow-Headers', 'Content-Type, Content-Length, Authorization, Accept, X-Requested-With , yourHeaderFeild');
    // res.header("Access-Control-Allow-Methods","DELETE,PUT,POST,GET,OPTIONS");
    res.header("Access-Control-Allow-Origin","*");
    res.header("Access-Control-Allow-Methods","DELETE,PUT");
    res.header("Access-Control-Allow-Headers","content-type");
    next();
})
//  登录
app.post("/login",function (req,res) {
    const {adminName,passWord} = req.body;
    // console.log(help.md5(passWord))
    setTimeout(()=>{
        db.findOne("adminList",{
            adminName,
            passWord:help.md5(passWord)
        },function (err,adminInfo) {
            // console.log(adminInfo);
            if(adminInfo){
                db.insertOne("adminLog",{
                    adminName,
                    loginTime:Date.now()
                },function (err) {
                    // 登陆成功
                    res.json({
                        ok:1,
                        msg:"登陆成功",
                        adminName,
                        token:jwt.encode(adminName)
                    })
                })

            }else{
                console.log(121212);

                // 登陆失败
                help.json(res);
            }
        })
    },2000)

});

//  注册
app.post("/register",function (req,res) {
    const {adminName,passWord} = req.body;
    console.log(req.body);
    setTimeout(()=>{
        db.insertOne("adminList",{
            adminName,
            passWord:help.md5(passWord)
        },function (err,adminins) {
            // 注册成功
            if(adminins){
            res.json({
                ok:1,
                msg:"注册成功",
                adminName
            })}else {
                help.json(res)
            }
        })
    },2000)
})

app.listen(80, function () {
    console.log("success")
    }
);







