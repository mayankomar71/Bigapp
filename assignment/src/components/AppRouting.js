
import Login from './Login'
import React from 'react';
import Signup from './Signup'
import Home from './homecomponent'
import { Route, Switch, Redirect} from 'react-router-dom';

const Router=(props)=>{
    return(
        <div>  
            <Switch>      
                <Route exact path="/login" component={Login}></Route>
                <Route exact path="/signup" component={Signup}></Route>
                <Route exact path="/" component={Home}></Route>
                <Redirect from='*' to='/' />
            </Switch>   
        </div>
    )
} 

export default Router;