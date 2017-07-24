import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import store from './store/store'
import { Provider } from 'react-redux'
import axios from 'axios'

store.dispatch({
  type: "BLOG_DATA",
  payload:axios.get('https://jsonplaceholder.typicode.com/photos')
})
ReactDOM.render(<Provider store={store}><App /></Provider>, document.getElementById('root'));
registerServiceWorker();
