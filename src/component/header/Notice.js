
import React, { Component } from 'react';
import { Icon, Popover, Badge, Tabs, List, Avatar, Spin } from 'antd';
import { connect } from 'dva';
import './Header.css'
/**
 *   站内信
 */
const TabPane = Tabs.TabPane
class Notice extends Component {

    componentDidMount() {
        console.log("loading is "+JSON.stringify(this.props.loading1))
    }
    getTabs() {
        const { msgs } = this.props
        return (
            <Spin spinning={this.props.loading}>
            <Tabs >
                {msgs.map(msg =>
                    (
                        <TabPane tab={msg.tab} key={msg.key}>
                            <this.GetList msgs={msg.list} />
                        </TabPane>
                    )
                )
                }
            </Tabs>
            </Spin>
        )
    }
    handlePopver(visible){
        if(visible){
            this.props.dispatch({type:"notice/queryNotice"})
        }
    }
    GetList(props) {
        return (
            <List >
                {
                    props.msgs.map(item => {
                        return (
                            <List.Item key={item.id}>
                                <List.Item.Meta
                                    avatar={<Avatar src="https://tva1.sinaimg.cn/crop.13.111.413.413.180/e4da5133gw1e9f3wueh7wj20dy0imn05.jpg" />}
                                    title={item.content}
                                    description={item.date}
                                />
                            </List.Item>
                        );
                    }
                    )
                }
            </List>
        )
    }
    render() {
        return (
            <Popover content={this.getTabs()} onVisibleChange={(visible)=>this.handlePopver(visible)} placement="bottomRight" >
                <div className="mail">
                    <Badge count={this.props.count} >
                        <Icon type="mail" className="mail" />
                    </Badge>
                </div>
            </Popover >
        )
    }
}

export default connect(({ notice,loading }) => ({
    loading1: loading,
    loading: notice.loading,
    msgs: notice.notice,
    count: notice.count
})
)(Notice)
