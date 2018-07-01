
import React, { Component } from 'react';
import { Icon, Popover } from 'antd';
import { connect } from 'dva';
/**
 *   站内信
 */
class Notice extends Component {
    render(){
        return (
            <Popover >
                {/* hello */}
                <Icon type="Mail" />
            </Popover >    
        )
    }
}
export default connect()(Notice)
