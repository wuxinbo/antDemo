
import React, { Component } from 'react';
import { Router,Switch,Route } from 'react-router-dom'
import {statis}from '../statics/Content'
import {screen} from '../screen/Content'
import createBrowserHistory from 'history/createBrowserHistory'
const history = createBrowserHistory()
class CRoute extends Component{
    render (){
        return (
            <Router history={history}>
              <Switch>
                <Route exact path="/" component={statis} />
                <Route path="/screen" component={screen}/>
              </Switch>  
            </Router>
        )

    }
}
export {CRoute,history};
