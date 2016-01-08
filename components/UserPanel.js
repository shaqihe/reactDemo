import React, {PropTypes, Component } from 'react';

class UserPanel extends Component {

  render() {
    if (+this.props.isLogin) {
      return (
        <div>
          你不可能登录
        </div>
      )
    } else {
      return (
        <div className="user-panel box">
          <div className="cell title">
            <strong>ECEFE 是百度电商前端团队</strong>
          </div>
          <div className="cell">
            <a href="http://mall.baidu.com/">
              <strong>百度mall产品线</strong>
            </a>
          </div>
          <div className="cell">
            <a href="http://mall.baidu.com/">
              <strong>百度惠产品线</strong>
            </a>
          </div>
          <div className="cell">
            <a href="http://mall.baidu.com/">
              <strong>百度打假产品线</strong>
            </a>
          </div>
        </div>
      )
    }
  }
}

UserPanel.propTypes = {
  isLogin: PropTypes.string
};

export default UserPanel
