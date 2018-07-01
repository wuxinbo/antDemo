
import React, { Component } from 'react';
import { Icon, Popover } from 'antd';
import { connect } from 'dva';
import './Header.css'
/**
 *   站内信
 */
class Notice extends Component {
    render(){
        return (
            <Popover >
                <span className="mail">
                <Icon type="mail" />
                </span>
            </Popover >    
        )
    }
}
export default connect()(Notice)
