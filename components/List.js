/**
 * Main.js.js
 * @author shaqihe
 * Created 2015-1-7
 */

import React, { PropTypes, Component } from 'react'
import dao from '../api/dao'
import Item from './Item'
import LoadNext from './LoadNext'
import { getQueryString } from '../utils/fetch'


class List extends Component {
  constructor() {
        super();
        this.state = {
            data: [{
                text: '本项目是个简单的React的Demo，代码已放在github上，欢迎点赞。',
                link: 'https://github.com/shaqihe/sunweb.git'
            }],
            count: -1,
            allPage: 0,
            dataType: getQueryString('dataType')
        }
    }

    getHotData (dataType) {
        dao.hotData({pageNo: this.state.count + 1, dataType: dataType})
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
        }).catch((err)=>{
            console.log(err);
        });
    }

    componentDidMount() {
        this.getHotData(this.state.dataType);
    }

    nextLoadClick () {
        this.getHotData();
    }

    render() {
        return (
        <div className="main">
            {this.state.data.map((topic, index) =>
               <Item {...topic} key={index}/>
            )}
            <LoadNext load='1' callBack={this.nextLoadClick.bind(this)}/>
        </div>
        )
    }
}

export default List
