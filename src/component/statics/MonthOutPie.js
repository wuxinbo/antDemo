import { Chart, Geom, Axis, Tooltip, Legend, Coord,Label } from 'bizcharts';
import { Card } from 'antd';
import { View } from '@antv/data-set';
import React, { Component } from 'react';
const dv = new View();
const data = [
    { item: '市政设施管理', count: 50 },
    { item: '市容环境卫生管理', count: 20 },
    { item: '城市供水节水管理', count: 17 },
    { item: '园林绿化', count: 13 }
    
];
        dv.source(data).transform({
          type: 'percent',
          field: 'count',
          dimension: 'item',
          as: 'percent'
        });
        const cols = {
            percent: {
              formatter: val => {
                val = (val * 100) + '%';
                return val;
              }
            }
          }  
class MonthOutPie extends Component {
    render(){
        return (
            <Card title="月出库比例图" hoverable >
            <Chart height={400} data={dv} scale={cols} padding={['10%', '30%']} forceFit >
                <Coord type='theta' radius={0.75} />
                <Axis name="percent" />
                <Legend position='bottom' />
                <Tooltip
                    showTitle={false}
                    itemTpl='<li><span style="background-color:{color};" class="g2-tooltip-marker"></span>{name}: {value}</li>'
                />
                <Geom
                    type="intervalStack"
                    position="percent"
                    color='item'
                    tooltip={['item*percent', (item, percent) => {
                        percent = percent * 100 + '%';
                        return {
                            name: item,
                            value: percent
                        };
                    }]}
                    style={{ lineWidth: 1, stroke: '#fff' }}
                >
                    <Label content='percent' formatter={(val, item) => {
                        return item.point.item + ': ' + val;
                    }} />
                </Geom>
            </Chart>
        </Card>
        )
    }
} 
export default MonthOutPie