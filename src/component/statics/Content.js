import React, { Component } from 'react';
import DayOutPie from './DayOutPie'
import LawCard from "../law/card"
import WeekOutStatis from './WeekOutStatis'
import OutSortOrder from './OutSortOrder'
import Statictis from '../screen/Statictis'
import { Row,Col } from 'antd';
class Content extends Component {
    render() {
        return (
            <div>
                <Statictis />
                <Row gutter={24} style={{paddingTop:20}}>
                    {/* 日出库比例 */}
                    <Col span={12} >
                        <DayOutPie />
                    </Col>
                    {/* 月出库数量 */}
                    <Col span={12} >
                        <LawCard />
                    </Col>
                </Row>
                <Row gutter={24} style ={{paddingTop:20}}>
                    <Col span={18}>
                        <WeekOutStatis />
                    </Col>
                    <Col span={6} >
                        <OutSortOrder/>
                    </Col>
                </Row>    
            </div>
        )
    }
}
export { Content as statis };