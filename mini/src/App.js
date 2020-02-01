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
				<TodoList todos={this.state.todos} />
				<Like />
			</Fragment>
		)
	}
}
















