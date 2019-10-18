/*
* @Author: Chris
* @Date:   2019-10-16 16:30:28
* @Last Modified by:   Chris
* @Last Modified time: 2019-10-18 15:37:59
*/
const express = require('express')

const router = express.Router()

//显示首页
router.get('/', (req, res,next) => {
	//render方法作用:
	//1.模版中block的替换
	//2.把替换后的html返回到客户端
	res.render("main/index")
})

//显示列表页
router.get('/list', (req, res,next) => {
	res.render("main/list")
})

//显示详情页
router.get('/detail', (req, res,next) => {
	res.render("main/detail")
})

module.exports = router