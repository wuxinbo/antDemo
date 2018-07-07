import { Chart, Geom, Axis, Tooltip, Legend } from 'bizcharts';
import { Card } from 'antd';
import { View } from '@antv/data-set';
import React, { Component } from 'react';

const data = [
    { date: '2018-06-11', 已处理: 21,未处理 : 12 },
    { date: '2018-06-12', 已处理: 2,未处理 : 10 },
    { date: '2018-06-13', 已处理: 25,未处理 : 16 },
    { date: '2018-06-14', 已处理: 23,未处理 : 14 },
    { date: '2018-06-15', 已处理: 13,未处理 : 10 },
    { date: '2018-06-16', 已处理: 13,未处理 : 6 },
    { date: '2018-06-17', 已处理: 6, 未处理: 8 }
];
const dv = new View();

dv.source(data).transform({
    type: 'fold',
    fields: ['已处理', '未处理'], // 展开字段集
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
        <Card title="一周已处理未处理件数统计" hoverable style={{height:'500px'}}>
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