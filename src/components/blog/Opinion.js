import React, { Component } from 'react';

class Opinion extends Component {
    render() {
        return (
            <div className="detailblog__opinion">
                <h4>đóng góp ý kiến</h4>
                <div className="detailblog__opinion__input">
                    <label htmlFor="name">Tên *</label>
                    <input type="text" name="name" />
                </div>
                <div className="detailblog__opinion__input">
                    <label htmlFor="email">Email *</label>
                    <input type="email" name="email" />
                </div>
                <div className="detailblog__opinion__input">
                    <label htmlFor="message">Ý kiến *</label>
                    <textarea name="message" cols={30} rows={6} defaultValue={""} />
                </div>
                <div className="detailblog__opinion__button">
                    <label htmlFor="span" />
                    <button className="button">Gửi ý kiến</button>
                </div>
            </div>
        );
    }
}

export default Opinion;