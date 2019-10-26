/*
* @Author: Chris
* @Date:   2019-10-22 21:25:21
* @Last Modified by:   Chris
* @Last Modified time: 2019-10-26 15:07:59
*/
import React from 'react'
import ReactDOM from 'react-dom'

import { Provider } from 'react-redux'

import store from './store'

import App from './App.js'

ReactDOM.render(<Provider store={store}><App /></Provider>,document.getElementById('root'))