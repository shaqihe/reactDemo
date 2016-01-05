import React from 'react';

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
		    zIndex: 10,
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

export default Overlay