/*
* @Author: Chris
* @Date:   2019-10-17 10:56:01
* @Last Modified by:   Chris
* @Last Modified time: 2019-10-20 14:12:35
*/
const mongoose = require('mongoose')

//1.定义Schema
const CategorySchema = new mongoose.Schema({
	name: {
		type:String,
		required:[true,"分类必须输入"],
	},
	order:{
		type:Number,
		default:0
	},
})
const CategoryModel = mongoose.model('Category',CategorySchema)


module.exports = CategoryModel
