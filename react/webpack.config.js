/*
* @Author: Carrix
* @Date:   2020-01-15 21:39:15
* @Last Modified by:   Carrix
* @Last Modified time: 2020-02-03 12:41:15
*/
const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const MiniCssExtractPlugin = require('mini-css-extract-plugin')
module.exports = {
    mode:'development',//指定环境
	entry:'./src/index.js',//入口
	output:{
		path:path.resolve(__dirname,"dist"),//所有输出文件的目标路径
		filename:'[name]-[hash]-bundle.js'
	},
	module:{
		rules:[
			{
				test:/\.css$/,
				use:[
					MiniCssExtractPlugin.loader,
					'css-loader',
					'postcss-loader'
				],
			},{
				test:/\.less$/,
				use:[
				]
			}
		],
	},
	plugins:[
		new HtmlWebpackPlugin({
			title:'webpack',
			template:'public/index.html'//模版文件
		}),
		new MiniCssExtractPlugin({
			filename:'[name]-[hash].css'
		})
	],
	devServer:{
		port:3001,//指定服务端口
		historyApiFallback:true//让h5路由不向后端发送请求
	}
}