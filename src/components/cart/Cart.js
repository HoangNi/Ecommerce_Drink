import React, { Component } from 'react';
import Menu from '../layout/Menu';
import ItemCart from './ItemCart';
import { Link } from 'react-router-dom';

class Cart extends Component {
    render() {
        return (
            <div>
                <Menu />
                <div className="cart" id="cart">
                    <div className="container">
                        <div className="cart__title">
                            <p><Link to="/">Trang chủ/</Link>
                                <Link to="/product">Sản phẩm/<span>Giỏ hàng</span></Link></p>
                            <h3>Giỏ hàng</h3><img src="./../image/titleleft-dark.png" alt="" />
                        </div>
                        <div className="cart__table">
                            <table>
                                <tr>
                                    <th>Ảnh</th>
                                    <th>tên sản phẩm</th>
                                    <th>giá</th>
                                    <th>số lượng</th>
                                    <th>tổng số</th>
                                    <th>xóa</th>
                                </tr>
                                <ItemCart />
                                <ItemCart />
                                <ItemCart />
                                <ItemCart />
                            </table>
                        </div>
                        <div className="cart__btn">
                            <button className="button">tiếp tục mua hàng</button>
                            <button className="button">Xóa</button>
                            <button className="button">thanh toán</button>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default Cart;