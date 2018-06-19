
import { Layout, Menu, Row, Col } from 'antd';
import React, { Component } from 'react';
const { Header } = Layout;
//custome header
class CHeader extends Component {
    render() {
        return (
            <Header className="header" style={{ background: "#00796a" }}>
                <Row gutter={12}>
                    <Col span={3}>
                        <div className="logo" />
                    </Col>
                    <Col span={9}>
                        <Menu
                            // theme="dark"
                            mode="horizontal"
                            defaultSelectedKeys={['1']}
                            style={{ lineHeight: '64px',color:'#fff',
                            background: "#00796a"  }}
                        >
                            <Menu.Item key="1">入库</Menu.Item>
                            <Menu.Item key="2">出库</Menu.Item>
                            <Menu.Item key="3">系统管理</Menu.Item>
                            <Menu.Item key="4">数据统计</Menu.Item>
                            <Menu.Item key="5">导入导出</Menu.Item>
                        </Menu>
                    </Col>
                </Row>


            </Header>
        )
    }
}
export default CHeader