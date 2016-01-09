/**
 * Item.js
 * @author shaiqihe
 * Created 2015-1-07
 */
import React, { PropTypes, Component } from 'react'

class Item extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
        <div className="box item">
            <p className="content-text">{this.props.text}</p>
            <a className="item-link" target="_blank" href={this.props.link}>{this.props.link}</a>
            <img src={this.props.src}/>
        </div>
    )
  }
}


export default Item
