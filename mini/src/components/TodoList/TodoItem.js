/*
* @Author: Carrix
* @Date:   2020-01-31 16:50:02
* @Last Modified by:   Carrix
* @Last Modified time: 2020-01-31 17:05:03
*/
import React,{ Component } from 'react'

export default class TodoItem extends Component {
	render() {
		console.log(this.props)
		return (
			<li>
				{this.props.title} {this.props.isCompleted ? '已完成':'未完成'}
			</li>
		)
	}
}