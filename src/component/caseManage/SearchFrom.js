import React, { Component } from 'react';
import {  Input, Form, Button, Select} from 'antd';

const FormItem =Form.Item
class SearchForm extends Component {
    render(){
        const {getFieldDecorator} =this.props.form
        return (
        <Form layout="inline">
                    <FormItem>
                    <Input placeholder="案件编号"/>
                    </FormItem>
                    <FormItem label="分类">
                        {
                            getFieldDecorator("caseSubject",{})(
                            <Select style={{width:"150px"}} placeholder="请选择类别">
                                    <Select.Option value="1">市政设施管理</Select.Option>
                                    <Select.Option value="2">市容环境卫生管理</Select.Option>
                                    <Select.Option value="3">环境卫生管理</Select.Option>
                                    <Select.Option value="4">废弃物管理</Select.Option>
                                </Select>
                            )
                        }
                    </FormItem> 
                    <FormItem label="状态">
                        {
                            getFieldDecorator("status",{})(
                            
                                <Select style={{width:"150px"}} placeholder="请选择状态">
                                    <Select.Option value="1">新建</Select.Option>
                                    <Select.Option value="2">立案</Select.Option>
                                    <Select.Option value="3">审批</Select.Option>
                                    <Select.Option value="4">结案</Select.Option>
                                </Select>
                            )
                        }
                    </FormItem>  
                    <FormItem>
                        <Button icon="search">搜索</Button>
                    </FormItem>       
        </Form> 
        )   
    }
}
export default Form.create()(SearchForm)