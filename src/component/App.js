import React, { Component } from 'react';
import '../styles/App.css';
import '../mainSet.css';
import MainGrid from './MainGrid'

class App extends Component {
	constructor(props) {
		super(props);
		this.mainListData = [];
		this.imageIndex = 0;
		this.imageIndexLast = 0;
		this.imageStrUrl = 'http://steve720zhang.com/cj1029.jpg';
		this.state = {}
	}

	componentWillMount () {
		this.mainListData.push({id:'nodefinedYet',no:1,text:'简历'})
		this.mainListData.push({id:'nodefinedYet',no:2,text:'导航页'})

	}

	componentDidMount () {
		setInterval(() => {
			this.imageIndex ++;
			this.imageIndexLast = this.imageIndex%4;
			switch (this.imageIndexLast) {
				case 0:
					this.imageStrUrl = 'http://steve720zhang.com/cj1029.jpg';
					break;
				case 1:
					this.imageStrUrl = 'http://occbm5lue.bkt.clouddn.com/20150601050601_m5YuC.jpeg';
					break;
				case 2:
					this.imageStrUrl = 'http://occbm5lue.bkt.clouddn.com/93b77ab0d9d5ed5840d2410bcb58dcc7_b.png';
					break;
				case 3:
					this.imageStrUrl = 'http://occbm5lue.bkt.clouddn.com/Honma-Meiko-desktopsky-78504.jpg';
					break;
			}
			this.setState({});
		},10000);
	}

  render() {
  	console.log('this.imageStrUrl',JSON.stringify(this.imageStrUrl));
    return (
      <div className="AppLocal">
	      <img src={this.imageStrUrl} alt="mainBack" className={this.imageIndexLast%2===0?"mainBackgroundImageOne":"mainBackgroundImageTwo"}/>
        <div className="App-header-local">
          <img src="http://steve720zhang.com/zz-icon.png" className="App-logo" alt="logo" />
          <h2>
	          <font face="微软雅黑">
	            张泽群欢迎你！
            </font>
          </h2>
        </div>
	      <MainGrid/>
	      <div>
		      <p className="footerIntro">—— 非盈利性网站，如遇内容有侵权行为，请通知我删除。</p>
	      </div>
	      <div className="underFooter">

	      </div>
      </div>
    );
  }
}



export default App;
