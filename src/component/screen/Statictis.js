
import { Row, Col, Card } from 'antd';
import React, { Component } from 'react';
import TweenOne from 'rc-tween-one';
import ChildrenPlugin from 'rc-tween-one/lib/plugin/ChildrenPlugin';
import './Statictis.css'

const cardBodyStyle = { textAlign: 'center' }
TweenOne.plugins.push(ChildrenPlugin);
let clock = null;
class Statictis extends Component {
    constructor(props) {
        super(props)
        this.card = this.card.bind(this)
        this.state = {
            outCountAnimation: this.CountAnimation(10),
            inCountAnimation: this.CountAnimation(14),
            outAmountAnimation: this.AmountAnimation(1000),
            inAmountAnimation: this.AmountAnimation(1200)
        }
    }
    //进件数动画
    CountAnimation(number) {
        return {
            Children: { value: number || 10, floatLength: 0, formatMoney: false },
            duration: 2000
        }
    }
    //金额动画
    AmountAnimation(number) {
        return {
            Children: { value: number || 10, floatLength: 2, formatMoney: true },
            duration: 2000
        }

    }
    componentDidMount() {

        clock = setInterval(() => {
            const { outCountAnimation, inCountAnimation, outAmountAnimation, inAmountAnimation } = this.state
            const outCount = outCountAnimation.Children.value
            this.setState({
                outCountAnimation: this.CountAnimation(outCount + 2),
                inCountAnimation: this.CountAnimation(inCountAnimation.Children.value + 3),
                outAmountAnimation: this.AmountAnimation(outAmountAnimation.Children.value + 234),
                inAmountAnimation: this.AmountAnimation(inAmountAnimation.Children.value + 321)
            })
        }, 1000 * 10)
    }
    componentWillUnmount() {
        clearInterval(clock);
    }
    card(props) {
        return (
            <Card title={props.title} hoverable bodyStyle={cardBodyStyle} >
                <TweenOne
                    animation={props.animation}
                    className="card-span"
                >
                </TweenOne>
            </Card>
        )
    }
    render() {

        return (
            <Row gutter={24} >
                <Col span={6}>
                    <this.card title="日新增案件数" animation={this.state.outCountAnimation} />
                </Col>
                <Col span={6} >
                    <this.card title="日剩余未处理件数" animation={this.state.inCountAnimation} />
                </Col>
                <Col span={6}>
                    <this.card title="日出库金额" animation={this.state.outAmountAnimation} />
                </Col>
                <Col span={6}>
                    <this.card title="日入库金额" animation={this.state.inAmountAnimation} />
                </Col>

            </Row>
        )

    }
}
export default Statictis