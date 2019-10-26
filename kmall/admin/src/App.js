/*
* @Author: Chris
* @Date:   2019-10-23 09:40:06
* @Last Modified by:   Chris
* @Last Modified time: 2019-10-26 18:30:44
*/
import React, { Component } from 'react'
import './App.css'

import { 
	BrowserRouter as Router, 
	Route, 
	Link,
	Switch
} from "react-router-dom"
import TodoList from 'pages/todolist'
import Login from 'pages/login'

class App extends Component {
    render() {
        return (
        	<Router>
            	<div className="App">
            		<Route path="/login" component={login} />
            	</div>
            </Router>
        )          
    }
}



export default App