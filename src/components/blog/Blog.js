import React, { Component } from 'react';
import Menu from '../layout/Menu';
import CardBog from '../home/CardBog';
import { Link } from 'react-router-dom';

class Blog extends Component {
    render() {
        return (
            <div>
                <Menu />
                <div className="blog" id="blog">
                    <div className="container">
                        <div className="blog__title">
                            <p><Link to="/">Trang chủ/<span>Blog</span></Link></p>
                            <h3>blog</h3><img src="./../image/titleleft-dark.png" alt="" />
                        </div>
                        <div className="row">
                            <div className="col-lg-4">
                                <CardBog />
                            </div>
                            <div className="col-lg-4">
                                <CardBog />
                            </div>
                            <div className="col-lg-4">
                                <CardBog />
                            </div>
                            <div className="col-lg-4">
                                <CardBog />
                            </div>
                            <div className="col-lg-4">
                                <CardBog />
                            </div>
                            <div className="col-lg-4">
                                <CardBog />
                            </div>
                            <div className="col-lg-4">
                                <CardBog />
                            </div>
                            <div className="col-lg-4">
                                <CardBog />
                            </div>
                            <div className="col-lg-4">
                                <CardBog />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default Blog;