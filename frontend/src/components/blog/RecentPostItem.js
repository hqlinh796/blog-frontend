import React, { Component } from 'react';
import {Link} from 'react-router-dom'

class RecentPostItem extends Component {

    getFullDate = (timestamp) => {
        const date = new Date(timestamp);
        const day = date.getDate(),
              month = date.getMonth() + 1,
              year = date.getFullYear();
        return day + '/' + month + '/' + year;
    }

    toSlug = (str) => {
        // Chuyển hết sang chữ thường
        str = str.toLowerCase();

        // xóa dấu
        str = str.replace(/(à|á|ạ|ả|ã|â|ầ|ấ|ậ|ẩ|ẫ|ă|ằ|ắ|ặ|ẳ|ẵ)/g, 'a');
        str = str.replace(/(è|é|ẹ|ẻ|ẽ|ê|ề|ế|ệ|ể|ễ)/g, 'e');
        str = str.replace(/(ì|í|ị|ỉ|ĩ)/g, 'i');
        str = str.replace(/(ò|ó|ọ|ỏ|õ|ô|ồ|ố|ộ|ổ|ỗ|ơ|ờ|ớ|ợ|ở|ỡ)/g, 'o');
        str = str.replace(/(ù|ú|ụ|ủ|ũ|ư|ừ|ứ|ự|ử|ữ)/g, 'u');
        str = str.replace(/(ỳ|ý|ỵ|ỷ|ỹ)/g, 'y');
        str = str.replace(/(đ)/g, 'd');

        // Xóa ký tự đặc biệt
        str = str.replace(/([^0-9a-z-\s])/g, '');

        // Xóa khoảng trắng thay bằng ký tự -
        str = str.replace(/(\s+)/g, '-');

        // xóa phần dự - ở đầu
        str = str.replace(/^-+/g, '');

        // xóa phần dư - ở cuối
        str = str.replace(/-+$/g, '');

        // return
        return str;
    }

    render() {
        return (
            <div className="recent-post-detail flex flex-a-c m-b-25">
                <img src={this.props.thumbnail} alt="" />
                <div className="recent-post-detail-text m-l-20 lh-15">
                    <Link className="fs-18 fc-black a-hover-to-green" to={'/blog/' + this.toSlug(this.props.title) + '.' + this.props.id} title={this.props.title}>
                        {this.props.title}
                    </Link>
                    <p className="fc-2 fs-14">{this.getFullDate(this.props.date)}</p>
                </div>
            </div>

        );
    }
}

export default RecentPostItem;