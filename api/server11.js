const express = require("express");
const jwt = require("./module/jwt");
const bodyParser = require("body-parser");
const db = require("./module/db");
const upPic = require("./module/upPic");
const help = require("./module/help");
const app = express();
app.use(bodyParser.json());
app.use(express.static(__dirname+"/upload"));
app.get("/list",function (req,res) {
    res.json({
        ok:1,
        msg:"list"
    })
})

app.post("/logina",function (req,res) {
    const {adminName,passWord} = req.body;
    setTimeout(()=>{
        db.findOne("adminList",{
            adminName,
            passWord:help.md5(passWord)
        },function (err,adminInfo) {
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

})

app.all("*",function (req,res,next) {
    const token = req.headers.authorization;
    const info = jwt.decode(token);
    if(info.ok <1){
        res.json({
            ok:-2,
            msg:info.msg
        })
    }else{
        next()
    }
})
app.get("/token",function(req,res){
    res.json({
        ok:1,
        msg:"验证成功"
    })
})

app.get("/adminLog",function (req,res) {
        let pageIndex = req.query.pageIndex/1;

        let adminName = req.query.adminName;
        let whereObj = {};
        if(adminName){
            whereObj = {
                adminName:new RegExp(adminName)
            }
        }

        db.count("adminLog",whereObj,function (count) {
            let pageNum = 5;
            let pageSum = Math.ceil(count/pageNum);
            if(pageSum<1) pageSum = 1;
            if(pageIndex<1) pageIndex = 1;
            if(pageIndex>pageSum) pageIndex = pageSum;

            db.find("adminLog",{
                limit:pageNum,
                skip:(pageIndex-1)*pageNum,
                whereObj,
                sortObj:{
                    loginTime:-1
                }
            },function (err,adminLog) {
                setTimeout(()=>{
                    res.json({
                        ok:1,
                        pageIndex,
                        pageSum,
                        adminLog
                    })
                },200)
            })
        })
})

app.delete("/adminLog/:id",function (req,res) {
    db.deleteOneById("adminLog",req.params.id,function (err,results) {
        help.json(res,1,"删除成功")
    })
})

app.post("/addShopType",function(req,res){
    upPic(req,"shopTypePic",function(obj){
        db.insertOne("shopTypeList",{
            shopTypeName:obj.params.shopTypeName,
            shopTypePic:obj.params.newPicName,
            addTime:Date.now()
        },function (err,resutls) {
            help.json(res,1,'成功')
        });
        console.log(obj)
    });

})

app.get("/shopTypeList",function (req,res) {
    let pageIndex = req.query.pageIndex/1;
    db.count("shopTypeList",{},function (count) {
        let pageNum = 2
        // 页数
        let pageSum = Math.ceil(count/pageNum) ;
        if(pageSum<1) pageSum = 1;
        if(pageIndex<1) pageIndex=1;
        if(pageIndex>pageSum) pageIndex = pageSum;

        db.find("shopTypeList",{
            limit:pageNum,
            skip:(pageIndex-1)*pageNum,
            sortObj:{
                addTime:-1
            }
        },function (err,shopTypeList) {
            // setTimeout(()=>{
            res.json({
                ok:1,
                pageIndex,
                pageSum,
                shopTypeList
            })
            // },2000)

        })

    })
})

app.get("/allShopTypeList",function (req,res) {
    db.find("shopTypeList",{
        sortObj:{
            addTime:-1
        },
    },function (err,shopTypeList) {
        res.json({
            ok:1,
            shopTypeList
        })
    })
})

app.post("/addShop",function (req,res) {
    upPic(req,"shopPic",function (obj) {
        db.findOneById("shopTypeList",obj.params.shopTypeId,function (err,shopTypeInfo) {
            db.insertOne("shopList",{
                shopName:obj.params.shopName,
                shopPic:obj.params.newPicName,
                shopTypeId: obj.params.shopTypeId,
                shopTypeName: shopTypeInfo.shopTypeName,
                addTime:Date.now()
            },function (err) {
                help.json(res,1,"添加成功")
            })
        })

    })
})

app.get("/shopList",function (req,res) {
    let pageIndex = req.query.pageIndex/1;
    db.count("shopList",{},function (count) {
        let pageNum = 2
        // 页数
        let pageSum = Math.ceil(count/pageNum) ;
        if(pageSum<1) pageSum = 1;
        if(pageIndex<1) pageIndex=1;
        if(pageIndex>pageSum) pageIndex = pageSum;

        db.find("shopList",{
            limit:pageNum,
            skip:(pageIndex-1)*pageNum,
            sortObj:{
                addTime:-1
            }
        },function (err,shopList) {
            // setTimeout(()=>{
            res.json({
                ok:1,
                pageIndex,
                pageSum,
                shopList
            })
            // },2000)

        })

    })
})


app.listen(8081,function () {
    console.log("success");
})