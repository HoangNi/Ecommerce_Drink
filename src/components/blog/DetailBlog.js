import React, { Component } from 'react';
import Menu from '../layout/Menu';
import TagBlog from './TagBlog';
import Comment from './Comment';
import Opinion from './Opinion';
import InfoBlog from './InfoBlog';

class DetailBlog extends Component {
    render() {
        return (
            <div>
                <Menu />
                <section className="detailblog" id="detailblog">
        <div className="container">
          <div className="detailblog__title">
            <p><a href="#">Trang chủ/<span>Blog</span></a></p>
            <h3>blog</h3><img src="image/titleleft-dark.png" alt />
          </div>
          <div className="row">
            <div className="col-lg-4">
              <TagBlog />
            </div>
            <div className="col-lg-8">
              <InfoBlog />
              <Opinion />
              <Comment />
            </div>
          </div>
        </div>
      </section>
            </div>
        );
    }
}

export default DetailBlog;