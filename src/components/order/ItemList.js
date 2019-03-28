import React, { Component } from 'react';

class ItemList extends Component {
    render() {
        return (
            <tr>
                <td>01</td>
                <td>
                    <p>leanhgiang89 - 17/06/2015</p><span>01:36 14/03/2015</span>
                </td>
                <td>Hà Đông</td>
                <td>7</td>
                <td>350.000đ</td>
                <td>Đã thanh toán</td>
                <td>Chi tiết</td>
            </tr>
        );
    }
}

export default ItemList;