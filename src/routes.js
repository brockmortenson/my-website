import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Landing from './Components/Landing';
import Skills from './Components/Skills';
import Experience from './Components/Experience';
import Projects from './Components/Projects';
import Resume from './Components/Resume';

export default (
    <Switch>
        <Route exact path='/' component={Landing} />
        <Route path='/Skills' component={Skills} />
        <Route path='/Experience' component={Experience} />
        <Route path='/Projects' component={Projects} />
        <Route path='/Resume' component={Resume} />
    </Switch>
)