import React, { Component } from 'react';
import Menu from '../layout/Menu';
import { Link } from 'react-router-dom';

class Contact extends Component {
    render() {
        return (
            <div>
                <Menu />
                <div className="contact" id="contact">
                    <div className="container">
                        <div className="contact__title">
                            <p><Link to="/">Trang chủ/<span>Địa chỉ</span></Link></p>
                            <h3>Liên Hệ</h3><img src="./../image/titleleft-dark.png" alt />
                        </div>
                        <div className="row">
                            <div className="col-lg-8">
                                <div className="contact__map">
                                    <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d667.2830072993363!2d105.8090406967228!3d21.03948459568106!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3135ab1461382fdb%3A0xa6dddaacdfb96871!2zQ8O0bmcgdHkgQ-G7lSBwaOG6p24gQ8O0bmcgbmdo4buHIERLVA!5e0!3m2!1svi!2s!4v1550915945316" frameBorder={0} style={{ border: 0 }} allowFullScreen />
                                </div>
                            </div>
                            <div className="col-lg-4">
                                <div className="contact__infor">
                                    <div className="contact__infor__logo menu__logo">
                                        <div className="menu__logo__background"><img src="./../image/Vector Smart Object.png" alt /></div>
                                        <div className="menu__logo__text">
                                            <h2>Wine hourse</h2>
                                            <h4>Since 1980</h4><img src="./../image/logo.png" alt="logo" />
                                        </div>
                                    </div>
                                    <div className="contact__infor__text">
                                        <p><i className="fas fa-map-marker-alt">  Tầng 4,Tòa nhà HaNoi Group Số 442 Đội Cần, P.Cộng Vị, Quận Ba Đình, Hà Nội.</i><br /><i className="fas fa-phone-volume">  (08) 6608 9686</i><br /><i className="fas fa-envelope"><a href="#">  Support@bizweb.vn</a></i></p>
                                    </div>
                                    <div className="contact__infor__follow">
                                        <h3>follow us:</h3>
                                        <ul>
                                            <li><a href="#"><i className="fas fa-dove" /></a></li>
                                            <li><a href="#"><i className="fab fa-google-plus-g" /></a></li>
                                            <li><a href="#"><i className="fas fa-volleyball-ball" /></a></li>
                                            <li><a href="#"><i className="fab fa-invision" /></a></li>
                                            <li><a href="#"><i className="fas fa-wifi" /></a></li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-lg-8">
                                <div className="contact__form">
                                    <div className="contact__form__input">
                                        <label htmlFor="name">Your Name</label>
                                        <input type="text" name="name" />
                                    </div>
                                    <div className="contact__form__input">
                                        <label htmlFor="email">Your Email</label>
                                        <input type="email" name="email" />
                                    </div>
                                    <div className="contact__form__input">
                                        <label htmlFor="subject">Subject</label>
                                        <input type="text" name="subject" />
                                    </div>
                                    <div className="contact__form__input">
                                        <label htmlFor="message">Your Message</label>
                                        <textarea name="message" cols={30} rows={6} defaultValue={""} />
                                    </div>
                                    <div className="contact__form__button">
                                        <label htmlFor="span" />
                                        <button className="button">Gửi</button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default Contact;