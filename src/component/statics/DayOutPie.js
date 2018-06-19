import { Chart, Geom, Axis, Tooltip, Legend, Coord,Label } from 'bizcharts';
import { Card } from 'antd';
import { View } from '@antv/data-set';
import React, { Component } from 'react';
const dv = new View();
const data = [
    { item: '电缆', count: 40 },
    { item: '电线', count: 30 },
    { item: '分装箱', count: 17 },
    { item: '分接箱', count: 13 }
    
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
class DayOutPie extends Component {
    render(){
        return (
            <Card title="日出库比例图" hoverable >
            
            <Chart height={400} data={dv} scale={cols} padding={['10%', '28%']} forceFit >
                <Coord type='theta' radius={0.75} />
                <Axis name="percent" />
                <Legend position='right'  />
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
export default DayOutPie