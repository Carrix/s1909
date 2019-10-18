/*
* @Author: Chris
* @Date:   2019-10-16 16:30:28
* @Last Modified by:   Chris
* @Last Modified time: 2019-10-18 16:23:40
*/
const express = require('express')
const UserModel = require('../models/user.js')
const hmac = require('../util/hmac.js')

const router = express.Router()

//注册
router.post('/register', (req, res) => {
	//1.获取参数
	const { username,password } = req.body
	//2.同名验证
	UserModel.findOne({username:username})
	.then(user=>{
		//已有同名用户
		if(user){
			res.json({
				status:10,
				message:"该用户名已经存在，请换一个"
			})
		}
		//没有同名用户
		else{
			//3.插入数据
			UserModel.insertMany({
				username:username,
				password:hmac(password)
			})
			.then(user=>{
				res.json({
					status:0,
					message:"注册成功",
					data:user
				})
			})
			.catch(err=>{
				throw err
			})
		}
	})
	.catch(err=>{
		console.log("insert user:",err)
		res.json({
			status:10,
			message:"服务器端错误，请稍后再试"
		})
	})
	
})
//登录
router.post('/login',(req,res)=>{
	//1.获取参数
	const { username,password } = req.body
	//2.验证
	UserModel.findOne({username:username,password:hmac(password)},"-password -__v")
	.then(user=>{
		//验证成功
		if(user){
			res.json({
				status:0,
				message:"登录成功",
				data:user
			})
		}
		//验证失败
		else{
			res.json({
				status:10,
				message:"用户名和密码错误"
			})
		}
	})
	.catch(err=>{
		console.log("insert user:",err)
		res.json({
			status:10,
			message:"服务器端错误，请稍后再试"
		})
	})
	
})


module.exports = router