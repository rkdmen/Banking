import React from 'react';
import { Route, IndexRoute } from 'react-router';

//Components
import App from './components/App';
import Main from './components/Main';
import BillsContainer from './containers/Bills/BillsContainer';
import TransferContainer from './containers/Transfer/TransferContainer';

export default (
    <Route path="/" component={App}>
        <IndexRoute component={Main}/>
        <Route path="overview" component={Main}/>
        <Route path="bills" component={BillsContainer}/>
        <Route path="transfer" component={TransferContainer}/>
    </Route>
);
