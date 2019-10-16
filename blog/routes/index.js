/*
* @Author: Chris
* @Date:   2019-10-16 16:30:28
* @Last Modified by:   Chris
* @Last Modified time: 2019-10-16 16:39:19
*/
const express = require('express')

const router = express.Router()

//显示首页
router.get('/', (req, res,next) => {
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