/*
* @Author: Carrix
* @Date:   2020-01-26 14:04:13
* @Last Modified by:   Carrix
* @Last Modified time: 2020-02-06 19:24:07
*/
import React, {Component} from 'react';
import PropTypes from 'prop-types';

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

TodoItem.propTypes = {
	content:PropTypes.string,
	deleteItem:propTypes.func,
	index:PropTypes.number
}

export default TodoItem;