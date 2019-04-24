import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './container/App/app';
import registerServiceWorker from './registerServiceWorker';
import {Router} from 'react-router-dom';
import history from './history';
import {Provider} from 'react-redux';
import { createStore,combineReducers,applyMiddleware,compose } from 'redux';
import reducer from './store/reducer';

const composeEnhancer =  window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store= createStore(reducer,composeEnhancer());


ReactDOM.render(<Provider store={store}><Router history={history}><App /></Router></Provider>, document.getElementById('root'));
// registerServiceWorker();
