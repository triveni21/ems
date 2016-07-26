import Main from './js/component/app/Main';
import Login from './js/component/app/Login';
import React from 'react';
import ReactDOM from 'react-dom';
import store from './js/store';
import { Provider } from 'react-redux';
import { Router, Route, Link, browserHistory, IndexRoute  } from 'react-router'

// ReactDOM.render(
// 	<Provider store={store}>
// 		<Main />
// 	</Provider>,
// 	document.getElementById('root')
// );


ReactDOM.render((
	<Provider store={store}>
	   <Router history = {browserHistory}>
	      <Route path = "/" component = {Login}>
	         <IndexRoute component = {Main} />
	         <Route path = "home" component = {Main} />
	      </Route>
	   </Router>
	</Provider>
), document.getElementById('root'))



