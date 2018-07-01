
import React, { Component } from 'react';
import { Router, Switch, Route, Redirect } from 'dva/router'
import createBrowserHistory from 'history/createBrowserHistory'
import BasicLayout from '../../layout/BasicLayout'
import menu from '../menu/Menu'
const history = createBrowserHistory()

/**
 * 主路由
 */
class CRoute extends Component {
    render() {
        return (
            <Router history={history}>
                <Switch>
                    {
                        menu.map(item =><Route key={item.key}  path={item.path} component={BasicLayout} />)
                    }
                    
                    {/* <Redirect from="/" to={menu[0].path} /> */}
                </Switch>
            </Router>
        )

    }
}
/**
 * 子路由
 */
class SubRoute extends Component {
    render() {
        return (
            <Router history={history}>
                <Switch>
                    {   menu.map (parent =>{
                        console.log("routepath is "+parent.path)
                        return parent.children.map(item =>{
                            // console.log("fullpath is "+)    
                            return <Route  key={item.key} exact path={parent.path+item.path} component={item.component} />
                        }
                        )
                    })
                        

                    }
                    {/* <Redirect from="/" to="index" /> */}
                </Switch>
            </Router>
        )
    }
}
export { CRoute, history, SubRoute };
