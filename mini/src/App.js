import React, { Component,Fragment } from 'react'
import {
	TodoHeader,
	TodoInput,
	TodoList,
	Like
} from './components'

export default class App extends Component{
	// state = {
	// 	title:'待办事项列表'
	// }
	constructor(){
		super()
		this.state = {
			title:'待办事项列表',
			desc:'今日事今日毕',
			todos:[{
				id:1,
				title:'吃饭',
				isCompleted:true
			},{
				id:2,
				title:'睡觉',
				isCompleted:false
			}]
		}
	}
	addTodo = (todoTitle) => {
		console.log(todoTitle)
	// 	this.setState({
	// 		todos:this.state.todos.concat({
	// 			id:Math.random(),
	// 			title:todoTitle,
	// 			isCompleted:false
	// 		})
	// 	})
	// const newTodos = this.state.todos.slice()
	const newTodos = [...this.state.todos]
	
	newTodos.push({
		id:Math.random(),
		title:todoTitle,
		isCompleted:false
	})
	this.setState({
		todos:newTodos
	})
}

onCompletedChange = (id) => {
	console.log('onCompletedChange',id)
	this.setState((prevState)=>{
		return {
			todos:this.state.todos.map(todo =>{
				if(todo.id === id) {
					todo.isCompleted = !todo.isCompleted 
				}
				return todo
			})
		}
	})
}

	render(){
		return (
			<Fragment>
				<TodoHeader 
					desc={this.state.desc}
				>
					{this.state.title}
				</TodoHeader>
				<TodoInput 
					addTodo={this.addTodo}
				/>
				<TodoList
				 todos={this.state.todos}
				 // onCompletedChange={this.onCompletedChange} 
				/>
				<Like />
			</Fragment>
		)
	}
}
















