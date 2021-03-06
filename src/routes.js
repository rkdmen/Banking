import React from 'react';
import { Route, IndexRoute } from 'react-router';

//Components
import App from './components/App';
import Main from './components/Main';
import Error404 from './components/404.js';
import BillsOverviewContainer from './containers/Bills/BillsOverviewContainer';

export default (
    <Route path="/" component={App}>
        <IndexRoute component={Main}/>
        <Route path="overview" component={Main}/>
        <Route path="bills" component={BillsOverviewContainer}/>
        <Route path="*" component={Error404}/>
    </Route>
);
