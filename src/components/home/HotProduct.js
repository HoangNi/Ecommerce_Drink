import React, { Component } from 'react';
import ItemHotProduct from './ItemHotProduct';

class HotProduct extends Component {
    render() {
        return (
            <div class="hotproduct" id="hotproduct">
                <div class="container">
                    <div class="hotproduct__title">
                        <h1 class="title">Sản phẩm bán chạy</h1><img src="image/title_dark.png" alt="title_dark" />
                    </div>
                    <div class="row">
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