import React, { Component, PropTypes } from 'react'
import { render } from 'react-dom'
import Modal from './modal'

class Main extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			isOpen:false
		}
	}
  	_openModal() {
  		this.setState({isOpen:true});
  	}
  	_onDismiss() {
  		this.setState({isOpen:false});
  	}
 	render(){
 		const title = <div style={{'float': 'left'}}>Modal Page</div>
		return(
			<div>
				<div>
					<button onClick={this._openModal.bind(this)} className='button float-left'>Open Modal</button>
					<Modal title={title} isOpen={this.state.isOpen} _onDismiss={this._onDismiss.bind(this)}>
						<div style={{margin:'20px', height:'200px'}}>
							<div>A this is a React Page</div>
							<div>B will add Redux Redux-Router later</div>
							<div>C ng2 beta version is coming</div>
							<div>D</div>
						</div>
						<div><button style={{height:'30px',width:'60px',background:'#ddd'}} onClick={this._onDismiss.bind(this)}>Close</button></div>
					</Modal>
				</div>
			</div>
		)
	}
}

render(
  <Main />,
  document.getElementById('modal')
)

