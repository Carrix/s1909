/*
* @Author: Chris
* @Date:   2019-10-16 16:30:28
* @Last Modified by:   Chris
* @Last Modified time: 2019-10-19 11:24:09
*/
const express = require('express')
const UserModel = require('../models/user.js')

const router = express.Router()
//权限验证
router.use((req,res,next)=>{
	if(req.userInfo.isAdmin){
		next()
	}else{
		res.send('<h1>请用管理员账号登录</h1>')
	}
})

//显示后台管理首页
router.get('/', (req, res) => {
	res.render("admin/index",{
		userInfo:req.userInfo
	})
})
//显示用户列表
router.get('/users',(req,res)=>{
	UserModel.find({})
	.then(users=>{
		res.render("admin/user_list",{
			userInfo:req.userInfo,
			users:users
		})
	})
	.catch(err=>{
		console.log('get users err:',err)
	})
	
})
module.exports = router