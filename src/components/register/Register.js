import React, { Component } from 'react';
import Menu from '../layout/Menu';

class Register extends Component {
    render() {
        return (
            <div>
                <Menu />
                <div class="register" id="register">
                    <div class="container">
                        <div class="register__title">
                            <p><a href="#">Trang chủ/<span>Giới thiệu</span></a></p>
                            <div class="row">
                                <div class="col-lg-10">
                                    <h3>đăng ký</h3><img src="./../image/titleleft-dark.png" alt="" />
                                </div>
                                <div class="col-lg-2">
                                    <button class="button">đăng nhập</button>
                                </div>
                            </div>
                        </div>
                        <div class="register__form">
                            <div class="content">
                                <h4>thông tin cá nhân</h4>
                                <div class="register__form__input">
                                    <label for="name">Tên trước* :</label>
                                    <input type="text" name="name" />
                                </div>
                                <div class="register__form__input">
                                    <label for="name">Tên sau* :</label>
                                    <input type="text" name="name" />
                                </div>
                                <div class="register__form__input">
                                    <label for="email">Email* :</label>
                                    <input type="email" name="email" />
                                </div>
                                <div class="register__form__input">
                                    <label for="password">Password* :</label>
                                    <input type="password" name="password" />
                                </div>
                                <div class="register__form__checkbox">
                                    <label for="span"></label>
                                    <input class="checkbox" type="checkbox" name="remember" />
                                    <label>Đăng ký nhận bản tin</label>
                                </div>
                                <h4>thông tin đăng nhập</h4>
                                <div class="register__form__input">
                                    <label for="password">Mật khẩu* :</label>
                                    <input type="password" name="password" />
                                </div>
                                <div class="register__form__input">
                                    <label for="password">Xác nhận mật khẩu* :</label>
                                    <input type="password" name="repassword" />
                                </div>
                                <button class="button">Quay lại</button>
                                <button class="button">gửi</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default Register;