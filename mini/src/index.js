import React,{Component} from 'react'
import {render} from 'react-dom'
import classNames from 'classnames'
import styled from 'styled-components'

import './index.css'

const Title = styled.h1`
	color:'#f00
`
class App extends Component{
	render(){
		const style={color:'#f00'}
		return (
			<div>
				<Title>元素中的样式</Title>
				<ol>
					<li style={style}>使用style内联创建</li>
					<li className="has-text-red">使用class的方式，但是在react里class要写成className</li>
					<li 
					className={classNames('a',{'b':true,'c':false})}
					>
						要动态添加不同的className就可以使用第三方的包叫className,比如这个li标签就只有a，b，没有c
					</li>
					<li>styled-components的使用</li>
				</ol>
			</div>
		)
	}
}



// class App extends Component{
// 	render() {
// 		return (
// 			//React.createElement是一个方法，用于创建元素，可以有很多的参数，但是前两个是固定的
// 			//第一个可以理解为标签名
// 			//第二个可以理解为标签的属性
// 			//剩下的，继续写更多的子元素
// 			//React.createElement(type,[props],[...children])
// 			React.createElement(
// 				'div',
// 				{
// 					className:'app',
// 					id:'appRoot'
// 				},
// 				React.createElement(
// 					'h1',
// 					{
// 						className:'title'
// 					},
// 					'jsx原理'
// 				),
// 				React.createElement(
// 					'p',
// 					null,
// 					'类组件是继承React.Component的'
// 				),
// 			)
// 		)
// 	}
// }

render(
	<App />,
	document.querySelector('#root')
)