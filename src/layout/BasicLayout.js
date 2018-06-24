import React, { Component } from 'react';
import Header from '../component/header/Header'
import SlideMenu from '../component/SlideMenu'
import { Layout, Breadcrumb } from 'antd';
import { SubRoute } from '../component/router/route'
const {Content,Footer} =Layout
/**
 * 用户登录进去后有主菜单和左边菜单基础布局文件
 */
export default class BasicLayout extends  Component {
    render(){
        return (
        <Layout>
          <Header />
          <Layout>
            <SlideMenu />
            <Layout style={{ padding: '0 24px 24px' }}>
              <Breadcrumb style={{ margin: '16px 0' }}>
                <Breadcrumb.Item>统计信息</Breadcrumb.Item>
              </Breadcrumb>
              <Content style={{ background: '#fff', padding: 24, margin: 0, minHeight: 480, maxWidth: 2200 }}>
                <SubRoute />
              </Content>
              <Footer style={{ textAlign: 'center' }}>
                demo Design ©2018 Created by Ant
          </Footer>
            </Layout>
          </Layout>
        </Layout>
        )
    }
}