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
          <img className="logo" src="http://www.qiushibaike.com/static/images/v2/week1.png" alt="V2EX"/>
          <UserLink userName="shaqihe"/>
        </div>
      </header>
    )
  }
}

export default Header
