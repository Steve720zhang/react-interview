import React from 'react';
import ReactDOM from 'react-dom';
import { Router, Route, hashHistory } from 'react-router';
import App from './component/App';
import AppIndex from './component/AppIndex';
import './styles/index.css';

ReactDOM.render(
	<Router history={hashHistory}>
		<Route path="/" component={App}/>
		<Route path="/index" component={AppIndex}/>
	</Router>,
  document.getElementById('root')
);
