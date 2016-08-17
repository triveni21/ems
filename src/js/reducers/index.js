import {combineReducers} from 'redux'

import events from './eventsReducer'
import user from './userReducer'
import login from './LoginReducer'

export default combineReducers({
	events,
	user,
	login,
})