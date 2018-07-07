
import { Card, Row, Col } from 'antd';
import React, { Component } from 'react';
//每天进件排名

const data = [
    { name: '张三', count: 33 },
    { name: '李四', count: 30 },
    { name: '王五', count: 28 },
    { name: '李达', count: 27 },
    { name: '宋江', count: 26 },
    { name: '武松', count: 23 },
    { name: '吕峰', count: 21 },
    { name: '张丹峰', count: 18 },
    { name: '蓝雨', count: 15 },
    { name: '吴龙', count: 7 },
]
class OutSortOrder extends Component {
    render() {
        let index = 0
        return (
            <Card title="一周案件处理排名(件)" hoverable style={{height:'500px'}}>
                {
                    data.map(item => {
                        index++
                        return (
                            <Row key={index} gutter={24} style={{marginTop:'10px'}}>
                                <Col span={6}>
                                    <span style={{
                                        backgroundColor:'#314659',
                                        color:"#fff",
                                        display:'inline-block',
                                        width:'20px',
                                        textAlign:'center',
                                        borderRadius:20
                                    }}>{index}</span>
                                </Col>
                                <Col span={12}>
                                    <span>{item.name}</span>
                                </Col>
                                <Col span={6}>
                                    <span>{item.count}</span>
                                </Col>
                            </Row>
                        )
                    })
                }
            </Card>
        )

    }
}

export default OutSortOrder;