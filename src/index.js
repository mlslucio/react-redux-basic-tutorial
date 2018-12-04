import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { createStore } from 'redux';
import AppRoutes from './routes';

import postReducer from './reducers/postReducer';
import { Provider } from 'react-redux';


const store = createStore(postReducer);
ReactDOM.render( 
   <Provider store={store}><AppRoutes />      
   </Provider>, document.getElementById('root')
);