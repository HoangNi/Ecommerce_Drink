import React, { Component } from 'react';
import ItemHotProduct from './ItemHotProduct';

class HotProduct extends Component {
    render() {
        return (
            <div className="hotproduct" id="hotproduct">
                <div className="container">
                    <div className="hotproduct__title">
                        <h1 className="title">Sản phẩm bán chạy</h1><img src="image/title_dark.png" alt="title_dark" />
                    </div>
                    <div className="row">
                        <ItemHotProduct />
                        <ItemHotProduct />
                        <ItemHotProduct />
                        <ItemHotProduct />
                    </div>
                </div>
            </div>
        );
    }
}

export default HotProduct;