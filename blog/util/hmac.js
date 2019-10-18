/*
* @Author: Chris
* @Date:   2019-10-18 12:47:04
* @Last Modified by:   Chris
* @Last Modified time: 2019-10-18 12:49:02
*/
const crypto = require('crypto')

module.exports = (str)=>{
	const hmac = crypto.createHmac('sha512','safasdasdasf12312')
	hmac.update(str)
	return hmac.digest('hex')
}