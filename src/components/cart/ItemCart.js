import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class ItemCart extends Component {
    render() {
        return (
            <tr>
            <td><img src="./../image/hotproduct_4.png" alt="" /></td>
            <td>Rượu vang đỏ</td>
            <td>
                <p>345.000<sup>đ</sup></p>
            </td>
            <td>1</td>
            <td>
                <p>345.000<sup>đ</sup></p>
            </td>
            <td><Link to ="/cart"><i className="fas fa-trash-alt"></i></Link></td>
        </tr>
        );
    }
}

export default ItemCart;