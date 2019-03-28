import React, { Component } from 'react';
import Menu from '../layout/Menu';
import ItemList from './ItemList';
import InfoCutomer from './InfoCutomer';

class Order extends Component {
    render() {
        return (
            <div>
                <Menu />
                <div className="orders" id="orders">
                    <div className="container">
                        <div className="orders__title">
                            <p><a href="index.html">Trang chủ/<span>Danh sách đơn hàng</span></a></p>
                            <h3>Đơn hàng</h3><img src="./../image/titleleft-dark.png" alt="" />
                        </div>
                        <div className="row">
                            <div className="col-lg-8">
                                <div className="orders__box">
                                    <h3>danh sách đơn hàng</h3>
                                    <p>Trạng thái tất cả(16) | Đã hủy(10) | Chưa duyệt(0) | Đã duyệt(0) | Đã thanh toán-chờ mua hàng(0) | Đã mua hàng(0) | Hàng đã về-chờ giao hàng(0) | Đã kết thúc(6)</p>
                                </div>
                                <div className="orders__table">
                                    <table>
                                        <tr>
                                            <th>stt</th>
                                            <th>mã hóa đơn hàng mua hàng</th>
                                            <th>kho ngân hàng</th>
                                            <th>số sp</th>
                                            <th>tổng tiền</th>
                                            <th>tình trạng</th>
                                            <th>thao tác</th>
                                        </tr>
                                        <ItemList />
                                        <ItemList />
                                        <ItemList />
                                        <ItemList />
                                        <ItemList />
                                        <ItemList />
                                    </table>
                                </div>
                            </div>
                            <div className="col-lg-4">
                                <InfoCutomer />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default Order;