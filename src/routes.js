import React from 'react';
import {Route, IndexRoute} from 'react-router';

import Login from './components/login_page/login';
import Banner from './Banner';
import SignUp from './components/Sign_Up/SignUp';
//routing
// The default always brings up the banner first
//IndexRoute makes it so that if it's on the slash, it will
//also render the 2nd component App.
//The other routes are just there to catch all possible hits
//to the home page
export default (
<Route path="/" component={Banner}>
  <IndexRoute component={Login} />
  <Route path="home" component={Login}/>
  <Route path="index" component={Login}/>
  <Route path="SignUp" component={SignUp}/> {/*This is so that the Sign up button can use it*/}
</Route>
);