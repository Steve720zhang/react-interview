import React from 'react';
import './DividerLine.css'

class DividerLine extends React.Component {

	constructor(props) {
		super(props);
		this.state = {}
	}

	render() {
		return (
			<div className="dividerContainer">
				<div className="dividerSide"></div>
				<div className="dividerInner">{this.props.children}</div>
				<div className="dividerSide"></div>
			</div>
		);
	}
}

export default DividerLine;
