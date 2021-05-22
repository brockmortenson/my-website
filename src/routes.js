import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Landing from './Components/Landing';
import Resume from './Components/Resume';

export default (
    <Switch>
        <Route exact path='/' component={Landing} />
        <Route path='/Resume' component={Resume} />
    </Switch>
)