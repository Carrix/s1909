/*
* @Author: Chris
* @Date:   2019-10-27 19:50:35
* @Last Modified by:   Chris
* @Last Modified time: 2019-10-27 19:52:38
*/
export const saveUsername = (username)=>{
	window.localStorage.setItem('username',username)
}
export const getUsername = ()=>{
	return window.localStorage.getItem('username')
}
export const removeUsername = ()=>{
	window.localStorage.removeItem('username')
}