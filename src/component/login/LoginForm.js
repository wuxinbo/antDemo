
import React, { Component } from 'react';
import {Form,Input,Button} from "antd"
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
                           <Input placeholder="用户名"/>
                       ) 
                    }
                </FormItem>    
                <FormItem >
                    {
                       getFieldDecorator("password",{})(
                           <Input placeholder="密码"/>
                       ) 
                    }
                </FormItem> 
                <FormItem >
                    {
                       (
                           <Button type="primary">
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