import React, { Component } from 'react';
import { Table } from 'antd';
import { connect } from 'dva';
import SearchFrom from './SearchFrom';
// 案件列表
class List extends Component {
    componentDidMount(){
        this.props.dispatch({type:"cases/queryList"})
    }
    render(){
        
        return (
            <div>
                <SearchFrom />
                <Table style={{paddingTop:"20px"}}
                columns={this.props.columns}
                bordered
                dataSource={this.props.data}               
                />
            </div>    
        )
    }
}
export default connect(({cases})=>({columns:cases.columns,data:cases.data}))(List)

