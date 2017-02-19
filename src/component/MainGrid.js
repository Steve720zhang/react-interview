import React, { Component } from 'react';
import '../styles/MainGrid.css'
import '../mainSet.css'
import InterView from './InterView'
import { Button } from 'react-bootstrap';

class MainGrid extends Component {
	constructor(props) {
		super(props);
		this.mainListData = [];
		this.NavPress = this.NavPress.bind(this);
		this.state = {
			navIndex :1
		}
	}

	componentWillMount () {
		let listD = [];
		listD.push({id:'nodefinedYet',no:1,text:'简历'})
		listD.push({id:'nodefinedYet',no:2,text:'导航页'})
		listD.forEach((c,i) => {
			let index = parseInt(i/2);
			if (!this.mainListData[index]) {
				this.mainListData[index] = [];
				this.mainListData[index].push(c);
			} else {
				this.mainListData[index].push(c);
			}
		});
	}

	NavPress (index) {
		console.log('index',index)
		this.setState({navIndex:index})
	}

	render() {
		console.log('this.mainListData',JSON.stringify(this.mainListData));
		return (
				<div className="main-container">
					{this.state.navIndex === 0 && <div>
						{
							this.mainListData.map((c,i) => {
								if (c.length === 2) {
									return (
										<div className="cell-main">
											<div onClick={() => this.NavPress(c[0].no)} className="cell-inner">
												<p>{c[0].text}</p>
											</div>
											<div onClick={() => this.NavPress(c[1].no)} className="cell-inner">
												<p>{c[1].text}</p>
											</div>
										</div>
									)
								} else {
									return (
										<div className="cell-main">
											<div onClick={() => this.NavPress(c[0].no)} className="cell-inner">
												<p>{c[0].text}</p>
											</div>
											<div className="cell-inner-vain"></div>
										</div>
									)
								}

							})
						}
					</div>}
					{this.state.navIndex === 1&&
					<InterView></InterView>
					}
				</div>
		);
	}
}



export default MainGrid;
