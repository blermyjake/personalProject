import React from 'react';
import { Route, Switch} from 'react-router-dom';

import Need from "./components/pages/need";
import Have from './components/pages/have';
// main
import HomePage from './components/pages/homePage';
import About from './components/pages/components/about/about';

// have components
import Time from './components/pages/time';
import Donations from './components/pages/donations';
import Skills from './components/pages/skills';
import Heart from './components/pages/heart';
// need components
import Shelter from './components/pages/components/needs/shelter';
import Food from './components/pages/components/needs/food';
import Clothing from './components/pages/components/needs/clothing';
import Help from './components/pages/components/needs/help';




export default (
    <Switch>
        <Route exact path='/' component={HomePage} />

        <Route path='/have/time' component={Time} />
        <Route path='/have/donations' component={Donations} />
        <Route path='/have/skills' component={Skills} />
        <Route path='/have/heart' component={Heart} />

        <Route path='/need/shelter' component={Shelter} />
        <Route path='/need/food' component={Food} />
        <Route path='/need/clothing' component={Clothing} />
        <Route path='/need/help' component={Help} />

        <Route path='/about' component={About} />

        <Route path='/need' component={Need} />
        <Route path='/have' component={Have} />
        
    </Switch>
       
);