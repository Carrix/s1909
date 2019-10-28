
import * as types  from './actionTypes.js'

import { fromJS } from 'immutable'

const defaultState = fromJS({
    list:[
        {
            _id:1,
            username:'admin',
            isAdmin:false,
            phone:13388888888,
            email:'test@Chris.com',
            createdAt:'2019-09-12 11:12:12'
        }
    ]
})

export default (state=defaultState,action)=>{
	
    return state
}