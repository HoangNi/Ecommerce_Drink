import React, { Component } from 'react';

class ItemHotProduct extends Component {
    render() {
        return (
            <div className="col-lg-3">
                <div className="hotproduct__card">
                    <div className="hotproduct__card__img"><img src="./../image/hotproduct_4.png" alt="ruou vang da lat" /></div>
                    <div className="hotproduct__card__infor">
                        <h3>rượu vang đà lạt</h3>
                        <h5>370.000<sup>đ
                  <del>- 450.000<sup>đ</sup></del></sup></h5>
                        <button className="button">add to cart </button>
                    </div>
                </div>
            </div>
        );
    }
}

export default ItemHotProduct;