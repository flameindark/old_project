import React from 'react';

export default class Home extends React.Component{
	render(){
		return(
			<div className="home_wrap">
				<h2>本网页介绍</h2>
				<hr></hr>
				<div style={{margin:20}}>
					<p>你好，这是本人前端练习的寄存处O(∩_∩)O~。<br/>这个页面是使用最基础的<strong>ES6+React+react-router+antd</strong>的知识写的，目的为体验工程化和单页应用的魅力。内容有些少，正在逐步整理更新中...</p>
					<p>因为传入不久可能有些小问题，欢迎指出(联系方式下面有)</p>
				</div>
			</div>
		)
	}
}