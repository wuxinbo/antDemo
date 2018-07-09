import React, { Component } from 'react';
import { Card, List } from 'antd';
import { todoList, applyList } from "../../mock/api"
//法律法规卡片页面
class LawCard extends Component {

    card(props) {
        return (
            <Card title={props.title} extra={<a href="#">更多</a>} style={props.margin?{marginTop:"20px"}:null}>
                <List dataSource={props.list}
                    renderItem={item => (
                        <List.Item >
                            <span style={{ width: "80%" }}>
                                <a href="#">{item.title}</a>
                            </span>
                            <div>
                                <span>[{item.time}]</span>
                            </div>
                        </List.Item>)}
                />
            </Card>
        )

    }
    render() {
        return (
            <div>
            <this.card title="待办事项" list={todoList.list}/>
            <this.card title="我的申请" list={applyList.list} margin />
            </div>
        )
    }
}
export default LawCard