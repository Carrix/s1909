/*
* @Author: Chris
* @Date:   2019-10-29 17:00:05
* @Last Modified by:   Chris
* @Last Modified time: 2019-10-30 15:29:03
*/
const path = require('path')

module.exports = {
  pluginOptions: {
    'style-resources-loader': {
      preProcessor: 'less',
      patterns: [
      	path.resolve(__dirname, './src/assets/less/index.less')
      ]
    }
},
devServer:{
	port:3003
	}
}