import { Avatar,Dropdown, Icon } from 'antd';
import {Menu} from 'antd';
import React, { Component } from 'react';
/**
 * header 中的user头像。
 */
export default class User extends Component {

    render(){
        const menu = (
            <Menu>
              <Menu.Item key="0">
                <a href="http://www.alipay.com/">1st menu item</a>
              </Menu.Item>
              <Menu.Item key="1">
                <a href="http://www.taobao.com/">2nd menu item</a>
              </Menu.Item>
              <Menu.Divider />
              <Menu.Item key="3"  ><Icon type="logout"/> 退出</Menu.Item>
            </Menu>
          );
        return (
                <Dropdown overlay={menu} trigger={['click']}>
                    <div style={{cursor:'pointer',textAlign:'right'}}>
                     <Avatar src="https://tva1.sinaimg.cn/crop.13.111.413.413.180/e4da5133gw1e9f3wueh7wj20dy0imn05.jpg" size="small"/> 
                     <span style={{marginLeft:'10px',color:'#fff'}}>xbwuc </span>
                    </div>
                </Dropdown >
        )
    }
}