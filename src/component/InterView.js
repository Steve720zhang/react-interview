import React from 'react';
import '../styles/InterView.css'
import Divider from './gear/DividerLine'
import Pannel from './gear/Pannel'

class InterView extends React.Component {

	constructor(props) {
		super(props);
		this.state = {}
	}

	render() {
		return (
			<div>
				<div className="dividerHear">
					<h2>简历：张泽群</h2>
					<div className="dividerHearElse">目前在职 但工作环境已不适 故正积极寻找</div>
				</div>
				<p className="mainTextCenter">
					电话：18721107869&nbsp;&nbsp;&nbsp;&nbsp;邮箱：steve720zhang@gmail.com
				</p>
				<p className="mainTextCenter">
					微信：<img src="http://steve720zhang.com/646177085088145149.png" alt="ewm" className="dividerHeardZxing"/>
				</p>
				<Divider>工作经历</Divider>
				<Pannel title="上海先斯智能技术有限公司" time="2016.04 — 至今">参与开发‘e到校’和‘体育课’两个前端项目，均负责核心功能并在交付上架后良好运行，未出现较大的BUG。技术涉及React,Vue，ReactNative，CSS3，HTML5,js及其类库等等。</Pannel>
				<Pannel title="ACC艺术品防伪" time="2015.05 — 2016.04">个人独立开发“玉雕家”应用（android版），开发维护一年，迭代多个版本。 （玉雕家官网www.cacc.cn）涉及：RSA加密、Ndk、复杂界面实现、SQLite、多线程、开源库修改集成、网络通信与解析等。</Pannel>
				<Pannel title="布迪雷网络科技有限公司" time="2014.08 — 2015.05">参与开发多个项目：翼起学、iwant、每日十次。涉及：网络通信、蓝牙、传感器等等</Pannel>
				<Divider>项目经历</Divider>
				<Pannel title="体育课" time="2016.09 - 至今">此项目以JavaScript为基础，采用ReactNative框架开发，至今已上架迭代半年，全国数十所学校使用。此项目功能繁多，逻辑复杂，采用React.js+Redux+CSS3+Realm为技术基础，涉及：离线缓存、动画、多媒体、异步等技术点。在此项目中我负责核心模块及一切需要离线缓存的功能，相关经验颇丰。</Pannel>
				<Pannel title="e到校-微信公众号开发" time="2016.05 - 2016.09">基于Vue1.0.24版本开发，是一个大型单页应用项目，内含50多个功能子页面承载着‘e到校’公众号的众多功能。基于HTML5,CSS3,VueRouter,JSX,webpack,jade及众多js框架类库和UI框架。上线以来已经服务了全国数百所学校的数十万学生家庭。
					在此项目中有一半的页面由我完成，涉及：移动端适配、在线播放、图表实现、单页应用架构等技术点。</Pannel>
				<Pannel title="艺术品身份证" time="2016.05 - 2016.05">由我独立开发，用于配合公司商业活动的小而简单的应用，采用MVP架构、技术选型有：rxjava、retrofit、glide、butterknife等。</Pannel>
				<Pannel title="玉雕家-真品玉雕商城" time="2015.04 - 2016.05">一套完整的电商&资讯类APP，由我独立完成并开发维护一年。 涉及社交类app所需要的常用开发事项、NFC、RSA加密等。（搜索：玉雕家 即可下载查看）</Pannel>

				<Divider>个人经历</Divider>
				<p className="mainTextP">
					1、本人开朗严谨，工作上自我要求很高，抗压能力强，非常热爱学习新的技术。<br/>
					2、具备2年的前端和安卓开发能力，掌握HTML5、CSS3，webpack、JavaScript的各种主流框架和类库，同时具有Android商业应用的独立开发能力。对B\S体系和C\S体系的异同有深刻的体会和见解。混合开发和UI适配经验也十分丰富。<br/>
					3、立志成为全栈全能，对后端技术十分感兴趣，尝试过php和nodejs，使用过关系型和非关系型数据库，非常愿意在以后的工作中承担后端的业务。<br/>
					4、此外还有一些补充：我通过自有VPS翻墙，了解Linux，自备RMBP开发，了解VIM编辑器、RSA加密、Git团队协作，擅长装台式电脑，会用AI切图，PR剪辑视频，爱运动和做饭，最初系自学入行。<br/>
				</p>
				<Divider>个人照片</Divider>
				<div  className="mainTextImageContainer">
					<img src="http://steve720zhang.com/210718737085784710.jpg" className="interViewImage"/>
					<img src="http://steve720zhang.com/669097433751012071.png" className="interViewImage"/>
				</div>

			</div>
		);
	}
}

export default InterView;
