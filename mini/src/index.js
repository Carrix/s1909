import React from 'react'
import ReactDOM from 'react-dom'

// class App extends Component {
//     render() {
//         return (
//             <div className="app" id="appRoot">
//                 <h1 className="title">JSX原理</h1>
//                 <p>类组件是继承React.Component</p>
//             </div>
//         )
//     }
// }

// const appVDom = {
//     tag:'div',
//     attrs: {
//         className:'app',
//         id:'appRoot'
//     },
//     children:[
//         {
//             tag:'h1',
//             attrs:{
//                 className:'title'
//             },
//             children:['JSX原理']
//         },
//         {
//             tag:'p',
//             attrs:null,
//             children:['类组件是继承React.Component的']
//         }
//     ]
// }


// class App extends Component {
//     render (){
//         return (
//             <div className="app" id="appRoot">
//                 <h1 className="title">JSX原理</h1>
//                 <p>类组件是继承React.Component的</p>
//             </div>
//         )
//     }
// }


class App extends Component{
	render() {
		return (
			//React.createElement是一个方法，用于创建元素，可以有很多的参数，但是前两个是固定的
			//第一个可以理解为标签名
			//第二个可以理解为标签的属性
			//剩下的，继续写更多的子元素
			//React.createElement(type,[props],[...children])
			React.createElement(
				'div',
				{
					className:'app',
					id:'appRoot'
				},
				React.createElement(
					'h1',
					{
						className:'title'
					},
					'jsx原理'
				),
				React.createElement(
					'p',
					null,
					'类组件是继承React.Component的'
				),
			)
		)
	}
}

render(
	<App />,
	document.querySelector('#root')
)