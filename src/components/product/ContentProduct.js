import React, { Component } from 'react';
import MenuProduct from './MenuProduct';
import Paging from './Paging';
import BoxProduct from './BoxProduct';
import { Link } from 'react-router-dom';

class ContentProduct extends Component {
    render() {
        return (
            <div className="product" id="product">
                <div className="container">
                    <div className="product__title">
                        <p> <Link to="/">Trang chủ/<span>Sản phẩm</span></Link></p>
                    </div>
                    <div className="product__banner"></div>
                    <div className="row">
                        <div className="col-lg-4">
                            <MenuProduct />
                        </div>
                        <div className="col-lg-8">
                           <Paging />
                            <div className="product__box">
                                <div className="row">
                                    <BoxProduct />
                                    <BoxProduct />
                                    <BoxProduct />
                                    <BoxProduct />
                                    <BoxProduct />
                                    <BoxProduct />
                                    <BoxProduct />
                                    <BoxProduct />
                                    <BoxProduct />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default ContentProduct;