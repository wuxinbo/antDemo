import React, { Component } from 'react';
import { Table,Spin } from 'antd';
import { connect } from 'dva';
import SearchFrom from './SearchFrom';
// 案件列表
class List extends Component {
    componentDidMount() {
        this.props.dispatch({ type: "cases/search" })
    }
    render() {
            console.log("tableList loading is "+JSON.stringify(this.props.loading))
        return (
            <div>
                <SearchFrom />
                <Spin spinning={this.props.loading} delay={2000}>
                    <Table style={{ paddingTop: "20px" }}
                        columns={this.props.columns}
                        bordered
                        dataSource={this.props.data}
                    />
                </Spin>
            </div>
        )
    }
}
export default connect(({ cases,loading }) => ({
     columns: cases.columns,
     data: cases.data,
     loading: loading.effects['cases/search']
     }))(List)

