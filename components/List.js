/**
 * Main.js.js
 * @author shaqihe
 * Created 2015-1-7
 */

import React, { PropTypes, Component } from 'react'
import dao from '../api/dao'
import Item from './Item'

class List extends Component {
      constructor() {
            super();
            this.state = {
                data: [{
                    text: '本项目是个简单的React的Demo，代码已放在github上，欢迎点赞。',
                    link: 'https://github.com/shaqihe/sunApp.git'
                }],
                count: -1,
                allPage: 0
            }
      }

    componentDidMount() {
        dao.hotData({pageNo: this.state.count + 1})
        .then((res)=>{
            let lastGist = res.result;
            if (lastGist.length > 0) {
                let listData = this.state.data.concat(lastGist);
                this.setState({
                    data: listData,
                    count: res.page.pageNo,
                    allPage: res.page.allPage
                });
            }
        });
    }

    render() {
        return (
        <div className="main">
            {this.state.data.map((topic, index) =>
               <Item {...topic} key={index}/>
            )}
            <span>总页码是：{this.state.allPage}</span>
            <span> 当前是：{this.state.count}</span>
        </div>
        )
    }
}

export default List
