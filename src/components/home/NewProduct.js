import React, { Component } from 'react';
import Card from './Card';

class NewProduct extends Component {
    render() {
        return (
            <div className="newproduct" id="newproduct">
                <div className="container">
                    <div className="newproduct__title">
                        <h1 className="title">Sản phẩm mới</h1><img src="./../image/title_dark.png" alt="title_dark" />
                    </div>
                    <div className="row">
                        <Card />
                        <Card />
                        <Card />
                        <Card />
                    </div>
                </div>
            </div>
        );
    }
}

export default NewProduct;