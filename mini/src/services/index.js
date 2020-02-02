/*
* @Author: Carrix
* @Date:   2020-02-02 15:06:54
* @Last Modified by:   Carrix
* @Last Modified time: 2020-02-02 15:11:06
*/
import axios from 'axios'
import apis from './apis'

const ajax = axios.create({
	baseURL:apis.baseURL
})
//在这里还会去做一些全局的拦截器处理
export const getTodos = ()=>{
	return ajax.get(apis.todos)
}