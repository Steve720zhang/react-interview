import React, { Component } from 'react';
import '../styles/App.css';
import '../mainSet.css';
import InterView from './InterView'

class AppIndex extends Component {
	constructor(props) {
		super(props);
		this.state = {}
	}

	render () {
		return (
			<div className="App">
				<div className="App-header">
					<img src="http://steve720zhang.com/zz-icon.png" className="App-logo" alt="logo" />
					<h2>
						<font face="微软雅黑">
							张泽群欢迎你！
						</font>
					</h2>
				</div>
				<div className="main-container">
					<div>123</div>
				</div>
			</div>
		);
	}
}



export default AppIndex;
