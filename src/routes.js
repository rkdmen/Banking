import React from 'react';
import { Route, IndexRoute } from 'react-router';

//Components
import App from './components/App';
import Main from './components/Main';
import Bills from './components/Bills';
import Transfer from './components/Transfer';

export default (
    <Route path="/" component={App}>
        <IndexRoute component={Main}/>
        <Route path="overview" component={Main}/>
        <Route path="bills" component={Bills}/>
        <Route path="transfer" component={Transfer}/>
    </Route>
);
