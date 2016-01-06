import React, { Component, PropTypes } from 'react'
import Overlay from './overlay'

class Modal extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			left:this.props.style.modal.left,
			top: this.props.style.modal.top
		}
		this.x = 0;
		this.y = 0;
		this.dragDrop = false;
	} 
	componentDidUpdate() {
  	}
  	_mouseUp(event) {
  		this.dragDrop = false;
  	}
  	_mouseDown(event) {
  		this.dragDrop = true;
  		this.x = event.pageX;
  		this.y = event.pageY;
  	}
  	_mouseMove(event) {
  		const styles = this.getStyles();
  		if (!this.dragDrop) {
  			return;
  		}
  		const modal = this.refs.modal;
	  	var diffX = event.pageX - this.x;
  		var diffY = event.pageY - this.y;
  		this.x = event.pageX;
  		this.y = event.pageY;
  		var dropLeft = modal.offsetLeft + diffX;
  		var dropTop = modal.offsetTop + diffY
  		if ( modal.offsetLeft + modal.offsetWidth + diffX >= document.documentElement.clientWidth || dropLeft <= 0) {
  			return;
  		}
  		if (modal.offsetTop + modal.offsetHeight + diffY >= document.documentElement.clientHeight || dropTop <= 0) {
  			return;
  		}
  		this.updateModalPositon(dropLeft + 'px', dropTop + 'px')
  	}
  	updateModalPositon(left, top) {
  		this.setState ({
  			left:left,
  			top:top
  		})
  	}
 	shouldComponentUpdate(nextProps, nextState) {
  		return nextProps.isOpen !== this.props.isOpen || this.state.left !== nextState.left
  			|| this.state.top !== nextState.top;
 	}
	getStyles() {
		const styles = {
			modal: {
				zIndex: 100,
			    position: 'fixed',
			    width: '53%',
			    height: '49%',
			    padding: '8px',
			    border: '1px solid #6B6565',
			    backgroundColor: 'white',
			    overflow: 'auto'
			},
			del: {
				cursor: 'pointer',
				float: 'right'
			},
			clearBoth: {
				clear: 'both'
			},
			title: {
				height: '40px'
			}
		}
		let style = this.props.style;
		
		Object.assign(styles.modal, style.modal);
		styles.modal.left = this.state.left ? this.state.left: '25%';
		styles.modal.top = this.state.top ? this.state.top: '25%';
		return styles;
	}
	render() {
		const styles = this.getStyles()
		return (
			this.props.isOpen ? 
				<div>
					<div className='modal' ref='modal' style={styles.modal} onMouseUp={this._mouseUp.bind(this)} onMouseDown={this._mouseDown.bind(this)} onMouseMove={this._mouseMove.bind(this)} >
						<div style={styles.title}>
							{this.props.title}
							<i className="fa fa-times" style={styles.del} onClick={this.props._onDismiss}></i>
							<div style={styles.clearBoth}></div>
						</div>
						<div>{this.props.children}</div>

					</div>
					<Overlay zIndex={this.props.style.modal.zIndex} /> 
				</div> 
				:
			 	<div></div>
			
		)
	}
}
Modal.propTypes = {
  	isOpen: PropTypes.bool.isRequired,
}

Modal.defaultProps = {
	style: {
		modal:{}
	}
}

export default Modal