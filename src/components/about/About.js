import React, { Component } from 'react';
import Menu from '../layout/Menu';

class About extends Component {
    render() {
        return (
            <div>
                <Menu />
                <div className="content" id="content">
                    <div className="container">
                        <div className="content__title">
                            <p><a href="#">Trang chủ/<span>Giới thiệu</span></a></p>
                            <h3>giới thiệu</h3><img src="./../image/titleleft-dark.png" alt="" />
                        </div>
                        <div className="row">
                            <div className="col-lg-6">
                                <div className="content__img"><img src="./../image/hotdeal.jpg" alt="" /></div>
                            </div>
                            <div className="col-lg-6">
                                <div className="content__infor">
                                    <h3>Chào mừng đến với wine hourse</h3>
                                    <p>
                                        Vang nổ Thang Long có hương vị đặc trưng của sản phẩm lên men tự nhiên từ hoa quả với độ
                                        rượu nhẹ, bột ga đầy trắng mịn.Vang nổ Thang Long có hương vị đặc trưng của sản phẩm lên men tự nhiên từ hoa quả với độ
                                        rượu nhẹ, bột ga đầy trắng mịn. Vang nổ Thang Long có hương vị đặc trưng của sản phẩm lên men tự nhiên từ hoa quả với độ
                                        rượu nhẹ, bột ga đầy trắng mịn.Vang nổ Thang Long có hương vị đặc trưng của sản phẩm lên men tự nhiên từ hoa quả với độ
                                        rượu nhẹ, bột ga đầy trắng mịn.
            </p><br></br>
                                    <p>
                                        Vang nổ Thang Long có hương vị đặc trưng của sản phẩm lên men tự nhiên từ hoa quả với độ
                                        rượu nhẹ, bột ga đầy trắng mịn.Vang nổ Thang Long có hương vị đặc trưng của sản phẩm lên men tự nhiên từ hoa quả với độ
                                        rượu nhẹ, bột ga đầy trắng mịn.
            </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default About;