/**
 * Header.js
 * @author shaqihe
 * Created 2016-1-7
 */

import React, { PropTypes, Component } from 'react'
import UserLink from './UserLink'
import { getQueryString } from '../utils/fetch'

class Header extends Component {

    constructor() {
        super();
        this.state = {
            dataType: getQueryString('dataType') || 'hot'
        }
}
  render() {
    return (
      <header className="header">
        <div className="content">
          <div className="nav">
            <a className={this.state.dataType === 'hot'? 'active nav-a': 'nav-a' } href='?dataType=hot'>热门</a>
            <a className={this.state.dataType === 'image'? 'active nav-a': 'nav-a' } href='?dataType=image'>图片</a>
          </div>
          <UserLink userName=""/>
        </div>
      </header>
    )
  }
}

export default Header
