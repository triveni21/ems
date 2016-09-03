import React from 'react';

import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import * as actionCreators from '../../actions/eventActions';
import Header from './Header'
import MenuItems from './MenuItems'
import EventListing from './EventListing'
import EventDetails from './EventDetails'
import HorizontalScroll from './HorizontalScroll'

function mapStateToProps(state){
	return {
		events: state.events
	};
}

function mapDispatchToProps(dispatch){
	return {
		actions: bindActionCreators(actionCreators, dispatch)
	};
}
 
class Main extends React.Component {
	componentWillMount(){
		this.props.actions.displayOnGoingEvents();
	}

	render(){
		console.log(this.props.events);
		return (
			<div>
				<Header className="header-div"/>
				<br/><br/>
				<HorizontalScroll className="img_container"/>
				<br/><br/>
				<MenuItems/>
			</div>
		);

		// return null;
	}
}

export default connect(mapStateToProps, mapDispatchToProps)(Main);
// class Main extends React.Component {
//     render() {
//         return (
//             <div>
//                 Hello
//             </div>
//         );
//     }
// }

// module.exports = Main;

// import { applyMiddleware, createStore } from 'redux';
// import logger from 'redux-logger';
// import axios from 'axios';
// import thunk from 'redux-thunk';
// // import logger from 'redux-logger';

// const initialState = {
// 	fetching: false,
// 	fetched: false,
// 	users: [],
// 	error:null
// };

// const reducer = function(state = initialState, action){
// 	switch (action.type) {
// 		case "FETCH_USER_START": {
// 			return {...state, fetching: true}
// 			break;
// 		}
// 		case "RECEIVE_USERS": {
// 			return {...state, fetching: false, users: action.payload}
// 			break;
// 		}
// 		case "FETCH_USERS_ERROR": {
// 			return {...state, fetching: false, fetched: true, error: action.payload}
// 			break;
// 		}
// 	}
// 	return state;
// }

// const middleware = applyMiddleware(thunk, logger());

// const store = createStore(reducer, 0, middleware);

// store.subscribe(() => {
// 	console.log("State changed ", store.getState())
// })

// store.dispatch((dispatch) =>{
// 	dispatch({type: "FETCH_USER_START"});
// 	axios.get("http://rest.learncode.academy/api/wstern/users")
// 		.then((response) => {
// 			dispatch({type: "RECEIVE_USERS", payload: response.data})
// 		})
// 		.catch((err)=>{
// 			dispatch({type: "FETCH_USERS_ERROR", payload: err})
// 		})
// })
