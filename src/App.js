import React, { Component } from 'react';
import { Layout, Breadcrumb } from 'antd';
import { Provider } from 'react-redux'
import { StateStore} from './component/redux/Redux'
import Header from './component/Header'
import SlideMenu from './component/SlideMenu'
import { CRoute } from './component/router/route'
import 'antd/dist/antd.less';
const { Content, Footer } = Layout;
class App extends Component {
  render() {
    return (
      <Provider store={StateStore}>
        <Layout>
          <Header />
          <Layout>
            <SlideMenu />
            <Layout style={{ padding: '0 24px 24px' }}>
              <Breadcrumb style={{ margin: '16px 0' }}>
                <Breadcrumb.Item>统计信息</Breadcrumb.Item>
              </Breadcrumb>
              <Content style={{ background: '#fff', padding: 24, margin: 0, minHeight: 480, maxWidth: 2200 }}>
                <CRoute />
              </Content>
              <Footer style={{ textAlign: 'center' }}>
                demo Design ©2018 Created by Ant
          </Footer>
            </Layout>
          </Layout>
        </Layout>
      </Provider>
    );
  }
}

export default App;
