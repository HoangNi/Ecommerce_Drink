import React, { Component } from 'react';

import Menu from './../layout/Menu';
import MenuProduct from './MenuProduct';
import Paging from './Paging';
import ItemListProduct from './ItemListProduct';

class ListProduct extends Component {
    render() {
        return (
            <div>
                <Menu />
                <div className="product" id="product">
                    <div className="container">
                        <div className="product__title">
                            <p><a href="index.html">Trang chủ/Sản phẩm/<span>Rượu vang đỏ</span></a></p>
                        </div>
                        <div className="product__banner" />
                        <div className="row">
                            <div className="col-lg-4">
                                <MenuProduct />
                            </div>
                            <div className="col-lg-8">
                                <Paging />
                                <div className="product--list">
                                    <ItemListProduct />
                                    <hr />
                                    <ItemListProduct />
                                    <hr />
                                    <ItemListProduct />
                                    <hr />
                                    <ItemListProduct />
                                    <hr />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default ListProduct;