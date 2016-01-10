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
          <img className="logo" src="../static/images/logo.png" alt="sun"/>
          <UserLink userName=""/>
        </div>
      </header>
    )
  }
}

export default Header
