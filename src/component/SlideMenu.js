
import { Layout, Menu, Icon } from 'antd';
import React, { Component } from 'react';
import menu from './menu/Menu'
import { StateStore} from './redux/Redux'
const { Sider } = Layout;
const { SubMenu } = Menu;



class SlideMenu extends Component {
    constructor(props) {
        super(props)
        //加载菜单
        this.CsubMenu = this.CsubMenu.bind(this)
        this.state = {
            menu: menu[0]
        }
    }
    componentDidMount(){
        StateStore.subscribe(() => {
            this.setState({ menu: StateStore.getState() })
        }
        )
    }
    //自定义菜单，根据配置文件生成菜单
    CsubMenu() {
        const menu = this.state.menu
        const Cmenu = <Menu
            mode="inline"
            style={{ height: '100%', borderRight: 0 }}
        >
            {
                 menu.children.map(item => {
                    const items = item.children.map(item => <Menu.Item key={item.key}>{item.name}</Menu.Item>)
                    return (
                        <SubMenu key={item.key} title={<span><Icon type={item.icon} />{item.name}</span>} onTitleClick={item.click}>
                            {items}
                        </SubMenu>
                    )
                }) 
            }

        </Menu>
        return this.state.menu != null ? Cmenu : null;
    }
    render() {
        const menu = <Sider width={200} style={{ background: '#00796a' }}>
            <this.CsubMenu />
        </Sider>
        return menu;
    }
}
export default SlideMenu