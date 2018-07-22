
import { Layout, Menu, Row, Col } from 'antd';
import React, { Component } from 'react';
import menu from '../menu/Menu'
import User from './User'
import { connect } from 'dva';

import Notice from './Notice';
import app from '../..';
const { Header } = Layout;

class CHeader extends Component {
    componentDidMount(){

    }
    handleMenuClick(item) {
        // console.log("menu is "+item.name)
        this.props.dispatch({type:"menu/firstMenuClick",menu:item})
        const fullPath=item.path+item.children[0].path
        // console.log("fullpath is "+fullPath)
        app._history.push(fullPath)
    }
    render() {
        return (
            <Header className="header" style={{background:'#fff',padding:'0 12px' }}>
                <Row gutter={24}>
                    <Col span={5}>
                        <div className="logo" >
                            <img alt="logo" style={{width:'50px',height:'50px'}} src={ require("../../assets/logo.jpg")} />
                            <span style={{marginLeft:"20px",fontSize:"20px"}}>合川市行政执法系统</span>
                        </div>
                    </Col>
                    <Col span={15}>
                        <Menu
                            mode="horizontal"
                            defaultSelectedKeys={[menu[0].key]}
                            style={{
                                lineHeight: '64px',
                                background: "#fff"
                            }}
                        >
                            {
                                menu.map(item => {
                                    return (
                                        <Menu.Item key={item.key}  onClick={() => this.handleMenuClick(item)}>
                                            {item.name}
                                        </Menu.Item>)
                                })

                            }
                        </Menu>
                    </Col>
                    {/* 头像 */}
                    <Col span={4} style={{textAlign:'right'}}>
                    {/* 站内信 */}
                            <Notice />
                            <User />
                    </Col>
                 </Row>
            </Header>
        )
    }
}
export default connect ()(CHeader)