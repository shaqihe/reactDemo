/**
 * UserLink.js
 * @author shaqihe
 * Created 2016-1-7
 */

import React, {PropTypes, Component} from 'react'

class UserLink extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        if (this.props.userName) {
            return (
                <div className = "user-link">欢迎{this.props.userName}</div>
            )
        } else {
            return ( < div className = "user-link" >
                    <a href = "#"> 首页 </a>
                    <a href = "#"> 注册 </a>
                    <a href = "#"> 登录 </a>
                < /div>
            );
        }
    }
}

UserLink.propTypes = {
    userName: PropTypes.string
};

export default UserLink
