import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Landing from './Components/Landing';
import Resume from './Components/Resume';
import Projects from './Components/Projects';

export default (
    <Switch>
        <Route exact path='/' component={Landing} />
        <Route path='/Projects' component={Projects} />
        <Route path='/Resume' component={Resume} />
    </Switch>
)