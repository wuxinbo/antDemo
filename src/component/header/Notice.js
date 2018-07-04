
import React, { Component } from 'react';
import { Icon, Popover, Badge, Tabs, List,Avatar } from 'antd';
import { connect } from 'dva';
import './Header.css'
/**
 *   站内信
 */
const TabPane = Tabs.TabPane
class Notice extends Component {
    getTabs() {
        const { msgs } = this.props
        return (
            <Tabs >
                {msgs.map(msg =>
                    (
                        <TabPane tab={msg.title} key={msg.key}>
                            <this.GetList msgs={msg.list} />
                        </TabPane>
                    )
                )
                }
            </Tabs>
        )
    }
    GetList(props) {
        return (
            <List  >
                {
                    props.msgs.map(item => {
                        console.log("item is" +item.content)
                        return (
                        <List.Item key={item.id}>
                            <List.Item.Meta
                                avatar={<Avatar src="https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png" />}
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
            <Popover content={this.getTabs()} placement="bottomRight" >
                <div className="mail">
                    <Badge count={10} >
                        <Icon type="mail" className="mail" />
                    </Badge>
                </div>
            </Popover >
        )
    }
}

export default connect(({ notice }) => ({ msgs: notice.notice }))(Notice)
