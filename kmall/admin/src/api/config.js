/*
* @Author: Chris
* @Date:   2019-10-28 14:39:49
* @Last Modified by:   Chris
* @Last Modified time: 2019-10-29 13:13:26
*/
export const SERVER = 'http://127.0.0.1:3000'


export const API_CONFIG = {
	login: 							['/sessions/users','post'],
	logout: 						['/sessions/users','delete'],
	getCounts: 						['/counts','get'],
	getUserList: 					['/users/list','get'],
	addCategories: 					['/categories','post'],
	getlevelCategories: 			['/categories/levelCategories','get'],
	getCategoriesList: 				['/categories/list','get'],
	updateCategoriesName: 			['/categories/name','put'],
	updateCategoriesMobileName: 	['/categories/mobileName','put'],
	updateCategoriesOrder: 			['/categories/order','put'],
	updateCategoriesIsShow: 		['/categories/isShow','put'],
}