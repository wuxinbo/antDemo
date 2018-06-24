
import { Layout, Menu, Row, Col } from 'antd';
import React, { Component } from 'react';
import menu from '../menu/Menu'
import User from './User'
import { StateStore, MENU_ACTION_TYPE} from '../redux/Redux'
const { Header } = Layout;

class CHeader extends Component {
    constructor(props) {
        super(props)
        this.state = { sliderMenu: null }
    }
    componentDidMount(){

    }
    handleMenuClick(item) {
        StateStore.dispatch({ type: MENU_ACTION_TYPE, menu: item })
    }
    render() {
        return (
            <Header className="header" style={{ background: "#00796a" }}>
                <Row gutter={24}>
                    <Col span={3}>
                        <div className="logo" />
                    </Col>
                    <Col span={19}>
                        <Menu
                            mode="horizontal"
                            defaultSelectedKeys={[menu[0].key]}
                            onSelect ={() => console.log('select item')}
                            style={{
                                lineHeight: '64px', color: '#fff',
                                width: '500px',
                                background: "#00796a"
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
                    <Col span={2}>
                            <User />
                    </Col>
                </Row>
            </Header>
        )
    }
}
export default CHeader