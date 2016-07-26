import React from 'react';

import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import * as actionCreators from '../../actions/eventActions';
import { Router, Route, Link, browserHistory, IndexRoute  } from 'react-router'

function mapStateToProps(state){
	return {
		
	};
}

function mapDispatchToProps(dispatch){
	return {
		actions: bindActionCreators(actionCreators, dispatch)
	};
}
 
class Login extends React.Component {
	render(){
		return (
			<div>

				Login Form
				<ul>
					<Link to="home" >See Events</Link>
				</ul>
			</div>
		);

	}
}

export default connect(mapStateToProps, mapDispatchToProps)(Login);
