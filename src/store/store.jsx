import { createStore, applyMiddleware } from 'redux';
import reducer from '../reducer/reducers';
import thunk from 'redux-thunk'
import promise from 'redux-promise-middleware'


export default createStore(reducer, applyMiddleware(promise(),thunk))
