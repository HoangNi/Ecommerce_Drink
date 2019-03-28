import React, { Component } from 'react';

class ItemListProduct extends Component {
    render() {
        return (
            <div className="product--list__card">
                  <div className="row">
                    <div className="col-lg-4">
                      <div className="product--list__card__img"><img src="./../image/hotproduct_4.png" alt="ruou vang da lat" /></div>
                    </div>
                    <div className="col-lg-8">
                      <div className="product--list__card__infor">
                        <h3>rượu nho năm 1987</h3>
                        <h5>330.000<sup>đ</sup></h5>
                        <p>Một hợp chất có trong rượu vang được gọi là resveratro có khả năng làm tăng tối đa tuổi thọ.Resveratro còn có khả năng ngăn chặn mật độ oxy hóa của protein béo.</p>
                      </div>
                      <div className="product--list__card__vote">
                        <div className="row">
                          <div className="col-lg-6">
                            <button className="button">add to cart </button>
                          </div>
                          <div className="col-lg-3"><i className="fas fa-heart">   Yêu thích</i></div>
                          <div className="col-lg-3"><i className="far fa-chart-bar">   So sánh</i></div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
        );
    }
}

export default ItemListProduct;