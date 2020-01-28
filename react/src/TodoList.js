/*
* @Author: Carrix
* @Date:   2020-01-21 17:25:34
* @Last Modified by:   Carrix
* @Last Modified time: 2020-01-27 21:05:20
*/
import React, {Component,Fragment} from 'react';
import './style.css';
import TodoItem from './TodoItem';

class TodoList extends Component{
	constructor(props){
		super(props);
		this.state = {			//组件的状态
			inputValue:'react',	//input 框的内容
			list:[] 			//列表中的每一项
		}
		this.handleInputChange = this.handleInputChange.bind(this);
		this.handleBtnClick = this.handleBtnClick.bind(this);
		this.handleItemDelete = this.handleItemDelete.bind(this);
	}
	render(){
		return (
			<Fragment>
				<div>
					<label htmlFor="insertArea">输入内容</label>
						<input
							id="insertArea"
							className='input'
							value={this.state.inputValue}
							onChange={this.handleInputChange}
						/>
					<button onClick={this.handleBtnClick}>提交</button>
				</div>
				<ul>
					{this.getTodoItem()}				
				</ul>
			</Fragment>
		)
	}
	getTodoItem(){
		return this.state.list.map((item,index)=>{
			return(
				<TodoItem 
					key={index}
					content={item} 
					index={index}
					deleteItem={this.handleItemDelete}
				/>
			)
		})
	}

	handleInputChange(e){
		const value = e.target.value;
		this.setState(() => ({
				inputValue:value
			}));
	}

	handleBtnClick(){
		this.setState((prevState) =>({
			list:[...prevState.list,prevState.inputValue]
			inputValue:''
		}));
	}
	handleItemDelete(index){
		this.setState((prevState)=>{
			const list = [...prevState.list];
			list.splice(index,1);
			return {list}
		))
	}
}

export default TodoList; 