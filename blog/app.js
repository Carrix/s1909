/*
* @Author: Chris
* @Date:   2019-10-15 16:35:44
* @Last Modified by:   Chris
* @Last Modified time: 2019-10-16 17:43:47
*/
const express = require('express')
const swig = require('swig')
const mongoose = require('mongoose')

const app = express()

//1.连接数据库
mongoose.connect('mongodb://localhost/blog',{useNewUrlParser: true})

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
app.use(express.static('public'))
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

app.use("/",require('./routes/index.js'))


app.listen(3000, () => console.log('Example app listening on port 3000!'))


















