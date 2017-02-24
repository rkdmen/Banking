// Application entrypoint.

// Load up the application styles
require('../styles/application.scss');

// Render the top-level React component
import React from 'react';
import ReactDOM from 'react-dom';
import { createStore, applyMiddleware, combineReducers } from 'redux';
import { Provider } from 'react-redux'
import promise from 'redux-promise';
import { Router, hashHistory } from 'react-router'
import { syncHistoryWithStore, routerReducer } from 'react-router-redux'

//Routes
import routes from './routes';

import rootReducer from './reducers/index';

const Store = createStore(
  combineReducers({
    reducer: rootReducer,
    routing: routerReducer
  }),
    applyMiddleware(promise)
);

// Create an enhanced history that syncs navigation events with the store
const history = syncHistoryWithStore(hashHistory, Store);


ReactDOM.render(
    <Provider store={Store}>
        <Router history={history} routes={routes}/>
    </Provider>,
    document.getElementById('app')
);