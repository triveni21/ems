
import { applyMiddleware, createStore } from 'redux';
import logger from 'redux-logger';
import axios from 'axios';
import thunk from 'redux-thunk';
import reducer from './reducers'

const middleware = applyMiddleware(thunk, logger());

export default createStore(reducer, middleware);