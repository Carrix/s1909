/*
* @Author: Chris
* @Date:   2019-10-16 16:30:28
* @Last Modified by:   Chris
* @Last Modified time: 2019-10-18 21:08:39
*/
const express = require('express')

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


module.exports = router