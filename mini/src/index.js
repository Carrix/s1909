import React from 'react'
import ReactDOM from 'react-dom'

// const createApp=(props) =>{
//     return (
//         <div>
//             <h1>Welcome {props.title}!!!</h1>
//         </div>
//     )
// }
// const app = createApp({
//     title:'React 16.10'
// })
const App = (props) => {
    return (
        <div>
            <h1>Welcome {props.title}!!!</h1>
            <p>优秀{props.title}</p>
        </div>
    )
}
ReactDOM.render(
    <App title="222" />,
    document.querySelector('#root')
)