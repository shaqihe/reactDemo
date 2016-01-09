/**
 * LoadNext.js
 * @author shaqihe
 * Created 2016-1-7
 */

import React, { PropTypes, Component } from 'react'

class LoadNext extends Component {

    constructor(props) {
        super(props);
        this.state = {
            load: this.props.load || 1   //0 已无更多 1查看更多
        }
    }

    handleClick (e) {
        this.props.callBack();
    }

    render() {
        return (
            <div className="box load-next" onClick={this.handleClick.bind(this)}>点击加载更多····</div>
        )
    }
}

export default LoadNext
