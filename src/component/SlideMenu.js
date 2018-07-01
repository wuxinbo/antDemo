
import { Layout, Menu, Icon } from 'antd';
import React, { Component } from 'react';
import { connect } from 'dva';
import { history } from './router/route';
const { Sider } = Layout;
const { SubMenu } = Menu;



class SlideMenu extends Component {
    constructor(props) {
        super(props)
        //加载菜单
        this.CsubMenu = this.CsubMenu.bind(this)
        // console.log(this.props)

    }
    //自定义菜单，根据配置文件生成菜单
    CsubMenu() {
        const menu = this.props.menu
        console.log("props.menu is "+menu)
        const Cmenu = <Menu
            mode="inline"
            style={{ height: '100%', borderRight: 0 }}
        >
            {
                 menu.children.map(item => {
                    const items = item.children.map(item => <Menu.Item key={item.key}>{item.name}</Menu.Item>)
                    return (
                        <SubMenu key={item.key} title={<span><Icon type={item.icon} />{item.name}</span>} 
                            onTitleClick={()=>{
                                history.push(menu.path+item.path)
                                this.props.dispatch({type:"menu/breadcrumb",parentPath:menu.name,currentPath:item.name})
                            }}
                            >
                            {items}
                        </SubMenu>
                    )
                }) 
            }

        </Menu>
        return this.props.menu != null ? Cmenu : null;
    }
    render() {
        const menu = <Sider width={200} style={{ background: '#00796a' }}>
            <this.CsubMenu />
        </Sider>
        return menu;
    }
}
export default connect(({menu})=> ({menu:menu.secondMenu})) (SlideMenu)