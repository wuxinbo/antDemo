
import React, { Component } from 'react';
import {connect} from "dva"
import "./index.css"
import LoginForm from './LoginForm';
//登录页面
class Login extends Component{
    componentDidMount(){
        this.props.dispatch({type:"login/init"})
    }
    render(){
        return (
            <div id="body" >
                {/* logo */}
                <div>
                    
                </div>    
                {/* 登录表单 */}
                <LoginForm placeholderPwd={this.props.placeholderPwd} placeholderUserName={this.props.placeholderUserName}/>
            </div>    
        ) 
    }
}
export default connect(({login,loading})=>({
    placeholderPwd:login.placeholderPwd,
    placeholderUserName:login.placeholderUserName
}))(Login)