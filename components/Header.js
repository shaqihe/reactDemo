/**
 * Header.js
 * @author shaqihe
 * Created 2016-1-7
 */

import React, { PropTypes, Component } from 'react'
import UserLink from './UserLink'

class Header extends Component {
  render() {
    return (
      <header className="header">
        <div className="content">
          <div className="nav">
            <a className="nav-a" href='?dataType=hot'>热门</a>
            <a className="nav-a" href='?dataType=image'>图片</a>
          </div>
          <UserLink userName=""/>
        </div>
      </header>
    )
  }
}

export default Header
