import React, { Component } from 'react';

class InfoCutomer extends Component {
    render() {
        return (
            <div className="orders__infor">
                <h3>thông tin khách hàng</h3>
                <i className="fas fa-user-alt">    GiangLe</i>
                <i className="fas fa-map-marker-alt">  Tầng 4,Tòa nhà HaNoi Group Số 442 Đội Cần, P.Cộng Vị, Quận Ba ĐÌnh, Hà Nội.</i>
                <br></br>
                <i className="fas fa-phone-volume">  (08) 6608 9686  </i>
                <br></br><a href="/">Chi tiết đơn hàng</a>
            </div>
        );
    }
}

export default InfoCutomer;