import React, { Component } from 'react';
import { Link } from "react-router-dom";

import { Row, Col, Icon } from 'antd';

import './Header.scss';

class Header extends Component {

    constructor(props) {
        super(props);
        this.state = {
            visible: true,
        }
    }

    render() {
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
                                <Link to="/" data-key="/">主页</Link>
                                <Link to="/article" data-key="/article">文章</Link>
                                <Link to="/timeline" data-key="/timeline">归档</Link>
                                <Link to="/gather" data-key="/gather">点滴</Link>
                                <Link to="/gossip" data-key="/gossip">慢生活</Link>
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