
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
        history.push(item.path+item.children[0].path)
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
                    {/* <Col span={}>

                    </Col> */}
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