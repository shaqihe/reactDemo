import React, { PropTypes } from 'react';

class Overlay extends React.Component {
	constructor(props) {
		super(props);
	}
	getStyles() {
		const styles = {
		    position: 'fixed',
		    top: '0%',
		    left: '0%',
		    width: '100%',
		    height: '100%',
		    backgroundColor: 'black',
		    zIndex: this.props.zIndex ? this.props.zIndex - 1 : 10,
		    opacity: 0.4
		}
		return styles
	}
	render() {
		const styles = this.getStyles();
		return (
			<div style={styles} >background</div>
		)
	}
}

Overlay.propTypes = {
  	zIndex: PropTypes.number,
}

export default Overlay