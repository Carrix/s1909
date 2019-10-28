/*
 * @Author: Chris
 * @Date:   2019-10-23 09:40:06
 * @Last Modified by:   Chris
 * @Last Modified time: 2019-10-28 19:03:20
 */
import React, { Component } from 'react'
import {
    Route,
    Switch,
} from "react-router-dom"
import CategoryAdd from './add.js'
import CategoryList from './list.js'


import "./index.css"

class Category extends Component {
    constructor(props) {
        super(props)
    }
    render() {
        return (
            <Switch>
                <Route path="/category/add" component={CategoryAdd} />
                <Route path="/category/" component={CategoryList} />
            </Switch>
        )
    }
}


export default Category