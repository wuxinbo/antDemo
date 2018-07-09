import React, { Component } from 'react';
import { Input, Form, Button, Select } from 'antd';
import { connect } from 'dva';

const FormItem = Form.Item
//表单数据
let form = {
    id: "",
    caseSubject: "",
    status: ""
}

class SearchForm extends Component {

    search() {
        const getFieldValue = this.props.form.getFieldValue
        form ={
            id: getFieldValue("id"),
            caseSubject:getFieldValue("caseSubject"),
            status: getFieldValue("status")
        }
        this.props.dispatch({ type: "cases/search", data: form })
    }
    render() {
        const { getFieldDecorator } = this.props.form
        return (
            <Form layout="inline">
                <FormItem>
                    {
                        getFieldDecorator("id", {})(
                            <Input placeholder="案件编号" />
                        )
                    }

                </FormItem>
                <FormItem label="分类">
                    {
                        getFieldDecorator("caseSubject", {})(
                            <Select style={{ width: "150px" }} placeholder="请选择类别"allowClear >
                                <Select.Option value="市政设施管理">市政设施管理</Select.Option>
                                <Select.Option value="市容环境卫生管理">市容环境卫生管理</Select.Option>
                                <Select.Option value="环境卫生管理">环境卫生管理</Select.Option>
                                <Select.Option value="废弃物管理">废弃物管理</Select.Option>
                            </Select>
                        )
                    }
                </FormItem>
                <FormItem label="状态">
                    {
                        getFieldDecorator("status", {})(

                            <Select style={{ width: "150px" }} placeholder="请选择状态" allowClear>
                                <Select.Option value="新建">新建</Select.Option>
                                <Select.Option value="立案">立案</Select.Option>
                                <Select.Option value="审批">审批</Select.Option>
                                <Select.Option value="结案">结案</Select.Option>
                            </Select>
                        )
                    }
                </FormItem>
                <FormItem>
                    <Button icon="search" onClick={() => this.search()} >搜索</Button>
                </FormItem>
            </Form>
        )
    }
}

export default Form.create()(connect()(SearchForm))