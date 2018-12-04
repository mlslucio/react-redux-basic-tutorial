import React from 'react';
import { BrowserRouter, Route, Switch, Link } from 'react-router-dom';
import App from './App';
import TestComponent from './TestComponent';

export default () => {
 return (
   <BrowserRouter>
   <Switch>
   <Route exact path='/posts' component={App}/>
   <Route exact path='/post/edit' component={TestComponent}/>
   </Switch>
   </BrowserRouter>
 )
}