/*
* @Author: Carrix
* @Date:   2020-01-31 16:50:02
* @Last Modified by:   Carrix
* @Last Modified time: 2020-02-02 13:20:52
*/
import React,{ Component } from 'react'
const noop = () => {}
export default class TodoItem extends Component {
	// 老版本的弊端：constructor里面通过props来初始化了一个state，在props修改之后，这个state不会再次更新
	// constructor (props) {
	// 	super()
	// 	this.state = {
	// 		completedText:props.isCompleted ? '完成' : '未完成'
	// 	}
	// }
	// 那么就需要借助于componentWillReceiveProps来做一次修正
	// UNSAFE_componentWillReceiveProps (nextProps){
	// 	this.setState({
	// 		completedText:nextProps.isCompleted ? '完成' : '未完成'
	// 	})
	// }


	constructor (){
		super()
		this.state = {
			completedText:''
		}
	}

	static getDerivedStateFromProps (props){
		return {
			completedText:props.isCompleted ? '完成' : '未完成'
		}
	}

	handleCheckboxChange = () => {
		const {
			onCompletedChange = noop,
			id
		} = this.props
		onCompletedChange(id)
	}
	shouldComponentUpdate (nextProps,nextState) {
		return nextProps.isCompleted !== this.props.isCompleted
	}
	render() {
		console.log('TodoItem {this.props.title} render')
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
				<span>{title} {this.state.CompletedText}</span>
			</li>
		)
	}
}







//第二种方法
// import React,{ PureComponent } from 'react'
// const noop = () => {}
// export default class TodoItem extends PureComponent {
// 	handleCheckboxChange = () => {
// 		const {
// 			onCompletedChange = noop,
// 			id
// 		} = this.props
// 		onCompletedChange(id)
// 	}
// 	render() {
// 		console.log('TodoItem {this.props.title} render')
// 		const {
// 			isCompleted,
// 			title
// 		} = this.props
// 		return (
// 			<li>
// 				<input
// 				 checked={isCompleted}
// 				 onChange={this.handleCheckboxChange}
// 				 type="checkbox" 
// 				/>
// 				<span>{title} {isCompleted ? '已完成':'未完成'}</span>
// 			</li>
// 		)
// 	}
// }