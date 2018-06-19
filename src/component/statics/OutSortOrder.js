
import { Card, Row, Col } from 'antd';
import React, { Component } from 'react';
//每天进件排名

const data = [
    { name: '绝缘棒', count: 35353 },
    { name: '接线箱', count: 35243 },
    { name: '胶布', count: 32357 },
    { name: '铜芯线', count: 31895 },
    { name: '电缆', count: 28552 },
    { name: '镙钉', count: 25272 },
    { name: '铜铝鼻', count: 24252 },
    { name: '线夹', count: 23057 },
    { name: '抓钉', count: 20380 },
    { name: '电表', count: 15853 },
]
class OutSortOrder extends Component {
    render() {
        let index = 0
        return (
            <Card title="出库数量排名" hoverable style={{height:'500px'}}>
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