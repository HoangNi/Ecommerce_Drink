import React, { Component } from 'react';

class TagBlog extends Component {
    render() {
        return (
            <div className="detailblog__newblog">
                <h4>bài viết mới nhất</h4>
                <div className="detailblog__newblog__card">
                    <div className="row">
                        <div className="col-lg-4">
                            <div className="detailblog__newblog__card__img"><img src="image/detailblog.png" alt /></div>
                        </div>
                        <div className="col-lg-8">
                            <div className="detailblog__newblog__card__infor">
                                <h5>cách sắp xếp nội thất trong nhà</h5><i className="far fa-calendar">12/06/2015</i>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="detailblog__newblog__card">
                    <div className="row">
                        <div className="col-lg-4">
                            <div className="detailblog__newblog__card__img"><img src="image/detailblog.png" alt /></div>
                        </div>
                        <div className="col-lg-8">
                            <div className="detailblog__newblog__card__infor">
                                <h5>cách sắp xếp nội thất trong nhà</h5><i className="far fa-calendar">12/06/2015</i>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="detailblog__newblog__card">
                    <div className="row">
                        <div className="col-lg-4">
                            <div className="detailblog__newblog__card__img"><img src="image/detailblog.png" alt /></div>
                        </div>
                        <div className="col-lg-8">
                            <div className="detailblog__newblog__card__infor">
                                <h5>cách sắp xếp nội thất trong nhà</h5><i className="far fa-calendar">12/06/2015</i>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="detailblog__tag">
                    <h4>blog tags</h4><a href="#">Đồng hồ</a><a href="#">Túi</a><br /><br /><a href="#">Phụ kiện</a><a href="#">Giày</a><a href="#">Sandal</a><a href="#">Áo sơ mi</a><br /><br /><a href="#">Nước hoa</a><a href="#">Trẻ em</a><a href="#">Thời trang nữ</a>
                </div>
                <div className="detailblog__video">
                    <h4>latest video</h4><img src="image/video.png" alt />
                </div>
            </div>
        );
    }
}

export default TagBlog;