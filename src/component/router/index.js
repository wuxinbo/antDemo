
import React, { Component } from 'react';
import {  Switch, Route, Redirect } from 'dva/router'
import BasicLayout from '../../layout/BasicLayout'
import AuthRoute from '../Authenticated/AuthRoute'
import Login from '../login';
import menu from '../menu/Menu'
import {routerRedux} from "dva/router"
import { wrapperComponnet } from './route';
/**
 * 主路由
 */
export default class CRoute extends Component {
    render() {
        
        const {ConnectedRouter} =routerRedux
        return (
            <ConnectedRouter history={this.props.history} >
                <Switch>
                    <Route path="/login" component={wrapperComponnet(this.props.app,["Login"],Login)}/>
                    {
                        menu.map(item =><AuthRoute key={item.key}  path={item.path} component={BasicLayout} />)
                    }
                    <Redirect from ="/" to={menu[0].path} />
                </Switch>
            </ConnectedRouter>
        )

    }
}