
import React from 'react'
import { render } from 'react-dom'

import { Router, Route, Link, hashHistory, IndexRoute, Redirect, IndexLink} from 'react-router'

import { Menu, Icon } from 'antd'


import 'animate.css/animate.min.css'
import 'font-awesome/css/font-awesome.min.css'

import './main.css'

import { ComponentCard,PageCard,ContactCard,SProjectCard,BProjectCard }  from './components/card.js'
import CollapseDemo from './components/collapse.js'
import Home from './components/home.js'

import WelcomPage from './components/welcomPage.js'

const ACTIVE = { color: 'red' }
const SubMenu = Menu.SubMenu

// 配置导航
class Layout extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            current: '',
            username: ''
        }
    }

    handleClick = (e) => {
        this.setState({
            current: e.key
        })
    }

    render() {
        return (
           <div>
                <div id="leftMenu"> 
                    <h2 className="title">Learn By Do</h2>
                    <Menu theme="dark"
                        onClick={this.handleClick}
                        style={{ width: 185 }}
                        defaultOpenKeys={['sub1', 'sub2']}
                        defaultSelectedKeys={[this.state.current]}
                        mode="inline"
                    >   
                        <Menu.Item key="home">
                            <Link to="/home">
                               <span className="nav-text">Home</span>
                            </Link>
                        </Menu.Item>
                        <SubMenu key="sub1" title={<span><Icon type="book" /><span>小练习</span></span>}>
                            <Menu.Item key="1"><Link to="/componentDemo">小组件</Link></Menu.Item>
                            <Menu.Item key="2"><Link to="/jsDemo">js基础练习</Link></Menu.Item>
                            <Menu.Item key="3"><Link to="/pageDemo">页面布局练习</Link></Menu.Item>
                        </SubMenu>
                        <SubMenu key="sub2" title={<span><Icon type="global" /><span>小项目</span></span>}>
                            <Menu.Item key="4"><Link to="/sProjectDemo">普通项目(非工程化)</Link></Menu.Item>
                            <Menu.Item key="5"><Link to="/bProjectDemo">工程化项目</Link></Menu.Item>
                        </SubMenu>
                        <SubMenu key="sub3" title={<span>其他</span>}>
                            <Menu.Item key="6"><Link to="/contacts"><Icon type="contacts" />联系方式</Link></Menu.Item>
                            <Menu.Item key="7"><Link to="/test"><Icon type="contacts" />test</Link></Menu.Item>
                        </SubMenu>
                    </Menu>
                </div>
                <div id="rightWrap">
                    <div className="right-box">
                        { this.props.children }
                    </div>
                </div>
            </div>
        )
    }
}


// 配置路由
// render((
//     <Router history={hashHistory} >
//         <Route path="/" component={Layout}>
//             <IndexRoute path="home" component={Home} />
//             <Route path="home" component={Home} />
//             <Route path="pageDemo" component={PageCard} />
//             <Route path="componentDemo" component={ComponentCard} />
//             <Route path="sProjectDemo" component={SProjectCard} />
//             <Route path="bProjectDemo" component={BProjectCard} />
//             <Route path="jsDemo" component={CollapseDemo} />
//             <Route path="contacts" component={ContactCard} />
//             <Route path="test" component={WelcomPage} />
//         </Route>
//     </Router>
// ), document.getElementById('app'));

render(<WelcomPage/>, document.getElementById('app'));
