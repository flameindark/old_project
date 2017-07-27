import React from 'react';
import { Card,Icon,Row,Col } from 'antd';
import { fullpageData,componentData,sProjectData,bProjectData } from '../config/data_config.js'

class PageCard extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            data:[]
        }
    }

    handleClick = (targetUrl,ev) => {
        if (targetUrl) {
            window.open(targetUrl);
        }
    }

    componentDidMount() {
        this.setState({data:fullpageData});
    }

    render() {
        return (
            <div>
                <Row>
                {
                    this.state.data.map((item,index) => {
                        return(
                            <Col span={4}>
                            <Card style={{ margin:10,background: '#ECECEC' }} bodyStyle={{ padding: 20 }} bordered={false}
                             onClick={this.handleClick.bind(this,item.targetUrl)}
                            >
                                <div className="custom-image">
                                  <img alt="example" width="100%" src={item.img} />
                                </div>
                                <div className="custom-card">
                                  <h3>{item.title}</h3>
                                  <p>{item.msg}</p>
                                </div>
                            </Card>
                            </Col>
                        )
                    })
                }    
                </Row> 
            </div>
        )
    }
}

class ComponentCard extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            data:[]
        }
    }

    componentDidMount() {
        this.setState({data:componentData});
    }
    
    handleClick = (targetUrl,ev) => {
        if (targetUrl) {
            window.open(targetUrl);
        }
    }

    render() {
        return (
            <div>
                <Row>
                {
                    this.state.data.map((item,index) => {
                        return(
                            <Col span={4}>
                                <Card style={{ margin:10,background: '#ECECEC' }} bodyStyle={{ padding: 20 }} bordered={false}
                                 onClick={this.handleClick.bind(this,item.targetUrl)}
                                >
                                    <div className="custom-image">
                                      <img alt="example" width="100%" src={item.img} />
                                    </div>
                                    <div className="custom-card">
                                      <h3>{item.title}</h3>
                                      <p>{item.msg}</p>
                                    </div>
                                </Card>
                            </Col>
                        )
                    })
                } 
                </Row>   
            </div> 
        )
    }
}

class ContactCard extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
        }
    }


    render() {
        return (
            <Card style={{ width: 300 }} bodyStyle={{ padding: 0 }} title="联系方式">
                <p className="email_show"><Icon type="mail" />：wangliusheng563@gmail.com</p>
            </Card>
        )
    }
}

class SProjectCard extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            data:[]
        }
    }
    handleClick = (targetUrl,ev) => {
        if (targetUrl) {
            window.open(targetUrl);
        }
    }
    componentDidMount() {
        this.setState({data:sProjectData});
    }

    render() {
        return (
            <div>
                <Row>
                {
                    this.state.data.map((item,index) => {
                        return(
                            <Col span={4}>
                                <Card style={{ margin:10,background: '#ECECEC' }} bodyStyle={{ padding: 20 }} bordered={false}
                                 onClick={this.handleClick.bind(this,item.targetUrl)}
                                >
                                    <div className="custom-image">
                                      <img alt="example" width="100%" src={item.img} />
                                    </div>
                                    <div className="custom-card">
                                      <h3>{item.title}</h3>
                                      <p>{item.msg}</p>
                                    </div>
                                </Card>
                            </Col>
                        )
                    })
                } 
                </Row>   
            </div> 
        )
    }
}


class BProjectCard extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            data:[]
        }
    }

    componentDidMount() {
        this.setState({data:bProjectData});
    }
    handleClick = (targetUrl,ev) => {
        if (targetUrl) {
            window.open(targetUrl);
        }
    }
    render() {
        return (
            <div>
                <Row>
                {
                    this.state.data.map((item,index) => {
                        return(
                            <Col span={4}>
                                <Card style={{ margin:10,background: '#ECECEC' }} bodyStyle={{ padding: 20 }} bordered={false} 
                                    onClick={this.handleClick.bind(this,item.targetUrl)}
                                >
                                    <div className="custom-image">
                                      <img alt="example" width="100%" src={item.img} />
                                    </div>
                                    <div className="custom-card">
                                      <h3>{item.title}</h3>
                                      <p>{item.msg}</p>
                                    </div>
                                </Card>
                            </Col>
                        )
                    })
                } 
                </Row>   
            </div> 
        )
    }
}

export  {ComponentCard,PageCard,ContactCard,BProjectCard,SProjectCard }