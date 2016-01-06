# react-modal
It is a react modal. can drag and drop. Use react, es6, webpack, gulp.
and It support multiple modal.But you will manual to set the zIndex.

Install.
*1.npm install gulp -g.
*2.npm install.
*3.gulp and then open localhost:8000/
 ## example:
 
```javascript
import React from 'react'
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
					
					<Modal title={title} isOpen={this.state.isOpen}>
						<div style={{margin:'20px', height:'200px'}}>
							Modal1
						</div>
						<div><button style={{height:'30px',width:'60px',background:'#ddd'}} onClick={this._onDismiss.bind(this)}>Close</button></div>
						<button onClick={this._openModal2.bind(this)} style={{height:'30px',width:'100px',background:'#ddd',margin:'10px'}} >Open Modal2</button>
					</Modal>
					<Modal style={this.style} title={title} isOpen={this.state.isOpen2}> {/*you can set the modal style youself*/}
						<div style={{margin:'20px', height:'200px'}}>
							Modal2
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
```
 
