import React, { Component } from 'react';
import { Provider } from 'react-redux'
import { StateStore} from './component/redux/Redux'
import 'antd/dist/antd.less';
import BasicLayout from './layout/BasicLayout'
class App extends Component {
  render() {
    return (
      <Provider store={StateStore}>
        <BasicLayout />
      </Provider>
    );
  }
}

export default App;
