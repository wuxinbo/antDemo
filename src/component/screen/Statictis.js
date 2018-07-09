
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
            outAmountAnimation: this.CountAnimation(50),
            inAmountAnimation: this.CountAnimation(200)
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
                outAmountAnimation: this.CountAnimation(outAmountAnimation.Children.value + 4),
                inAmountAnimation: this.CountAnimation(inAmountAnimation.Children.value + 10)
            })
        }, 1000 * 20)
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
                    <this.card title="每周已处理案件数" animation={this.state.outAmountAnimation} />
                </Col>
                <Col span={6}>
                    <this.card title="每月已处理案件数" animation={this.state.inAmountAnimation} />
                </Col>

            </Row>
        )

    }
}
export default Statictis