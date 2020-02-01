/*
* @Author: Carrix
* @Date:   2020-01-31 16:50:02
* @Last Modified by:   Carrix
* @Last Modified time: 2020-02-01 15:39:06
*/
import React,{ Component } from 'react'
const noop = () => {}
export default class TodoItem extends Component {
	constructor () {
		super()
		this.state = {}
	}
	handleCheckboxChange = () => {
// this.props.onCompletedChange && this.props.onCompletedChange(this.props.id)
		const {
			onCompletedChange = noop,
			id
		} = this.props
		onCompletedChange(id)
	}
	// static getDerivedStateFromProps () {
	// 	return {}
	// }
	UNSAFE_componentWillMount () {
		console.log('UNSAFE_componentWillMount')
	}
	render() {
		console.log('TodoItem render')
		const {
			isCompleted,
			title
		} = this.props
		return (
			<li>
				<input
				 checked={isCompleted}
				 onChange={this.handleCheckboxChange}
				 type="checkbox" 
				/>
				<span>{title} {isCompleted ? '已完成':'未完成'}</span>
			</li>
		)
	}
}