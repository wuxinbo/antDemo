
import React, { Component } from 'react';
import { Router, Switch, Route } from 'react-router-dom'
import { statis } from '../statics/Content'
import { screen } from '../screen/Content'
import createBrowserHistory from 'history/createBrowserHistory'
import BasicLayout from '../../layout/BasicLayout'
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
                    <Route path="/screen" component={BasicLayout} />
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
                    <Route exact path="/" component={statis} />
                    <Route path="/screen" component={screen} />
                </Switch>
            </Router>
        )
    }
}
export { CRoute, history, SubRoute };
