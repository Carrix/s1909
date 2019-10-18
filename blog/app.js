/*
* @Author: Chris
* @Date:   2019-10-15 16:35:44
* @Last Modified by:   Chris
* @Last Modified time: 2019-10-18 15:14:45
*/
const express = require('express')
const swig = require('swig')
const mongoose = require('mongoose')
const bodyParser = require('body-parser')
//app代表整个应用
const app = express()
const port = 3000
//1.连接数据库
mongoose.connect('mongodb://localhost/blog', { useNewUrlParser: true })
//解决findOneAndUpdate方法的警告
// mongoose.set('useFindAndModify', false)
//获取db对象
const db = mongoose.connection
//连接数据库失败
db.on('error',(err)=>{
	console.log('connection db error:',err)
	throw err
})
//连接数据库
db.once('open',()=>{
	console.log('connection db success')
})

//静态资源处理
//所有静态资源回去请求 public 目录下面的资源
//请求的是一个目录 去找目录下面的index.html
//如果找不到就会继续向下执行
app.use(express.static('public'))
//为了处理post/put请求的参数，设置bodyParser中间件
//parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }))
//parse application/json
app.use(bodyParser.json())
//bodyParser中间件执行完毕后会把post/put请求的参数以对象的形式保存在req.body上

//———————————————————————————————模版设置开始——————————————————————————————
//开发阶段设置不走缓存
swig.setDefaults({
	// cache: 'memory'
	cache:false
})
//配置应用模版
//第一个参数是模版名称，同时也是模版文件的扩展名
//第二个参数是解析模版的方法
app.engine('html',swig.renderFile)
//配置模版的存放目录
//第一个参数必须是views
//第二个参数是模版存放的目录
app.set('views','./views')

//注册模版引擎
//第一个参数必须是view engine
//第二个参数是模版名称，也就是app.engine的第一个参数
app.set('view engine','html')
//设置后就可以调用res.render()方法渲染模版
//———————————————————————————————模版设置结束——————————————————————————————






//———————————————————————————————路由设置开始——————————————————————————————
//路由从上向下匹配以指定路径开头的路由
//匹配到后,在匹配路由对象中的路径
//以 /user/register 为例
//首先匹配到 / 去 ./router/index.js 的router对象中找 /user/register 路径
//找不到后继续向下执行,匹配到 /user 去 ./routes/user.js 的router对象中找 /register 路径
//匹配到后执行里面的函数,在函数中如果res上有返回的函数整个请求结束
app.use("/",require('./routes/index.js'))
app.use("/user",require('./routes/user.js'))
//———————————————————————————————路由设置结束——————————————————————————————

app.listen(port, () => console.log(`app listening on port ${port}!`))


















