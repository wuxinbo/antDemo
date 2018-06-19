import { Chart, Geom, Axis, Tooltip, Legend } from 'bizcharts';
import { Card } from 'antd';
import { View } from '@antv/data-set';
import React, { Component } from 'react';

const data = [
    { date: '2018-06-11', 出库: 215, 入库: 152 },
    { date: '2018-06-12', 出库: 252, 入库: 170 },
    { date: '2018-06-13', 出库: 265, 入库: 166 },
    { date: '2018-06-14', 出库: 233, 入库: 142 },
    { date: '2018-06-15', 出库: 183, 入库: 103 },
    { date: '2018-06-16', 出库: 139, 入库: 66 },
    { date: '2018-06-17', 出库: 96, 入库: 48 }
];
const dv = new View();

dv.source(data).transform({
    type: 'fold',
    fields: ['出库', '入库'], // 展开字段集
    key: 'outOrIn', // key字段
    value: 'count', // value字段
});
const cols = {
    date: {
        range: [0, 1]
    }
}
class WeekOutStatis extends Component {

    render() {

        return (
        <Card title="一周出入库件数统计" hoverable style={{height:'500px'}}>
            <Chart height={400} padding={['10%', '20%','20%','10%']} data={dv} scale={cols} forceFit>
                <Legend />
                <Axis name="date" />
                <Axis name="count" />
                <Tooltip crosshairs={{ type: "y" }} />
                <Geom type="line" position="date*count" size={2} color={'outOrIn'} />
                <Geom type='point' position="date*count" size={4} shape={'circle'} color={'outOrIn'} style={{ stroke: '#fff', lineWidth: 1 }} />
            </Chart>
        </Card>
        )

    }
}
export default WeekOutStatis