/*
* @Author: Chris
* @Date:   2019-10-23 09:40:06
* @Last Modified by:   Chris
* @Last Modified time: 2019-10-27 21:53:39
*/
import React, { Component } from 'react'
import './App.css'

import { 
	BrowserRouter as Router, 
	Route, 
	Link,
	Switch,
    Redirect,
} from "react-router-dom"
import Login from 'pages/login'
import Home from 'pages/home'

import { getUsername } from 'util'

class App extends Component {
    render() {
        const ProtectRoute = ({component:Component,...rest})=>(<Route
            {...rest}
            render={(props)=>{
                return getUsername() ? <Component {...props} /> : <Redirect to="/login" />
            }}
         />)
        const LoginRoute = ({component:Component,...rest})=>(<Route
            {...rest}
            render={(props)=>{
                return getUsername() ? <Redirect to="/" /> : <Component {...props} />
            }}
        />)
        return (
        	<Router>
            	<div className="App">
                    <ProtectRoute exact path="/" component={Home} />
            		<LoginRoute path="/login" component={login} />
            	</div>
            </Router>
        )          
    }
}



export default App