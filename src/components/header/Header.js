/**
 * @author LiuNing
 * @since 2019-04-08
 * @description 头部Header
 * 使用antd Row Col的xs sm响应式栅格布局实现移动端适配
 */
import React, { Component } from 'react';
import { Link } from "react-router-dom";

import { Row, Col, Icon } from 'antd';

import './Header.scss';

class Header extends Component {

    constructor(props) {
        super(props);
        this.state = {
            visible: false,
        }
    }

    handleVisibleChange = (visible) => {
		this.setState({ visible: !this.state.visible });
	}

    render() {
        const links = [
			{key: "", text: '主页'},
			{key: "article", text: '文章'},
			{key: "timeline", text: '归档'},
			{key: "gather", text: '点滴'},
			{key: "gossip", text: '慢生活'},
			// {key: "gossip", text: '碎言碎语'}
		];
        return (
            <div className="header-wrapper">
                <div className="container">
                    <div className="site-logo">
                        <h2>
                            <span>Liu</span><span>Ning</span>
                        </h2>
                        <p>倚楼听风雨，淡看江湖路</p>
                    </div>
                    <div className="navbar-collapse">
                        <Col xs={24} sm={0}>
                            <div className="navbar-collapse-button">
                                <Icon type={this.state.visible ? 'menu-unfold' : 'menu-fold'} onClick={this.handleVisibleChange} />
                            </div>
                            <div className="navbar-collapse-body" style={{ height: this.state.visible ? 280 : 0 }}>
                                <Col sm={0}>
                                    <div onClick={this.onClick}>
                                        {
                                            links.map((item) => (
                                         
                                                   <p className="navbar-item" key={item.key}>
                                                        <Link to={"/" + item.key} data-key={item.key} onClick={this.handleVisibleChange}>{item.text}</Link>
                                                    </p>
                                            ))
                                        }
                                    </div>
                                </Col>
                            </div>
                        </Col>
                    </div>
                </div>
                <Row>
                    <Col xs={0} sm={24}>
                        <div className="nav-top">
                            <div className="container">
                                <ul onClick={this.onClick}>
                                    <li className="nav-top-item">
                                        <Link to="/" data-key="/">主页</Link>
                                        <Link to="/article" data-key="/article">文章</Link>
                                        <Link to="/timeline" data-key="/timeline">归档</Link>
                                        <Link to="/gather" data-key="/gather">点滴</Link>
                                        <Link to="/gossip" data-key="/gossip">慢生活</Link>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </Col>
                </Row>
            </div>
        )
    }
}

export default Header;