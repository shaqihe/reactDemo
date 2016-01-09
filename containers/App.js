import React, { Component, PropTypes } from 'react'

import Header from '../components/Header'
import List from '../components/List'
import UserPanel from '../components/UserPanel'
import Footer from '../components/Footer'
import '../less/main.less';

class App extends Component {
    render() {
        return (
        <div>
            <Header />
            <div className="main-body clearfix">
                <List/>
                <aside className="right-bar">
                    <UserPanel isLogin="0"/>
                </aside>
            </div>
            <Footer />
        </div>
        )
    }
}

export default App

