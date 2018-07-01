import React, { Component } from 'react';
import Statictis from './Statictis'

class Content extends Component {

    componentDidMount(){
        console.log(this.props)
    }
    render(){
        return (
            <div>
                <Statictis/>
            </div>
        )
    }
}
export  {Content as screen};
