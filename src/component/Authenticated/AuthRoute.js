import React, { Component } from 'react';
import { Route, Redirect} from 'dva/router'
import {history} from '../router/route'
//授权路由
//没有权限访问
const isAuthenticated=true 
class AuthRoute extends Component {
     render(){
         const {component:Component,...rest} =this.props
         return (
             <Route {...rest} render={props=>
                {
             return isAuthenticated?( <Component {...props} /> ):(<Redirect to={{
                 pathname:"/login",
                 state :{from :props.location}
                }}/>)
            }
             } />
         )
     }
}
export default AuthRoute