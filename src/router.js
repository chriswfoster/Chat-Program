import React from 'react';
import {Route, Switch} from 'react-router-dom';
import {Provider} from 'react-redux';
import store from './store'

import Home from './components/Home/Home'



export default(
    <Provider store = {store}>
<Switch>
<Route path="/" component={Home}/>


    </Switch>
    </Provider>
)