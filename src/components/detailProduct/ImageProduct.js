import React, { Component } from 'react';

class ImageProduct extends Component {
    render() {
        return (
            <div className="detailproduct__img">
                <div className="row">
                    <div className="col-lg-2">
                        <div className="detailproduct__img__style"><i className="fas fa-arrow-up" /><img src="./../image/detailproduct_1.png" alt />
                            <hr /><img src="./../image/detailproduct_1.png" alt />
                            <hr /><img src="./../image/detailproduct_2.png" alt />
                            <hr /><img src="./../image/detailproduct_3.png" alt />
                            <hr /><img src="./../image/detailproduct_1.png" alt />
                            <hr /><i className="fas fa-arrow-down" />
                        </div>
                    </div>
                    <div className="col-lg-10">
                        <div className="detailproduct__img__box"><img src="./../image/detailblog_box.png" alt /></div>
                    </div>
                </div>
            </div>
        );
    }
}

export default ImageProduct;