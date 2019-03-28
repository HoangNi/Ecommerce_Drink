import React, { Component } from 'react';
import Menu from '../layout/Menu';

class Login extends Component {
    render() {
        return (
            <div>
                <Menu />
                <div className="login" id="login">
                    <div className="container">
                        <div className="login__title">
                            <p><a href="#">Trang chủ/<span>Giới thiệu</span></a></p>
                            <div className="row">
                                <div className="col-lg-10">
                                    <h3>đăng nhập</h3><img src="./../image/titleleft-dark.png" alt="" />
                                </div>
                                <div className="col-lg-2">
                                    <button className="button">đăng kí</button>
                                </div>
                            </div>
                        </div>
                        <div className="login__form">
                            <div className="login__form__content">
                                <h4>khách hàng đăng nhập </h4>
                                <p>Nếu bạn có một tài khoản, xin vui lòng đăng nhập</p>
                                <div className="login__form__input">
                                    <label for="email">Email* :</label>
                                    <input type="email" name="email" />
                                </div>
                                <div className="login__form__input">
                                    <label for="password">Password* :</label>
                                    <input type="password" name="password" />
                                </div>
                                <div className="login__form__checkbox">
                                    <label for="span"></label>
                                    <input className="checkbox" type="checkbox" name="remember" />
                                    <label>Quên mật khẩu</label>
                                </div>
                                <button className="button">đăng nhập</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default Login;