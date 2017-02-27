import React from 'react';
import { Route, IndexRoute } from 'react-router';

//Components
import App from './components/App';
import Main from './components/Main';
import BillsOverviewContainer from './containers/Bills/BillsOverviewContainer';
import TransferContainer from './containers/Transfer/TransferContainer';

export default (
    <Route path="/" component={App}>
        <IndexRoute component={Main}/>
        <Route path="overview" component={Main}/>
        <Route path="bills" component={BillsOverviewContainer}/>
        <Route path="transfer" component={TransferContainer}/>
    </Route>
);
