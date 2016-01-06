import React, { Component, PropTypes } from 'react'
import { render } from 'react-dom'
import Modal from './modal'

class Main extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			isOpen:false,
			isOpen2:false
		}
		this.style = {
			modal:{
				zIndex:200,
				left:'40%',
				top:'40%',
				height:'40%',
				width:'30%'
			}
		}
	}
  	_openModal() {
  		this.setState({isOpen:true});
  	}
  	_openModal2() {
  		this.setState({isOpen2:true});
  	}
  	_onDismiss() {
  		this.setState({isOpen:false});
  	}
  	_onDismiss2() {
  		this.setState({isOpen2:false});
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
						<button onClick={this._openModal2.bind(this)} style={{height:'30px',width:'100px',background:'#ddd',margin:'10px'}} >Open Modal2</button>
					</Modal>
					<Modal style={this.style} title={title} isOpen={this.state.isOpen2} _onDismiss={this._onDismiss2.bind(this)}>
						<div style={{margin:'20px', height:'200px'}}>
							xxx
						</div>
						<div><button style={{height:'30px',width:'60px',background:'#ddd'}} onClick={this._onDismiss2.bind(this)}>Close</button></div>
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

