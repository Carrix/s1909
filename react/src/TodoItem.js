/*
* @Author: Carrix
* @Date:   2020-01-26 14:04:13
* @Last Modified by:   Carrix
* @Last Modified time: 2020-01-28 16:28:18
*/
import React, {Component} from 'react';
class TodoItem extends Component{
	constructor(props){
		super(props);
		this.handleClick = this.handleClick.bind(this)
	}
	render(){
		const {content} = {this.props};
		return (
			<div onClick={this.handleClick}>
				{content}
			</div>
		)
	}
	handleClick(){
		const {deleteItem,index} = this.props;
		deleteItem(index);
	}
}

export default TodoItem;