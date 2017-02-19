import React from 'react';
import './Pannel.css'

class Pannel extends React.Component {

	constructor(props) {
		super(props);
		this.state = {}
	}

	render() {
		return (
			<div className="allContainer">
				<div className="PannelTitleContainer">
					<span className="PannelTitle">{this.props.title}</span>
					<span className="flexBlock"></span>
					<span>项目时间：</span>
					<span className="PannelTime">{this.props.time}</span>
				</div>
				<p className="PannelContainer">{this.props.children}</p>
			</div>
		);
	}
}

export default Pannel;
