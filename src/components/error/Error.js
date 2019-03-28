import React, { Component } from 'react';

class Error extends Component {
    render() {
        return (
            <div className="error" id="error">
                <div className="error__banner">
                    <div className="error__banner__background">
                        <div className="error__banner__text">
                            <h1>Lỗi</h1>
                            <h2>Đây không phải là</h2>
                            <h3>trang web bạn đang tìm kiếm</h3>
                        </div>
                    </div>
                    <div className="error__banner__404"><img src="./../image/404.png" alt /></div>
                    <div className="error__banner__box"><img src="./../image/Loi404.png" alt /></div>
                </div>
                <div className="error__content">
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-2">
                                <div className="menu__logo"><img src="./../image/logo_error.png" alt /></div>
                            </div>
                            <div className="col-lg-3">
                                <div className="error__content__menu">
                                    <ul>
                                        <li><a href="index.html">trang chủ  <i className="fas fa-caret-right" /></a></li>
                                        <li><a href="contact.html">liên hệ  <i className="fas fa-caret-right" /></a></li>
                                    </ul>
                                </div>
                            </div>
                            <div className="col-lg-3">
                                <input type="text" name="search" placeholder="search" />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default Error;