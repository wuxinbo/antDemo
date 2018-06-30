
import React, { Component } from 'react';
import { Router, Switch, Route } from 'react-router-dom'
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
                    <Route exact path="/" component={BasicLayout} />
                    <Route exact path="/index" component={BasicLayout} />
                    <Route exact path="/screen" component={BasicLayout} />

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
                    {
                        menu[0].children.map(item =>
                            <Route  key={item.key}exact path={item.path} component={item.component} />
                        )
                    }
                </Switch>
            </Router>
        )
    }
}
export { CRoute, history, SubRoute };
