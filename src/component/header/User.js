import { Avatar, Dropdown, Icon } from 'antd';
import { Menu } from 'antd';
import React, { Component } from 'react';
/**
 * header 中的user头像。
 */
export default class User extends Component {

    render() {
        const menu = (
            <Menu>
                <Menu.Item key="0">
                    <span> <Icon type="user" /> 个人中心</span>
                </Menu.Item>
                <Menu.Item key="1">
                    <span> <Icon type="setting" /> 设置 </span>
                </Menu.Item>
                <Menu.Divider />
                <Menu.Item key="3"  >
                    <span onClick={()=> console.log("hello")}> <Icon type="logout" /> 退出 </span>
                </Menu.Item>
            </Menu>
        );
        return (
            <Dropdown overlay={menu} trigger={['hover']}>
                <div className="user">
                    <Avatar src="https://tva1.sinaimg.cn/crop.13.111.413.413.180/e4da5133gw1e9f3wueh7wj20dy0imn05.jpg" size="small" />
                    <span style={{ marginLeft: '10px'}}>xbwuc </span>
                </div>
            </Dropdown >
        )
    }
}