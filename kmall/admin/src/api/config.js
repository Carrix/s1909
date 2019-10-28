/*
* @Author: Chris
* @Date:   2019-10-28 14:39:49
* @Last Modified by:   Chris
* @Last Modified time: 2019-10-28 17:23:49
*/
export const SERVER = 'http://127.0.0.1:3000'


export const API_CONFIG = {
	login: 			['/sessions/users','post'],
	logout: 		['/sessions/users','delete'],
	getCounts: 		['/counts','get'],
	getUserList: 	['/users/list','get'],
}