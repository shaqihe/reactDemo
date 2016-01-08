/**
 * Main.js.js
 * @author shaqihe
 * Created 2015-1-7
 */

import React, { PropTypes, Component } from 'react'
import {ajax} from '../utils/ajax'
import Item from './Item'

class List extends Component {
      constructor() {
            super();
            this.state = {
                data: [{}],
                count: 0
            }
      }

    componentDidMount() {
        ajax('/agent/users', function(result) {
            var lastGist = result;
            if (lastGist.length > 0) {
                let listData = this.state.data.concat(lastGist);
                this.setState({
                    data: listData,
                });
        }}.bind(this));
    }

    render() {
        return (
        <div className="main">
            {this.state.data.map((topic, index) =>
               <Item {...topic}/>
            )}
        </div>
        )
    }
}

export default List
