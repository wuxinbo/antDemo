
import React, { Component } from 'react';
import "./index.css"
import LoginForm from './LoginForm';
//登录页面
class Login extends Component{

    render(){
        return (
            <div id="body" >
                <LoginForm />
            </div>    
        ) 
    }
}
export default Login