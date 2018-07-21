
import React, { Component } from 'react';
import {Form,Input,Button,Icon} from "antd"
//登录表单
const FormItem = Form.Item
class LoginForm extends Component {
    render(){
        const { getFieldDecorator } = this.props.form
        return (
            <div id="loginForm">
            <Form layout="vertical" >
                <FormItem >
                    {
                       getFieldDecorator("username",{})(
                           <Input prefix={<Icon type="user" />} placeholder="用户名"/>
                       ) 
                    }
                </FormItem>    
                <FormItem >
                    {
                       getFieldDecorator("password",{})(
                           <Input prefix={<Icon type="lock" />} type="password" placeholder="密码"/>
                       ) 
                    }
                </FormItem> 
                <FormItem >
                    {
                       (
                           <Button type="primary" id="loginSubmit">
                               登录
                           </Button>    
                       ) 
                    }
                </FormItem>    
            </Form>
            </div>
        )
    }
}
export default Form.create()(LoginForm)