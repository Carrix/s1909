
import * as types  from './actionTypes.js'

import { fromJS } from 'immutable'

const defaultState = fromJS({
    list:[]
})

export default (state=defaultState,action)=>{
	if(action.type == types.SET_PAGE){
        return state.set('list',fromJS(action.payload.list))
    }
    return state
}