
import { Layout, Menu, Row, Col } from 'antd';
import React, { Component } from 'react';
import menu from '../menu/Menu'
import User from './User'
import { connect } from 'dva';
import { history } from '../router/route';
import Notice from './Notice';
const { Header } = Layout;

class CHeader extends Component {
    componentDidMount(){

    }
    handleMenuClick(item) {
        this.props.dispatch({type:"menu/firstMenuClick",menu:item})
        // console.log("item.path "+item.path)
        history.push(item.path+item.children[0].path)
    }
    render() {
        return (
            <Header className="header" style={{background:'#fff',padding:'0 12px' }}>
                <Row gutter={24}>
                    <Col span={3}>
                        <div className="logo" >
                            <img alt="logo" style={{width:'50px',height:'50px'}} src={ require("../../assets/logo.jpg")} />
                            {/* <span > */}
                        </div>
                    </Col>
                    <Col span={17}>
                        <Menu
                            mode="horizontal"
                            defaultSelectedKeys={[menu[0].key]}
                            style={{
                                lineHeight: '64px',
                                // width: '500px'
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